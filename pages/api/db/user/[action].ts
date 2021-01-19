import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import nc from "next-connect";
import { addUser, handleUserLogin } from "../../../../db/crud";

const handler = nc<NextApiRequest, NextApiResponse>().post(async (req, res) => {
  const action = req.query.action;
  const data = req.body.state;

  switch (action) {
    case "register":
      await addUser(data.email, data.password);
      res.status(200).send("Added User");
      break;
    case "login":
      const isValidated = await handleUserLogin(data.email, data.password);
      isValidated
        ? res.status(200).send("Welcome Back!")
        : res.status(403).send("Error with the details provided");
      break;
    default:
      res.status(403).send("Need an Action");
      break;
  }
});

export default handler;
