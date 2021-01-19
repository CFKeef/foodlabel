import { connectToDatabase } from "../index";

// Check if a user exists
export const doesUserExist = async (email: string): Promise<boolean> => {
  const { db } = await connectToDatabase();

  const res = await db.collection("users").find({ email: email }).toArray();

  return res.length === 0 ? false : true;
};
