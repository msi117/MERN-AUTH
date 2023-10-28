# MERN Login/Logout Application

This is a simple MERN (MongoDB, Express.js, React, Node.js) application that demonstrates basic user authentication functionality with login and logout features.

## Features

- User can register an account.
- User can log in to their account.
- User can log out of their account.
- Session management for user authentication.

## Prerequisites

- Node.js (v14.17.0 or higher)
- npm package manager
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/msi117/MERN-AUTH.git
    cd your-repo
    ```

2. Install dependencies for the server and the client:

    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the `/server` directory with the following variables:

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    SECRET=your_secret_key
    ```

4. Run the application:

    ```bash
    # Run the server
    cd server
    npm start

    # Run the client
    cd ../client
    npm start
    ```

The server will start at `http://localhost:5000` and the client at `http://localhost:3000`.
