import { connectToDatabase } from "../index";
import { doesUserExist } from "../util/index";
import bcrypt from "bcrypt";

// Creates

// Add User to db
export const addUser = async (username: string, password: string) => {
  const { db } = await connectToDatabase();

  const hashed = await bcrypt.hash(password, 10);

  const isUserUnique = await doesUserExist(username);

  if (isUserUnique) return;

  db.collection("users").insertOne({
    id: Date.now(),
    email: username,
    password: hashed,
    createdOn: new Date(),
    authenticated: false,
  });
};

// Read

// Handles the log in process
export const handleUserLogin = async (username: string, password: string) => {
  const { db } = await connectToDatabase();
};
