import { Server } from "socket.io";
import http from 'http'
import express from "express";

// Initialize Express app
const app = express()

// Create HTTP server using Express app
const server = http.createServer(app);

// Initialize Socket.IO server and configure CORS
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST"]
    }
});

// Function to get receiver's socket ID
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

// Map to store user IDs and their corresponding socket IDs
const userSocketMap = {};

// Socket.IO connection event
io.on('connection', (socket) => {
    console.log("A user has connected!", socket.id);

    // Get the user ID from the query params
    const userId = socket.handshake.query.userId;

    // Add user ID to the userSocketMap and emit online users
    if (userId !== "undefined") {
        userSocketMap[userId] = socket.id;
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }

    // Socket disconnect event
    socket.on('disconnect', () => {
        console.log("A user has disconnected...", socket.id);

        // Remove user ID from userSocketMap and emit online users
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };

