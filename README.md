# Fibonacci Number Generator

The is a full-stack web application that allows a user to generate the first n fibonacci numbers. n is an input which is provided by the user

## Technologies Used:

1. Frontend: React.js
2. Backend: Node.js with Express
3. Database: SQLite

## Design and Implementation:

I developed the application with a clear separation between the front-end and the back-end.

I developed the front-end using React.js. The UI has 2 pages: one for the user to input a number and the other is the results page which displays the Fibonacci sequence when the user hits submit.

For the back-end I used Node.js and Express.js. The backend is basically handling the Fibonacci sequence generation and caching.

For the database, I used SQLite as it is simple to use and very easy to setup. SQLite is also used to store the previously computed Fibonacci numbers, thus avoiding unnecessary computation.

## Application Structure and Design Pattern:

The app follows a Layered Architecture pattern, which is a variant of the Model View Controller (MVC) design pattern.

For my app:

1. The view is the front-end which is represented by React components which handle user interface and also capture their inputs.

2. The controller are the Express routes on the back-end which accept requests from the front-end, pass them to the appropriate services and then return the response to the front end for the client to see.

3. The model here is represented by the logic and the data storage.

I choose this design pattern as it encourages the separation of concerns which is a common design practice in enterprise level apps. It also increases the maintainability and the scalability of the app. Also, the extensibility or modification of one layer without affecting others is what is expected of real-time-systems these days.

## Time Complexity:

The TC for the fibonacci generation sequence is O(N), where N is the input number. This is due to the iterative approach used for the calculation of the sequence. Also, each number in the sequence is only calculated once and then it is stored in the database.

## Running the Application:

To run the app, please follow the following steps:

1. Clone the repository and navigate to it.
2. Install the dependencies for both the client and the server by using the npm install command in both client and server directories.
3. Navigate to the server directory then and start the server using npm start
4. Then in another terminal tab, navigate to the client directory and start the app using npm start.

## Assistance Used:

I used several online resources for troubleshooting and guidance. I consulted the official documentation of React, Node.js and Express for troubleshooting and resolving issues.

For this app, I used OpenAI's ChatGPT 3.5 for generating the CSS styles for the UI along with guidance on using Bootstrap library for basic styling.

Also, I used ChatGPT for improving the error handling in the server-side code (server/fibonacciService.js). ChatGPT was also consulted for troubleshooting and resolving some SQLite errors.

The core logic as well as the front-end & back-end were written by me.
