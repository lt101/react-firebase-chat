# React Firebase Chat app

## About
This is a real-time chat app which interacts with the Firebase Javascript API. 
It implements Firebase authentication to manage users and login, Firebase storage to send photos, and Firebase Database to manage and store chats and chat history.

## How to use
**NOTE**: This project is currently only available locally. To run it, you must create a Firebase project and put the firebase configuration in the FIREBASE_CONFIG variable in the firebase.config.js file. 
See config.example.js for an example.

To run locally, run the *npm run dev* command. The app will run on localhost:5173.

## Developer notes
React useContext and useReducer hooks are showcased to share states between multiple pages and components avoiding the need for prop-drilling. See ChatContext.jsx for an example.

