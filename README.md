# Bookstore Reviews - Server-Side Application

Welcome to the **Bookstore Reviews** project! In this project, you will find a server-side application designed for an online bookstore where users can browse, review, and rate books. This RESTful API enables users to interact with the book database, submit reviews, and perform various actions related to book ratings and user authentication.

## Project Overview

As the back-end developer, you are responsible for building the server-side application using **Node.js** and **Express.js**. The primary features of this application include retrieving book details, managing user reviews, and ensuring secure access through session management and JWT authentication.

The project follows a modular approach, allowing collaboration with a front-end developer who is building the web-based client-side application to interact with this API.

## Features

The application supports the following functionalities:

### Bookstore Management:

- **Retrieve Books:** Fetch a list of all available books in the bookstore.
- **Search Books:** Search for books using the ISBN code, author name, or title.
- **Retrieve Book Reviews:** View all reviews and comments for a specific book.

### User Management:

- **Register New User:** Create a new user account to access the application.
- **Login:** Authenticate and access personalized features after login.

### Review Management (Logged-In Users Only):

- **Add Review:** Submit a new review for a specific book.
- **Modify Review:** Edit your own review.
- **Delete Review:** Remove your own review from the system.

### Multi-User Interaction:

- Multiple users can interact with the application simultaneously, viewing and managing book reviews concurrently.

## Technologies Used

- **Node.js** - JavaScript runtime for the back-end
- **Express.js** - Web framework for handling HTTP requests
- **REST API** - Communication between client and server
- **Postman** - API testing tool
- **JWT Authentication** - Secure login and access control
- **Sessions** - Session management for authenticated users
- **Promises / Async/Await** - To handle asynchronous operations and ensure seamless multi-user interaction

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nebur242/back-end-application-development-final-project.git
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (JWT secret, session secret, etc.) in a `.env` file.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Test the API endpoints using Postman. Collections are in the folder:
   ```bash
    postman-collections
   ```

## API Endpoints

Below is an overview of the key API routes:

- **API Prefix** `/api/v1` - ( **http://localhost:3000/api/v1/books** )
- **GET** `/books` - Retrieve the list of all books
- **GET** `/books/title/:title` - Retrieve all books based on Title
- **GET** `/books/author/:author` - Retrieve all books based on Author
- **GET** `/books/:isbn` - Retrieve details of a book by ISBN
- **POST** `/register` - Register a new user
- **POST** `/login` - Login a user
- **GET** `/reviews?bookId={id}` - Retrieve reviews for a specific book
- **POST** `/reviews` - Add a new review for a book (logged-in users)
- **PUT** `/reviews/:id` - Modify an existing review (logged-in users)
- **DELETE** `/reviews/:id` - Delete a review (logged-in users)

## Authentication

This application implements both **Session** and **JWT** authentication to ensure secure access for users. Only authenticated users can add, modify, or delete book reviews.

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request once your feature is implemented and tested.

## License

This project is licensed under the MIT License.

---

Feel free to explore the code, improve it, and adapt it for your needs!
