import express from "express";
import multer from "multer";
import crypto from "crypto";
import fs from "fs";

// Get an instance of multer. Files will be uploaded to the "temp" folder.
const upload = multer({ dest: "temp" });

const router = express.Router();

/**
 * On a POST to "/api/uploads", as multipart/form-data, multer will read the uploaded file
 * specified with "imageFile". The text part, named "message", will be available as req.body.message.
 *
 * This
 */
router.post("/", upload.single("upload"), async (req, res) => {
    // If we want the original file name, we can get it with req.file.originalname
    console.log(req.file.originalname);

    // Getting the path will get the current location and filename of the uploaded file.
    // Note that the file will be named something random.
    console.log(req.file.path);

    // Let's create a custom file name for our newly uploaded file, and move it into the
    // public/images folder. We're creating a random file name here; you could potentially
    // use the originalname instead, but then you'll have to watch out for cases where users might
    // accidentally overwrite each others' files.
    const originalname = req.file.originalname;
    const fileExtension = originalname.substring(originalname.lastIndexOf("."));
    const sha256Hash = await calculateFileHash(req.file.path);
    const newFileName = sha256Hash + fileExtension;
    console.log(newFileName);

    // Move the file using fs package. We can do this using rename operations
    fs.renameSync(req.file.path, `public/images/${newFileName}`);

    // Now let's send req.body.message and the path of the image back to the browser, as JSON.
    const response = {
        message: req.body.message,
        image: `${newFileName}` // Remember not to include "public" since that part will be ignored in the URL.
    };

    return res.json(response);
});

function calculateFileHash(filePath) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha256");
        const stream = fs.createReadStream(filePath);

        stream.on("error", reject);
        hash.on("error", reject);

        stream.on("data", (data) => {
            hash.update(data);
        });

        stream.on("end", () => {
            const sha256Hash = hash.digest("hex");
            resolve(sha256Hash);
        });
    });
}

export default router;