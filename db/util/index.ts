import { connectToDatabase } from "../index";

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
