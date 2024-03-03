## To-Do Web Application
This is a simple Todo application built using React for the frontend and Express with MongoDB for the backend. The application allows users to create new Todos with a title and description, view existing Todos, and mark them as completed.

# Frontend Features
- Users can add a new Todo by entering a title and description and clicking the "Add a todo" button.
- Existing Todos are displayed, showing their title, description, and a button to mark them as completed.
- Users can mark a Todo as completed by clicking the corresponding button.

# Backend API Endpoints
1. Get Todos
Endpoint: /todos
Method: GET
Description: Get a list of all Todos.

2. Create Todo
Endpoint: /todos
Method: POST
Request Body:
{
  "title": "Todo Title",
  "description": "Todo Description"
}
Description: Create a new Todo.

3. Mark Todo as Completed
Endpoint: /completed
Method: PUT
Request Body:
{
  "id": "Todo ID"
}
Description: Mark a Todo as completed.

# Folder Structure
- frontend: Contains the React frontend application.
- backend: Includes the Express backend server and MongoDB setup.