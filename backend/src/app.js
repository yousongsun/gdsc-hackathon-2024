// Configure environment variables
import dotenv from "dotenv";
dotenv.config();

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Express API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
  },
  apis: ['./routes/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";


// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// Creates the express server
const app = express();
app.use(cors());
/**
 * Configure middleware (logging, CORS support, JSON parsing support,
 * static files support, cookie parser)
 *
 * CORS is configured to allow cookies and these two origins from fetch() requests.
 * Feel free to reconfigure if required, or add your own middleware.
 */
app.use(morgan("combined"));
app.use(cookieParser());
app.use(
  cors({
    origin: [`http://localhost:${PORT}`, process.env.FRONTEND_ORIGIN],
    credentials: true
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

// Import and use our application routes.
import routes from "./routes/routes.js";
app.use("/", routes);

// Make sure our database is up and running
// import { getDatabase } from "./data/database.js";
// await getDatabase();

// Start the server running.
mongoose.connect(process.env.DB_URL).then(() =>
  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  })
);

// Initialize Firebase Admin SDK
// DBadmin.initializeApp({
//   credential: DBadmin.credential.applicationDefault(),
//   databaseURL: 'https://medtracker-15461-default-rtdb.asia-southeast1.firebasedatabase.app/'
// });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
