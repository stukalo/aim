import express, { Request, Response } from "express";
import { protectedResource, currentUser } from "@savaim/common";
import { User, Role } from "../models/user";

const router = express.Router();

router.get("/api/users", 
  currentUser,
  protectedResource([Role.Admin]), async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).send(users);
});

export { router as indexRouter };
