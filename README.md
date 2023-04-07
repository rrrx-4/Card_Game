
### Frontend: 
* React, 
* Redux, 
* React Router, 
* Tailwind CSS



### Backend: 
* Node.js, 
* Redis database


## To run the backend, follow these steps:

- Run 'npm install' from the root directory
- If you don't have nodemon installed, install it first by running 'npm i nodemon'
- Run 'npm start' to start the backend


## To run the frontend, follow these steps:

- Run 'npm install' from the root directory
- Run 'npm start' to start the frontend



In this application, all synchronous and asynchronous functionalities are handled by Redux. The application has three routes: the first is for user registration, where user  added to the database; the second is to retrieve all records from the database, and the third is to update the score. Additionally, the application can handle the previous state, meaning that users can start playing from where they left off, as the state is saved in localStorage.

The game logic works as follows: when a user clicks on a card, a random number between 1 to 4 is generated, and depending on the value, the corresponding action is dispatched. A value of 1 represents a cat card, 2 represents a defuse card, 3 represents an explode card, and 4 represents a shuffle card. For each action, a method has been created in Redux to handle the corresponding functionality.

