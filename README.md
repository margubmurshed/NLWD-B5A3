# Library Management API

Advanced REST API for managing Library system.

## Tech Stack
- **Express**
- **TypeScript**
- **Mongoose**

## Features

- **Book Management**
    - Create, retrieve, update and delete books
    - Filter by genre and sort by any field
    - ISBN uniqueness and enforcing a group of genres

- **Borrow System**
    - Borrow specific books providing bookId, copies and return date
    - Automatic availability and num of copies update
    - Availability and stock check before borrowing

- **Borrow Summary**
    - Using aggregation pipeline to return total quantity borrowed per book
    - Showing specific fields (title and isbn)

- **Robust Backend**
    - Custom error handling and validation responses
    - Type-safe models and controllers created using TypeScript

## Folder Structure
src/
- app/
    - controllers/
    - interfaces/
    - models/
    - middlewares/
- app.ts
- server.ts

## API Endpoints

| Method | Endpoint        | Description        |
|--------|-----------------|--------------------|
| GET    | `/api/books`    | Get all books      |
| GET    | `/api/books/:bookId`    | Get a specific book by book id      |
| POST    | `/api/books`    | Create a new book      |
| PUT    | `/api/books/:bookId`    | Update a book by book id      |
| DELETE    | `/api/books/:bookId`    | Delete a book by book id      |
| POST    | `/api/borrow/`    | Borrow a book      |
| GET    | `/api/borrow/`    | Get borrowed books summary      |


## Developed by
**Margub Murshed** - **Full Stack Developer**

