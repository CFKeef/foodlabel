import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getUserLabels } from "../../../../db/crud";

const handler = nc<NextApiRequest, NextApiResponse>()
  .post(async (req, res) => {
    const action = req.query.action;
    const data = req.body;
    switch (action) {
      case "add":
        break;
      case "get":
        const responseData = await getUserLabels(data.email);
        res.status(200).send(responseData);
        break;
      default:
        res.status(403).send("Need an Action");
        break;
    }
  })
  .get(async (req, res) => {
    const action = req.query.action;
    console.log(action);

    switch (action) {
      default:
        res.status(403).send("Need an Action");
        break;
    }
  });

export default handler;
