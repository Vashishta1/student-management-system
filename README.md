A full-stack web application for managing student data. The system allows admins to perform CRUD (Create, Read, Update, Delete) operations on student records, including personal details and academic information.

Features
Student CRUD Operations: Add, edit, and delete student records.

Student Profiles: View detailed student information, including photo, name, student ID, DOB, department, and enrollment year.

Responsive Design: Fully responsive UI optimized for mobile and desktop.

Backend Deployment: Node.js with Express.js backend deployed on Render.

Frontend Deployment: React frontend with build optimizations deployed on Render.

Tech Stack
Frontend:

React.js (with hooks and functional components)

HTML, CSS (for styling)

Axios (for API requests)

Backend:

Node.js with Express.js

MongoDB (for database management)

Deployment:

Render (for both frontend and backend deployment)

Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/student-management-system.git
Navigate to the backend directory:

bash
Copy
Edit
cd student-management-system/backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend directory with your MongoDB connection string:

bash
Copy
Edit
MONGODB_URI=your-mongodb-uri
PORT=5000
Start the backend server:

bash
Copy
Edit
npm start
Navigate to the frontend directory:

bash
Copy
Edit
cd ../frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend server:

bash
Copy
Edit
npm start
Now, visit http://localhost:3000 to see the application running.

Usage
Student Profiles: After login, admins can see a list of students along with basic information.

Add Student: Admins can add new student records with personal details and academic information.

Edit Student: Admins can edit student details by selecting a student and making changes.

Delete Student: Admins can delete student records from the system.

Screenshots
Student List View:

Student Profile View:

API Endpoints
GET /students
Retrieve a list of all students.

GET /students/:id
Retrieve detailed information for a specific student.

POST /students
Add a new student to the system.

PUT /students/:id
Update the details of a specific student.

DELETE /students/:id
Remove a student from the system.

License
This project is licensed under the MIT License - see the LICENSE file for details.
