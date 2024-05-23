# Sufiyan Estate Real Estate Marketplace

Welcome to the Sufiyan Estate Real Estate Marketplace! This project is a modern real estate platform built using the MERN stack (MongoDB, Express, React, Node.js) designed to help users buy, sell, and rent properties in the most desirable neighborhoods. This README file will guide you through the setup, features, and deployment of this application.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Authentication](#authentication)
7. [CRUD Operations](#crud-operations)
8. [Advanced Search Functionality](#advanced-search-functionality)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License](#license)

## Project Overview

Sufiyan Estate is dedicated to helping clients achieve their real estate goals with expert advice, personalized service, and a deep understanding of the local market. Our team of experienced agents ensures that the buying and selling process is smooth and rewarding.

## Features

- **Advanced Authentication**: Secure and seamless user access with JWT, Firebase, and Google OAuth.
- **Real-world CRUD Operations**: Create, read, update, and delete property listings using MongoDB.
- **User-friendly Features**: Image uploads, property listing management, and more.
- **Advanced Search Functionality**: Cutting-edge search features to help users find what they're looking for.
- **Easy Deployment**: Deploy the MERN real estate app for free using the 'render' platform.

## Technologies Used

- **Frontend**: React, Redux Toolkit
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, Firebase, Google OAuth
- **Deployment**: Render

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

    ```bash
     git clone https://github.com/yourusername/sufiyan-estate-marketplace.git
     cd sufiyan-estate-marketplace
    ```

2. **Install dependencies for the server and client**:

    ```bash
     cd server
     npm install
     cd ../client
     npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the server directory and add the following variables:

      ```bash
     MONGO = ""
      JWT_SECRET = ''
     VITE_FIREBASE_API_KEY = ""
    ```

    

4. **Run the application**:

    Open two terminals and run the following commands in each:

    ```bash
    # Terminal 1: Start the server
    $ cd server
    $ npm start
    ```

    ```bash
    # Terminal 2: Start the client
     cd client
     npm start
    ```

    The application should now be running at `http://localhost:3000`.

## Usage

- **Home Page**: View the latest property listings and use the search functionality to find properties.
- **Authentication**: Sign up or log in using JWT, Firebase, or Google OAuth.
- **Dashboard**: Manage your property listings, upload images, and edit or delete listings.

## Authentication

This project implements three types of authentication to ensure secure and seamless user access:

1. **JWT Authentication**: For secure token-based authentication.
2. **Firebase Authentication**: For email/password and social media logins.
3. **Google OAuth**: For Google account logins.

## CRUD Operations

The platform supports full CRUD (Create, Read, Update, Delete) operations for property listings:

- **Create**: Add new property listings.
- **Read**: View property details and listings.
- **Update**: Edit existing property details.
- **Delete**: Remove property listings.

## Advanced Search Functionality

Users can utilize advanced search features to filter properties based on various criteria such as location, price range, property type, and more.

## Deployment

Deploy the application easily using the 'render' platform:

1. **Create an account** at [Render](https://render.com/).
2. **Connect your repository** and configure the build and start commands for both the server and client.
3. **Deploy** your application and access it via the provided URL.

## Contributing

We welcome contributions to improve this project! To contribute, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** with a descriptive name.
3. **Make your changes** and commit them with clear messages.
4. **Push to your fork** and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for choosing Sufiyan Estate Real Estate Marketplace! We hope this platform helps you achieve your real estate goals. For any questions or support, please contact our team.
