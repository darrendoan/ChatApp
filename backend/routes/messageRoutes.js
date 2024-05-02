import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";
import { getMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

export default router