import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await conversation.save();
        await newMessage.save();
        
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in Message Controller", error.message)
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getMessage = async (req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId] },
        }).populate("messages")
        if(!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages)
        
    } catch (error) {
        console.log("Error in Get Message Controller", error.message)
        res.status(500).json({ error: "Internal Server Error" });
    }
}