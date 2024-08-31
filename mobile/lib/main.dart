import 'package:flutter/material.dart';
import 'src/ui/screens/login_screen.dart';
import 'src/ui/screens/home_screen.dart';
import 'src/ui/screens/calendar_screen.dart';
import 'src/ui/screens/prescriptions_screen.dart';
import 'src/ui/screens/profile_screen.dart';
import 'src/ui/screens/camera_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DoseCat -- HackBar Team',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const HomeScreen(),  // Sets the initial screen to HomeScreen
      routes: {
        '/home': (context) => const HomeScreen(),
        '/calendar': (context) => CalendarScreen(),
        '/prescriptions': (context) => PrescriptionsScreen(),
        '/profile': (context) => ProfileScreen(),
        '/login': (context) => LoginScreen(),
        '/camera': (context) => CameraScreen(),
      },
    );
  }
}
