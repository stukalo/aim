import mongoose from "mongoose";

import { app } from "./app";
import { RootUser } from "./services/root-user";

const start = async () => {
  console.log('Starting up...');
  
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  if (!process.env.ROOT_USERNAME || !process.env.ROOT_PASSWORD) {
    throw new Error("ROOT credentials must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDb");

    await RootUser.setUp();
    console.log("RootUser created", process.env.ROOT_USERNAME, process.env.ROOT_PASSWORD);
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
