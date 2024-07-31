# Maktaba - Library Management System

Maktaba is a library management system designed to streamline the management of library resources, including books, members, and borrowing history, specifically tailored for Rwandan high schools.

## Features

- Member management (students and staff)
- Book management (adding, updating, categorizing)
- Borrowing and returning books
- Viewing borrowing history
- Authentication and access control for librarians

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/maktaba.git
   cd maktaba
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/maktaba
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server should now be running on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new librarian
- **POST /api/auth/login**: Librarian login
- **POST /api/auth/logout**: Librarian logout

### Members

- **GET /api/members**: List all members
- **GET /api/members/{member_id}**: Get details of a specific member
- **POST /api/members**: Add a new member
- **PUT /api/members/{member_id}**: Update member information
- **DELETE /api/members/{member_id}**: Remove a member

### Books

- **GET /api/books**: List all books
- **GET /api/books/{book_id}**: Get details of a specific book
- **POST /api/books**: Add a new book
- **PUT /api/books/{book_id}**: Update book information
- **DELETE /api/books/{book_id}**: Remove a book

### Categories

- **GET /api/categories**: List all categories
- **GET /api/categories/{category_id}**: Get details of a specific category
- **POST /api/categories**: Add a new category
- **PUT /api/categories/{category_id}**: Update category information
- **DELETE /api/categories/{category_id}**: Remove a category

### Book Borrowing

- **POST /api/borrow**: Issue a book to a member
- **POST /api/return**: Return a borrowed book
- **GET /api/borrowing-history**: Get borrowing history

### Book-Category Relations

- **GET /api/book-categories**: List all book-category relations
- **POST /api/book-categories**: Add a new book-category relation
- **DELETE /api/book-categories/{book_categ_id}**: Remove a book-category relation

### Statistics and Reports

- **GET /api/stats/books-by-category**: Get book count by category
- **GET /api/stats/most-borrowed-books**: Get most borrowed books
- **GET /api/stats/overdue-books**: Get list of overdue books
- **GET /api/stats/member-activity**: Get member borrowing activity

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.