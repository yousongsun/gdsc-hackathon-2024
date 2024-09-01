import 'package:flutter/material.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

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
                      Navigator.pushNamed(context, '/home');
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
                    'My Account',
                    style: TextStyle(
                      fontSize: 24.0, // text-3xl
                      color: Colors.white, // text-white
                      fontWeight: FontWeight.bold, // font-bold
                    ),
                  ),
                ],
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.6), // bg-white/60
                  borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1), // shadow-lg
                      blurRadius: 10.0,
                      offset: Offset(0, 5),
                    ),
                  ],
                ),
                padding: EdgeInsets.all(24.0), // p-6
                margin: EdgeInsets.only(top: 16.0), // mt-4
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Profile',
                      style: TextStyle(
                        fontSize: 18.0, // text-lg
                        color: Color(0xFF666666), // text-[#666666]
                        fontWeight: FontWeight.bold, // font-bold
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      // justify-between
                      children: [
                        Text(
                          'Jane Doe',
                          style: TextStyle(
                            fontSize: 28.0, // text-3xl
                            fontWeight: FontWeight.bold, // font-bold
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      'Auckland, New Zealand',
                      style: TextStyle(
                        fontSize: 20.0, // text-xl
                        fontWeight: FontWeight.bold, // font-bold
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      'Email: janedoe23456@gmail.com',
                      style: TextStyle(
                        color: Colors.grey[800], // text-gray-800
                      ),
                    ),
                    Text(
                      'Gender: Female',
                      style: TextStyle(
                        color: Colors.grey[800], // text-gray-800
                      ),
                    ),
                    Text(
                      'Date of Birth: 31/8/1987',
                      style: TextStyle(
                        color: Colors.grey[800], // text-gray-800
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.6),
                  borderRadius: BorderRadius.circular(24.0),
                  // 3xl rounded corners
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      spreadRadius: 2,
                      blurRadius: 8,
                      offset: Offset(0, 4), // shadow direction: bottom right
                    ),
                  ],
                ),
                padding: EdgeInsets.all(24.0), // Padding of 6 units
                margin: EdgeInsets.only(top: 16.0), // Margin-top of 4 units
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Account Settings',
                      style: TextStyle(
                        fontSize: 18.0, // text-lg
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF666666), // Custom color #666666
                      ),
                    ),
                    SizedBox(height: 16.0), // Margin bottom of 2 units
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Change Password Section
                        Text(
                          'Change Password',
                          style: TextStyle(
                            fontSize: 20.0, // text-xl
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        // Margin bottom of 2 units
                        Text(
                          'Placeholder text Placeholder text Placeholder text Placeholder text',
                          style: TextStyle(
                            color: Colors.grey[800],
                          ),
                        ),
                        Divider(height: 32.0),
                        // my-4: Vertical space around the divider

                        // Notifications Section
                        Text(
                          'Notifications',
                          style: TextStyle(
                            fontSize: 20.0, // text-xl
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        // Margin bottom of 2 units
                        Text(
                          'Placeholder text Placeholder text Placeholder text Placeholder text',
                          style: TextStyle(
                            color: Colors.grey[800],
                          ),
                        ),
                        Divider(height: 32.0),
                        // my-4: Vertical space around the divider

                        // Additional Settings Section
                        Text(
                          'Additional Settings',
                          style: TextStyle(
                            fontSize: 20.0, // text-xl
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        // Margin bottom of 2 units
                        Text(
                          'Placeholder text Placeholder text Placeholder text Placeholder text',
                          style: TextStyle(
                            color: Colors.grey[800],
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              SizedBox(height: 20.0),
            ])),
      ),
      floatingActionButton: SpeedDial(
        icon: Icons.add,
        activeIcon: Icons.close,
        backgroundColor: Colors.blue,
        overlayColor: Colors.black,
        overlayOpacity: 0.2,
        children: [
          SpeedDialChild(
            child: Icon(Icons.calendar_month),
            label: 'Calendar',
            onTap: () {
              Navigator.pushNamed(context, '/calendar');
            },
          ),
          SpeedDialChild(
            child: Icon(Icons.photo_camera),
            label: 'Scan',
            onTap: () {
              Navigator.pushNamed(context, '/camera');
            },
          ),
        ],
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
            Navigator.pushNamed(context, '/home');
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
