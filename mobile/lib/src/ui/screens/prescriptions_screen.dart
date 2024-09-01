import 'package:flutter/material.dart';

class PrescriptionsScreen extends StatelessWidget {
  const PrescriptionsScreen({super.key});

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
                        'Prescription Details',
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
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Every 4 hours',
                              style: TextStyle(
                                fontSize: 28,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFF666666),
                              ),
                            ),
                            SizedBox(height: 16),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  'Metformin',
                                  style: TextStyle(
                                    fontSize: 40,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Row(
                                  children: [
                                    _buildActionButton('+', Color(0xFF808080)),
                                    _buildActionButton('-', Color(0xFF808080)),
                                  ],
                                ),
                              ],
                            ),
                            SizedBox(height: 16),
                            Text(
                              '500mg, 4 tablets per dose',
                              style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 10),
                            Container(
                              width: double.infinity,
                              height: 20,
                              decoration: BoxDecoration(
                                color: Color(0xFF4C51BF),
                                borderRadius: BorderRadius.circular(16),
                              ),
                              child: FractionallySizedBox(
                                widthFactor: 22/55,
                                alignment: Alignment.centerLeft,
                                child: Container(
                                  height: 20,
                                  decoration: BoxDecoration(
                                    color: Colors.white.withOpacity(0.9),
                                    borderRadius: BorderRadius.circular(16),
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(height: 16),
                            Text(
                              '22/55 Doses taken',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFFA0A9A9),
                              ),
                            ),
                            SizedBox(height: 16),
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [

                                      Container(
                                        width: double.infinity,
                                        height: 300,
                                        decoration: BoxDecoration(
                                          border: Border.all(
                                            color: Color(0xFF4C51BF),
                                            width: 1,
                                          ),
                                          borderRadius: BorderRadius.circular(16),
                                          image: DecorationImage(
                                            image: AssetImage('assets/images/metformin.jpg'),
                                            fit: BoxFit.cover,
                                          ),
                                        ),
                                      ),

                                      _buildSectionTitle('Administration Instructions'),
                                      _buildSectionContent(
                                          'Administer with meals to reduce gastrointestinal side effects. Do not crush, chew, or break extended-release tablets. Take the medication at the same time each day to maintain even levels of the drug in your bloodstream. If a dose is missed, take it as soon as remembered unless it is almost time for the next dose. Do not double up on doses to make up for a missed one.'),
                                      _buildSectionTitle('Common Side Effects'),
                                      _buildSectionContent(
                                          'Gastrointestinal issues such as nausea, vomiting, diarrhea, abdominal discomfort, and loss of appetite. These often diminish as the body adjusts to the medication.'),
                                      _buildSectionTitle('Additional Details'),
                                      _buildSectionContent(
                                          'Metformin can interact with various medications such as diuretics, corticosteroids, and blood pressure medications. It\'s important to inform healthcare providers of all medications and supplements being taken. Regular monitoring of blood glucose levels is essential to assess the effectiveness of Metformin and make any necessary adjustments to dosage.'),
                                    ],
                                  ),
                                ),

                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: 20.0),
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

  Widget _buildActionButton(String text, Color color) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4.0),
      child: ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          shape: CircleBorder(),
          padding: EdgeInsets.all(12),
          // primary: color,
        ),
        child: Text(
          text,
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
    );
  }

  Widget _buildEditButton(String text, Color color) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4.0),
      child: ElevatedButton(
        onPressed: () {},
        style: ElevatedButton.styleFrom(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(24),
          ),
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          // primary: color,
        ),
        child: Text(
          text,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w600,
            color: Colors.white,
          ),
        ),
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Padding(
      padding: const EdgeInsets.only(top: 16.0),
      child: Text(
        title,
        style: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget _buildSectionContent(String content) {
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: Text(
        content,
        style: TextStyle(
          fontSize: 18,
          color: Colors.black87,
          height: 1.5,
        ),
      ),
    );
  }
}

