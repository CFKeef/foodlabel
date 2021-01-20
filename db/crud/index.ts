import { connectToDatabase } from "../index";
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
    labels: [],
  });
};

// Read

// Handles the log in process
export const handleUserLogin = async (
  username: string,
  password: string
): Promise<boolean> => {
  const isUserRegistered = await doesUserExist(username);

  if (!isUserRegistered) return false;

  const userInfo = await getUserDetails(username);

  return await bcrypt.compare(password, userInfo[0].password);
};

// Gets the user's label
export const getUserLabels = async (email: string): Promise<any[]> => {
  const { db } = await connectToDatabase();

  return await db.collection("users").find({ email: email }).toArray();
};

// Check if a user exists
export const doesUserExist = async (email: string): Promise<boolean> => {
  const { db } = await connectToDatabase();

  const res = await db.collection("users").find({ email: email }).toArray();

  // If user is not found (Not signed up) returns false
  return res.length === 0 ? false : true;
};

// Get User details
export const getUserDetails = async (email: string) => {
  const { db } = await connectToDatabase();
  return await db.collection("users").find({ email: email }).toArray();
};
