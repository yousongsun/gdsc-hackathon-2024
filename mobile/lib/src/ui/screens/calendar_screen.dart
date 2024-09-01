import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:flutter_speed_dial/flutter_speed_dial.dart';
import '../../utils/utils.dart';
import 'dart:async';

class CalendarScreen extends StatefulWidget {
  @override
  _CalendarScreenState createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen> {
  CalendarFormat _calendarFormat = CalendarFormat.month;
  DateTime _focusedDay = DateTime.now();
  DateTime? _selectedDay;
  Timer? _notificationTimer;
  bool _showNotification = false;

  @override
  void initState() {
    super.initState();
    _startNotificationTimer();
  }

  @override
  void dispose() {
    _notificationTimer?.cancel();
    super.dispose();
  }

  void _startNotificationTimer() {
    _notificationTimer = Timer.periodic(Duration(seconds: 5), (timer) {
      _showTopNotification();
    });
  }

  void _showTopNotification() {
    setState(() {
      _showNotification = true;
    });

    // Hide the notification after 5 seconds
    Future.delayed(Duration(seconds: 5), () {
      setState(() {
        _showNotification = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Container(
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
                            'Calendar',
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
                            TableCalendar(
                              firstDay: kFirstDay,
                              lastDay: kLastDay,
                              focusedDay: _focusedDay,
                              calendarFormat: _calendarFormat,
                              selectedDayPredicate: (day) {
                                return isSameDay(_selectedDay, day);
                              },
                              onDaySelected: (selectedDay, focusedDay) {
                                if (!isSameDay(_selectedDay, selectedDay)) {
                                  setState(() {
                                    _selectedDay = selectedDay;
                                    _focusedDay = focusedDay;
                                  });
                                }
                              },
                              onFormatChanged: (format) {
                                if (_calendarFormat != format) {
                                  setState(() {
                                    _calendarFormat = format;
                                  });
                                }
                              },
                              onPageChanged: (focusedDay) {
                                _focusedDay = focusedDay;
                              },
                            ),
                          ],
                        ),
                      ),
                      SizedBox(height: 20.0),
                    ])),
          ),
          AnimatedPositioned(
            duration: Duration(milliseconds: 500),
            top: _showNotification ? 0 : -100, // Slide in and out of view
            left: 0,
            right: 0,
            child: _buildNotification(),
          ),
        ],
      ),
      floatingActionButton: SpeedDial(
        icon: Icons.add,
        activeIcon: Icons.close,
        backgroundColor: Colors.blue,
        overlayColor: Colors.black,
        overlayOpacity: 0.5,
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

  Widget _buildNotification() {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 15.0),
      margin: EdgeInsets.all(20.0),
      decoration: BoxDecoration(
        color: Colors.blueAccent,
        borderRadius: BorderRadius.circular(10.0),
        boxShadow: [
          BoxShadow(
            color: Colors.black26,
            blurRadius: 10.0,
            offset: Offset(0, 5),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          GestureDetector(
            onTap: () {
              // Navigate to another page
              Navigator.pushNamed(context, '/prescriptions');
            },
            child: Text(
              'You should take the Metformin now!',
              style: TextStyle(color: Colors.white, fontSize: 16.0),
            ),
          ),
          IconButton(
            icon: Icon(Icons.close, color: Colors.white),
            onPressed: () {
              setState(() {
                _showNotification = false;
              });
            },
          ),
        ],
      ),
    );
  }
}
