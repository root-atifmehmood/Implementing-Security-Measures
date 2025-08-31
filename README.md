Secure Node.js Authentication API
A foundational Node.js project demonstrating essential security best practices for user authentication. This application provides a secure REST API with user registration and login functionality, built with a focus on security, clarity, and best practices.

Features
🔐 Secure Password Hashing: Uses bcrypt to salt and hash user passwords, never storing them in plaintext.

🛡️ HTTP Header Protection: Implements helmet to protect against common web vulnerabilities like XSS, clickjacking, and more.

✅ Input Validation & Sanitization: Leverages the validator library to validate incoming data (like emails) and sanitize inputs to prevent injection attacks.

🔑 Token-Based Authentication: Uses JSON Web Tokens (JWT) for stateless, secure session management after a user logs in.

🚀 Lightweight & Focused: Built with Express.js, keeping the codebase minimal and easy to understand.

Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (v14.x or later recommended)

npm (comes bundled with Node.js)

A command-line tool for making API requests, such as cURL or Postman.

How to Execute This Code
Follow these step-by-step instructions to get the application running on your local machine.

1. Clone the Repository
First, clone this repository from GitHub to your local machine using the following command:

git clone https://github.com/root-atifmehmood/Implementing-Security-Measures.git


2. Navigate to the Project Directory
Change your current directory to the newly cloned project folder:

cd your-repository-name

3. Install Dependencies
Install all the required npm packages listed in package.json:

npm install

This command will download express, helmet, bcrypt, jsonwebtoken, and validator into a node_modules folder.

4. Run the Server
Start the Node.js application using the following command:

node app.js

You should see a confirmation message in your terminal, indicating that the server is running and ready to accept requests:

Server running on http://localhost:3000

Keep this terminal window open! This is your running server.

5. Test the API Endpoints
Open a new terminal window to interact with your running server. Do not use the terminal where the server is running.

A. Register a New User
Send a POST request to the /register endpoint to create a new user.

Command:

curl -X POST -H "Content-Type: application/json" -d '{"username": "testuser", "email": "test@example.com", "password": "a-secure-password"}' http://localhost:3000/register

Expected Success Output:

{"message":"User registered successfully!","user":{"id":1,"username":"testuser"}}

B. Log In as the User
Send a POST request to the /login endpoint with the credentials you just created.

Command:

curl -X POST -H "Content-Type: application/json" -d '{"email": "test@example.com", "password": "a-secure-password"}' http://localhost:3000/login

Expected Success Output:
You will receive a success message along with a JSON Web Token (JWT).

{"message":"Login successful!","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTY2MTk2NzYxMywiZXhwIjoxNjYxOTcxMjEzfQ.some-long-signature-string"}

You have now successfully set up, run, and tested the application!

Technology Stack
Backend: Node.js

Framework: Express.js

Security Libraries:

helmet

bcrypt

jsonwebtoken

validator
