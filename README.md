

## Setting up the Client with Vite

To create the client using Vite, run the following command and follow the prompts:

```bash
npm init vite
```

- **Project name:** client  
- **Select a framework:** React  
- **Select a variant:** JavaScript  

This will set up a new React project named `client` using JavaScript.



# Login/Register Using MERN

A simple Login and Register web application built with the MERN stack (MongoDB, Express.js, React, Node.js).  
The project is organized into two main folders:

- **client**: Frontend (React + Vite)
- **server**: Backend (Node.js, Express, Mongoose)

## Features

- User registration and login
- React frontend with routing (react-router-dom)
- Styled with Bootstrap
- RESTful backend API using Express and Mongoose
- Hot Module Reload (HMR) for development

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Folder Structure

```
Login-Register-Using-MERN/
├── client/     # React frontend
└── server/     # Express backend
```

---

## Setup Instructions

### 1. Frontend (client)

#### Create the React App with Vite

```bash
npm create vite@latest
# Project name: client
# Select framework: React
# Select variant: JavaScript
cd client
npm install
```

#### Install Dependencies

```bash
npm install bootstrap axios react-router-dom
```

#### Start Development Server

```bash
npm run dev
```

The app will run at [http://localhost:5173/](http://localhost:5173/)

---

### 2. Backend (server)

#### Initialize Node.js Project

```bash
cd server
npm init -y
```

#### Install Dependencies

```bash
npm install express mongoose cors nodemon --save
```

#### Start Backend Server

```bash
npm start
```

The backend will run at [http://localhost:3001/](http://localhost:3001/)

> **Note:** Make sure MongoDB is running locally or update your connection string in `server/index.js` as needed.

---

## Common Issues & Fixes

- **Import errors:**  
  Ensure all files (e.g., `Signup.jsx`, `Signup.css`) exist in the specified paths.

- **Duplicate imports:**  
  Do not import modules twice. Example:
  ```js
  // BAD:
  import { BrowserRouter, Route, Routes, BrowserRouter } from 'react-router-dom'
  // GOOD:
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  ```

- **Platform-specific errors:**  
  If you see errors like `EBADPLATFORM`, check if a package is not supported on your OS.

---

## Available Scripts

### Client

- `npm run dev` — Start the React development server

### Server

- `npm start` — Start the Express server with nodemon

---

## Funding

Some npm packages may require funding.  
Run `npm fund` in both client and server folders for details.

---

## License

[ISC](LICENSE)

---

## Credits

- Created using [Vite](https://vitejs.dev/)
- React, Bootstrap, Axios, React Router DOM
- Express, Mongoose, Nodemon

---

## Troubleshooting

If you encounter server or client errors:
- Check terminal logs for missing files or typos.
- Ensure dependencies are installed.
- Restart servers after making changes.

---

Feel free to customize further based on your actual code and features!  
This `README.md` will help new contributors and users quickly set up and understand your project.
