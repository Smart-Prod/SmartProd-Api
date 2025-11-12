import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', userController.register);
router.post('/', userController.login);

// ✅ Rota protegida
router.get('/', authenticateToken, userController.getAllUsers);

export default router;

