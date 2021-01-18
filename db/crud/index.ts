import { connectToDatabase } from "../index";
import bcrypt from "bcrypt";

// Add User to db
export const addUser = async (username: string, password: string) => {
  const { db } = await connectToDatabase();
  const hashed = await bcrypt.hash(password, 10);
  db.collection("users").insertOne({
    id: Date.now(),
    email: username,
    password: hashed,
    createdOn: new Date(),
    authenticated: false,
  });
};
