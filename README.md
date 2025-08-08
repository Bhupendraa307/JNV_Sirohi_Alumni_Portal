# Alumni_Portal_JNV_SIROHI

Jawahar Navodaya Vidyalaya
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application built to serve as a comprehensive, modern, and engaging portal for the alumni of MN Jha DAV Public School, Jhanjharpur.

✨ Features
Secure Authentication: Robust JWT-based user registration and login system with a mandatory admin approval flow for new alumni.

Dynamic Landing Page: A beautiful, multi-section landing page with scroll animations for guests.

Personalized Dashboard: A dedicated dashboard for logged-in users showing a community feed and special announcements.

Profile Management: Alumni can create and edit detailed profiles, including personal information, professional details, and profile picture uploads.(not working)

Community Feed: A central place for alumni to create and view posts about job openings, articles, events, and news.

Interactive Posts: Features for commenting on and sharing posts to boost engagement.

Interest Groups & Chat: Alumni can create and join interest-based groups with real-time chat functionality. (not working)

Alumni Directory: A private, searchable, and filterable directory of all approved alumni.

Birthday Section: A special section on the dashboard that automatically features alumni on their birthday.

Admin Dashboard: A protected area for administrators to approve new user registrations, manage posts, and view user feedback.

Email Notifications: Automated email notifications are sent to alumni upon account approval.

Modern, Responsive UI: A mobile-first, "GenZ" inspired design using Tailwind CSS, featuring a clean layout and smooth animations.

#🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Heroicons, Axios, react-intersection-observer

Backend: Node.js, Express.js, Mongoose ODM

Database: MongoDB

Authentication: JSON Web Tokens (JWT), bcrypt

File Uploads: Multer

Email: Nodemailer

#🚀 Running the Project Locally
Prerequisites
Node.js and npm (Node Package Manager)

MongoDB (either running locally or a connection string from MongoDB Atlas)

Git

1. Clone the Repository



#2. Backend Setup
1. Navigate to the backend folder
cd backend

2. Install dependencies
npm install

3. Create a .env file in the /backend directory and add your variables
(You can copy from .env example if one exists)

MONGO_URI=
JWT_SECRET=
PORT=
SMTP_HOST=
SMTP_PORT=
EMAIL_USER=
EMAIL_PASS=
JWT_RESET_SECRET=

4.Start the backend server
npm run dev

#Frontend Setup
1. From the root directory, navigate to the frontend folder
cd ../frontend

2. Install dependencies
npm install

3. Create a .env file in the /frontend directory and add your API URL
REACT_APP_API_URL=http://localhost:5000/api

4. Start the frontend React app
npm start

The frontend will be available at http://localhost:3000 and the backend server will be listening on http://localhost:5000.

Developed by
Bhupendra Kumar Chouhan
"# JNV_Sirohi_Alumni_Portal" 
