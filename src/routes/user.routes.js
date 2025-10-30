import express from "express";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/listar", userController.getUsers);
router.post("/create", userController.addUser);

export default router;
