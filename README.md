# To-Do Web Application
This is a simple Todo application built using React for the frontend and Express with MongoDB for the backend. The application allows users to create new Todos with a title and description, view existing Todos, and mark them as completed.

## Frontend Features
- Users can add a new Todo by entering a title and description and clicking the "Add a todo" button.
- Existing Todos are displayed, showing their title, description, and a button to mark them as completed.
- Users can mark a Todo as completed by clicking the corresponding button.

## Backend API Endpoints
1. Get Todos<br>
Endpoint: /todos <br>
Method: GET<br>
Description: Get a list of all Todos.<br>

2. Create Todo<br>
Endpoint: /todos<br>
Method: POST<br>
Request Body:<br>
{<br>
  "title": "Todo Title",<br>
  "description": "Todo Description"<br>
}<br>
Description: Create a new Todo.<br>

3. Mark Todo as Completed<br>
Endpoint: /completed<br>
Method: PUT<br>
Request Body:<br>
{<br>
  "id": "Todo ID"<br>
}<br>
Description: Mark a Todo as completed.<br>

## Folder Structure
- frontend: Contains the React frontend application.
- backend: Includes the Express backend server and MongoDB setup.
