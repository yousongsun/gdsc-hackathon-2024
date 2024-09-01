import 'package:flutter/material.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

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
                    'Good Afternoon',
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
                  color: Colors.white.withOpacity(0.8), // bg-white/80
                  borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                ),
                margin: EdgeInsets.symmetric(vertical: 16.0),
                // my-4
                padding: EdgeInsets.all(24.0),
                // p-6
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'In 2 hours, 25 minutes',
                      style: TextStyle(
                        color: Colors.grey[400], // text-gray-400
                        fontSize: 20.0, // text-xl
                      ),
                    ),
                    SizedBox(height: 8.0), // spacing between elements
                    Text(
                      'Amoxicillin',
                      style: TextStyle(
                        fontSize: 32.0, // text-4xl
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '400mg, 2 tablets',
                      style: TextStyle(
                        fontSize: 16.0,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 16.0),
                    Container(
                      padding: EdgeInsets.all(8.0), // p-2
                      width: double.infinity, // w-full
                      decoration: BoxDecoration(
                        color: Colors.grey[400], // bg-gray-400
                        borderRadius:
                            BorderRadius.circular(16.0), // rounded-2xl
                      ),
                      child: Stack(
                        children: [
                          Container(
                            height: 4.0, // h-1
                            decoration: BoxDecoration(
                              color: Colors.purple[600], // bg-purple-600
                              borderRadius:
                                  BorderRadius.circular(16.0), // rounded-2xl
                            ),
                            width: MediaQuery.of(context).size.width *
                                4/14, // width: 40%
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '4/14 taken',
                      style: TextStyle(
                        color: Colors.grey[400], // text-gray-400
                        fontSize: 20.0, // text-xl
                      ),
                    ),
                    SizedBox(height: 8.0),
                    // Text(
                    //   'text',
                    //   style: TextStyle(
                    //     fontSize: 16.0,
                    //     color: Colors.black,
                    //   ),
                    // ),
                  ],
                ),
              ),

            GestureDetector(
              onTap: () {
                Navigator.pushNamed(context, '/prescriptions');
              },
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.8), // bg-white/80
                  borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                ),
                margin: EdgeInsets.symmetric(vertical: 16.0), // my-4
                padding: EdgeInsets.all(24.0), // p-6
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'In 2 hours, 25 minutes',
                      style: TextStyle(
                        color: Colors.grey[400], // text-gray-400
                        fontSize: 20.0, // text-xl
                      ),
                    ),
                    SizedBox(height: 8.0), // spacing between elements
                    Text(
                      'Metformin',
                      style: TextStyle(
                        fontSize: 32.0, // text-4xl
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '500mg, 4 tablets',
                      style: TextStyle(
                        fontSize: 16.0,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 16.0),
                    Container(
                      padding: EdgeInsets.all(8.0), // p-2
                      width: double.infinity, // w-full
                      decoration: BoxDecoration(
                        color: Colors.grey[400], // bg-gray-400
                        borderRadius: BorderRadius.circular(16.0), // rounded-2xl
                      ),
                      child: Stack(
                        children: [
                          Container(
                            height: 4.0, // h-1
                            decoration: BoxDecoration(
                              color: Colors.purple[600], // bg-purple-600
                              borderRadius: BorderRadius.circular(16.0), // rounded-2xl
                            ),
                            width: MediaQuery.of(context).size.width * 22 / 55, // width: 40%
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '22/55 taken',
                      style: TextStyle(
                        color: Colors.grey[400], // text-gray-400
                        fontSize: 20.0, // text-xl
                      ),
                    ),
                    SizedBox(height: 8.0),
                  ],
                ),
              ),
            ),

            Container(
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.8), // bg-white/80
                  borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                ),
                margin: EdgeInsets.symmetric(vertical: 16.0),
                // my-4
                padding: EdgeInsets.all(24.0),
                // p-6
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'In 3 hours, 5 minutes',
                      style: TextStyle(
                        color: Colors.grey[400], // text-gray-400
                        fontSize: 20.0, // text-xl
                      ),
                    ),
                    SizedBox(height: 8.0), // spacing between elements
                    Text(
                      'Nivolumab',
                      style: TextStyle(
                        fontSize: 32.0, // text-4xl
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '100mg, 10ml',
                      style: TextStyle(
                        fontSize: 16.0,
                        color: Colors.black,
                      ),
                    ),
                    SizedBox(height: 16.0),
                    Container(
                      padding: EdgeInsets.all(8.0), // p-2
                      width: double.infinity, // w-full
                      decoration: BoxDecoration(
                        color: Colors.grey[400], // bg-gray-400
                        borderRadius:
                            BorderRadius.circular(16.0), // rounded-2xl
                      ),
                      child: Stack(
                        children: [
                          Container(
                            height: 4.0, // h-1
                            decoration: BoxDecoration(
                              color: Colors.purple[600], // bg-purple-600
                              borderRadius:
                                  BorderRadius.circular(16.0), // rounded-2xl
                            ),
                            width: MediaQuery.of(context).size.width *
                                4/12, // width: 40%
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '4/12 taken',
                      style: TextStyle(
                        color: Colors.grey[400], // text-gray-400
                        fontSize: 20.0, // text-xl
                      ),
                    ),
                    SizedBox(height: 8.0),
                    // Text(
                    //   'text',
                    //   style: TextStyle(
                    //     fontSize: 16.0,
                    //     color: Colors.black,
                    //   ),
                    // ),
                  ],
                ),
              ),

                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.8), // bg-white/80
                      borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                    ),
                    margin: EdgeInsets.symmetric(vertical: 16.0),
                    // my-4
                    padding: EdgeInsets.all(24.0),
                    // p-6
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'In 9 hours, 25 minutes',
                          style: TextStyle(
                            color: Colors.grey[400], // text-gray-400
                            fontSize: 20.0, // text-xl
                          ),
                        ),
                        SizedBox(height: 8.0), // spacing between elements
                        Text(
                          'Pembrolizumab',
                          style: TextStyle(
                            fontSize: 32.0, // text-4xl
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Text(
                          '25mg, 4 ml',
                          style: TextStyle(
                            fontSize: 16.0,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 16.0),
                        Container(
                          padding: EdgeInsets.all(8.0), // p-2
                          width: double.infinity, // w-full
                          decoration: BoxDecoration(
                            color: Colors.grey[400], // bg-gray-400
                            borderRadius:
                            BorderRadius.circular(16.0), // rounded-2xl
                          ),
                          child: Stack(
                            children: [
                              Container(
                                height: 4.0, // h-1
                                decoration: BoxDecoration(
                                  color: Colors.purple[600], // bg-purple-600
                                  borderRadius:
                                  BorderRadius.circular(16.0), // rounded-2xl
                                ),
                                width: MediaQuery.of(context).size.width *
                                    8/14, // width: 40%
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Text(
                          '10/14 taken',
                          style: TextStyle(
                            color: Colors.grey[400], // text-gray-400
                            fontSize: 20.0, // text-xl
                          ),
                        ),
                        SizedBox(height: 8.0),
                        // Text(
                        //   'text',
                        //   style: TextStyle(
                        //     fontSize: 16.0,
                        //     color: Colors.black,
                        //   ),
                        // ),
                      ],
                    ),
                  ),

                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.8), // bg-white/80
                      borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                    ),
                    margin: EdgeInsets.symmetric(vertical: 16.0),
                    // my-4
                    padding: EdgeInsets.all(24.0),
                    // p-6
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'In 12 hours, 25 minutes',
                          style: TextStyle(
                            color: Colors.grey[400], // text-gray-400
                            fontSize: 20.0, // text-xl
                          ),
                        ),
                        SizedBox(height: 8.0), // spacing between elements
                        Text(
                          'Semaglutide',
                          style: TextStyle(
                            fontSize: 32.0, // text-4xl
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Text(
                          '3mg, 1 tablet',
                          style: TextStyle(
                            fontSize: 16.0,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 16.0),
                        Container(
                          padding: EdgeInsets.all(8.0), // p-2
                          width: double.infinity, // w-full
                          decoration: BoxDecoration(
                            color: Colors.grey[400], // bg-gray-400
                            borderRadius:
                            BorderRadius.circular(16.0), // rounded-2xl
                          ),
                          child: Stack(
                            children: [
                              Container(
                                height: 4.0, // h-1
                                decoration: BoxDecoration(
                                  color: Colors.purple[600], // bg-purple-600
                                  borderRadius:
                                  BorderRadius.circular(16.0), // rounded-2xl
                                ),
                                width: MediaQuery.of(context).size.width *
                                    8/11, // width: 40%
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Text(
                          '9/10 taken',
                          style: TextStyle(
                            color: Colors.grey[400], // text-gray-400
                            fontSize: 20.0, // text-xl
                          ),
                        ),
                        SizedBox(height: 8.0),
                        // Text(
                        //   'text',
                        //   style: TextStyle(
                        //     fontSize: 16.0,
                        //     color: Colors.black,
                        //   ),
                        // ),
                      ],
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.8), // bg-white/80
                      borderRadius: BorderRadius.circular(24.0), // rounded-3xl
                    ),
                    margin: EdgeInsets.symmetric(vertical: 16.0),
                    // my-4
                    padding: EdgeInsets.all(24.0),
                    // p-6
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'In 12 hours, 25 minutes',
                          style: TextStyle(
                            color: Colors.grey[400], // text-gray-400
                            fontSize: 20.0, // text-xl
                          ),
                        ),
                        SizedBox(height: 8.0), // spacing between elements
                        Text(
                          'Losartan',
                          style: TextStyle(
                            fontSize: 32.0, // text-4xl
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Text(
                          '50mg, 3 tablets',
                          style: TextStyle(
                            fontSize: 16.0,
                            color: Colors.black,
                          ),
                        ),
                        SizedBox(height: 16.0),
                        Container(
                          padding: EdgeInsets.all(8.0), // p-2
                          width: double.infinity, // w-full
                          decoration: BoxDecoration(
                            color: Colors.grey[400], // bg-gray-400
                            borderRadius:
                            BorderRadius.circular(16.0), // rounded-2xl
                          ),
                          child: Stack(
                            children: [
                              Container(
                                height: 4.0, // h-1
                                decoration: BoxDecoration(
                                  color: Colors.purple[600], // bg-purple-600
                                  borderRadius:
                                  BorderRadius.circular(16.0), // rounded-2xl
                                ),
                                width: MediaQuery.of(context).size.width *
                                    15/24, // width: 40%
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 8.0),
                        Text(
                          '15/24 taken',
                          style: TextStyle(
                            color: Colors.grey[400], // text-gray-400
                            fontSize: 20.0, // text-xl
                          ),
                        ),
                        SizedBox(height: 8.0),
                        // Text(
                        //   'text',
                        //   style: TextStyle(
                        //     fontSize: 16.0,
                        //     color: Colors.black,
                        //   ),
                        // ),
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

class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Prescriptions'),
      ),
      body: const Center(
        child: Text(
          'This is the Second Screen!',
          style: TextStyle(fontSize: 24),
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
