import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../errors/forbidden-error";
import { Role } from "./types/roles";

export const protectedResource = (roles: Array<Role> = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.length) {
      next();
    }

    const role = req.currentUser?.role;

    console.log('> protectedResource', req.currentUser, role, roles);
    
    if (!role || !roles.includes(role)) {
      console.log('> forbidden');
      throw new ForbiddenError();
    }

    console.log('> next');
    next();
  };
};
