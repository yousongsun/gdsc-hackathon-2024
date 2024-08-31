import 'package:flutter/material.dart';
import 'package:camera/camera.dart';

class CameraScreen extends StatefulWidget {
  const CameraScreen({super.key});

  @override
  _CameraScreenState createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen> {
  CameraController? _cameraController;
  List<CameraDescription>? cameras;
  bool _isCameraInitialized = false;

  @override
  void initState() {
    super.initState();
    initializeCamera();
  }

  Future<void> initializeCamera() async {
    cameras = await availableCameras();
    if (cameras != null && cameras!.isNotEmpty) {
      _cameraController = CameraController(
        cameras![0], // Use the first available camera (usually back camera)
        ResolutionPreset.high,
      );

      // Initialize the camera controller
      await _cameraController!.initialize();
      if (!mounted) return;

      setState(() {
        _isCameraInitialized = true;
      });
    }
  }

  @override
  void dispose() {
    _cameraController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Color(0xFF94b9ff), // Light blue from hex code #94b9ff
              Color(0xFF7751b5), // Purple from hex code #7751b5
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        padding: EdgeInsets.only(left: 16.0, right: 16.0, top: 24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                GestureDetector(
                  onTap: () {
                    // Handle your navigation logic here
                    Navigator.pushNamed(context, '/');
                  },
                  child: Image.asset(
                    'assets/images/icon.jpg',
                    // Replace with your actual image path
                    width: 64.0, // w-16
                    height: 64.0, // h-16
                  ),
                ),
                const SizedBox(width: 8.0),
                // Add space between the image and text
                const Text(
                  'Scan the label',
                  style: TextStyle(
                    fontSize: 24.0, // text-3xl
                    color: Colors.white, // text-white
                    fontWeight: FontWeight.bold, // font-bold
                  ),
                ),
              ],
            ),
            Expanded(
              child: _isCameraInitialized && _cameraController != null
                  ? Stack(
                children: [
                  Center(
                    child: CameraPreview(_cameraController!), // Center and fill the available space
                  ),
                  Align(
                    alignment: Alignment.bottomCenter, // Aligns the button to the bottom center
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 20), // Add padding from the bottom if needed
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.pushNamed(context, '/');
                        },
                        child: Text('Capture'), // Example button
                      ),
                    ),
                  ),
                ],
              )
                  : Center(
                child: CircularProgressIndicator(), // Show loading indicator while camera initializes
              ),
            ),


          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(
              icon: Icon(Icons.calendar_month), label: 'Calendar'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'User'),
        ],
        onTap: (int index) {
          if (index == 0) {
            Navigator.pushNamed(context, '/');
          } else if (index == 1) {
            Navigator.pushNamed(context, '/calendar');
          } else if (index == 2) {
            Navigator.pushNamed(context, '/profile');
          }
        },
      ),
    );
  }
}
