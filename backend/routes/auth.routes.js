import express from "express";
import { signup, login, logout } from '../controllers/auth.controllers.js';

const router = express.Router();

router.get("/signup", signup);

router.put("/login", login);

router.put("/logout", logout);

export default router;