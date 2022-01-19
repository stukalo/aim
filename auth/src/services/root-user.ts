import { Role, User } from "../models/user";

export class RootUser {
  static async setUp() {
    const email = process.env.ROOT_USERNAME!;
    const user = await User.findOne({ email });

    if (!user) {
      const newUser = User.build({ 
        email, 
        password: process.env.ROOT_PASSWORD!,
        role: Role.Admin
      })
      newUser.save();
    }
  }
}
