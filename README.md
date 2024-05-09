# Darren's ChatApp

## Description
This chat application is a real-time messaging platform that allows users to send and receive messages instantly. It features authentication, allowing users to sign in securely. Once authenticated, users can send messages to other users who are also signed in. The application uses RESTful for its API, enabling efficient and flexible data fetching, and React for the front end, providing a responsive and interactive user interface. Additionally, it utilizes socket.io for real-time communication, ensuring that messages are delivered instantly to recipients. 

## User Story
```md
As an avid user of the internet,
I want a clean and simple chat-app where I can talk to and connect with other users
```

## Acceptance Criteria
```md
GIVEN I click on the website link,
WHEN I land on the login page,
THEN I am prompted to login to an esixting account or signup,
WHEN I log in,
THEN I am taken to the homepage where all my conversations are,
WHEN I click on a conversation,
THEN I can view all previous messages with that user
WHEN I select a user that I have not conversed with,
THEN I am shown a message telling me to start a conversation,
WHEN I start a conversation,
THEN the message that I send will be sent in real-time to the other user,
WHEN I am finished using the app,
THEN I can click the logout button
WHEN I click the logout button
THEN I am taken back to the login page
```

## Technologies used
- React
- Tailwind CSS
- Daisy UI
- Node.js
- Express.js
- MongoDB
- socket.io
- Zustand

## Features
- Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
- Authentication && Authorization with JWT
- Real-time messaging with Socket.io
- Online user status (Socket.io and React Context)
- Global state management with Zustand
- Error handling both on the server and on the client

## Live Link 
You can play around on the app through this link: https://chatapp-wi17.onrender.com/ . Please note that it's still kind of buggy so you will have to use an incognito window along with a regular tab to have a conversation with yourself. 

## Build the app
```shell
npm run build
```
## Start the app

```shell
npm start
```

## Credits

This project was completed alone, with the guidance of my Teachers and peers. Also youtube.

