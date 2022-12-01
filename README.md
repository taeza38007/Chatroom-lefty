# CS50 Final project Chatroom application 🗣

#### Video Demo:  [Chatroom](https://www.youtube.com/watch?v=E6F6dLtbV8Q&ab_channel=Nantarat)

## Features 💫
- User Registration
- User Authentication
- Remember users using Sessions
- Real-time Chatroom
- Store data on a cloud database (MongoBD)

## How to use 🧾
1. Register a new account on "signup" page.
2. Log in on "login" page.
3. Choose "Main chatroom" to join.
4. Chat in real-time with people in the same chatroom.
5. Users do not have to log in every time they close the app window.
6. Choose "signout" to destroy sessions and quit.

## Project files structure 🏗
- Using MVC architectural pattern. Seperating files in 3 main structures including "Model", "Views" and "Controllers"
1. "Models" folder includes file logic related to database and schema creating.
2. "views" folder includes files related to frontend presentations.
3. "controllers" folder includes files related to logic that control things like creating user sessions, socket.io logic and so on.
4. server.js is the main file.
5. "routes" folder contains all routes logic in the application.
6. all sensitive info are store seperately in .env file

## How it works 🧠

- Using Node.js and Express.js to create the server
- Using socket.io to keep the connections between clients and the server via web socket protocol open for real-time duplex communication.
- Increase security by hashing passwords using "Bcrypt" library before storing them with usernames to the MongoDB (No SQL type cloud database).
- Also, store the user's session info in another "sessions" table in the database.
- Chat history of the main chatroom is stored and every time a user leaves and comes back to the chatroom, all the conversations will still be there and presented automatically when visiting the main chatroom page.

## Decision to use Node.js instead of Flask 🤷
1. To challenge myself to learn and improve Javascript knowledge.
2. Node.js is arguably more suitable for realtime applications than Python.
3. The essential library for this application is socket.io and there are more resorces to learn it with javaScript.


## New skills I need to acquire? And topics I need to research for the project? 👨‍💻

- Basic and ES6 Javascript & EJS template
- How to create a backend server using Nodejs & Expressjs.
- MVC pattern and how to arrange and structure files so that it is easier to track around while working/
- Basic networking, TCP/IP models and which layer the web socket protocol is in.
- How web socket works and how to implement socket.io library to the project Implement a database to store data from users safely by hashing the sensitive information.
- Learn about sessions, cookies and how to remember users who have already logged in.
- Learn about NoSQL database (MongoDB)
- More CSS

## In the world of software, where everything takes longer to implement than expected. What might you consider to be a good outcome for the project? 🏆

- Having a simple working final product and learning the new topics related to the app while building it. Especially, the web socket and socket.io topic.
- Be able to use the tools and knowledge learned from this project with new future projects.

### A better outcome?
 - Implement more chatrooms and the ability for users to create rooms dynamically
### The best outcome?
 - Implement real-time files and image sharing on top of just plain text.