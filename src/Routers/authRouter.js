import { Router } from "express";
import { signIn, signUp } from "../Controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp)
authRouter.post("/sign-in", signIn)

export default authRouter;



   