import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import nc from "next-connect";
import { connectToDatabase } from "../../../../db";
import { addUser } from "../../../../db/crud";

const handler = nc<NextApiRequest, NextApiResponse>().post(async (req, res) => {
  await addUser(req.body.state.email, req.body.state.password);

  res.status(200).send("Added User");
});

export default handler;
