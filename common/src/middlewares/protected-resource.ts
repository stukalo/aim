import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../errors/forbidden-error";
import { Role } from "./types/roles";

export const protectedResource = (roles: Array<Role> = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.length) {
      next();
    }

    const role = req.currentUser?.role;

    if (role && !roles.includes(role)) {
      throw new ForbiddenError();
    }

    next();
  };
};
