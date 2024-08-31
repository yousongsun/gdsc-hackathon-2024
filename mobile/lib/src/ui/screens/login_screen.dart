import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

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
        child: SingleChildScrollView(
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
                        'Login',
                        style: TextStyle(
                          fontSize: 24.0, // text-3xl
                          color: Colors.white, // text-white
                          fontWeight: FontWeight.bold, // font-bold
                        ),
                      ),
                    ],
                  ),


                  const SizedBox(height: 50.0),
                  TextField(
                    decoration: InputDecoration(
                      hintText: 'Username',
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12.0),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  TextField(
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: 'Password',
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12.0),
                      ),
                    ),
                  ),
                  const SizedBox(height: 24.0),
                  ElevatedButton(
                    onPressed: () {
                      // Perform login action
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(content: Text('Logging in...')),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      // primary: Color(0xFF7751b5), // Button color
                      padding: EdgeInsets.symmetric(horizontal: 32.0, vertical: 12.0),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0),
                      ),
                    ),
                    child: Text('Login'),
                  ),





                ])),
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
