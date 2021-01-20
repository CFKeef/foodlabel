import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { addUser, getUserLabels, handleUserLogin } from "../../../../db/crud";
import { ironSession } from "next-iron-session";
const { Iron_PW } = process.env;

export let pass: string;

if (Iron_PW) {
  pass = Iron_PW;
} else pass = "";

const session = ironSession({
  cookieName: "FoodLabel",
  cookieOptions: {
    secure: false,
  },
  password: pass,
});

interface ExtendedRequest extends NextApiRequest {
  session: any;
}

const handler = nc<ExtendedRequest, NextApiResponse>()
  .use(session)
  .post(async (req, res) => {
    const action = req.query.action;
    const data = req.body.state;
    switch (action) {
      case "register":
        await addUser(data.email, data.password);
        res.status(200).send("Added User");
        break;
      case "login":
        const isValidated = await handleUserLogin(data.email, data.password);
        if (isValidated) {
          await req.session.set("FoodLabel", {
            email: data.email,
          });
          await req.session.save();
          res.status(200).send("Test");
        } else {
          console.log(21312321);
          res.status(404).send("Error with the details provided");
        }
        break;
      default:
        res.status(403).send("Need an Action");
        break;
    }
  })
  .get(async (req, res) => {
    const action = req.query.action;

    switch (action) {
      default:
        res.status(403).send("Need an Action");
        break;
    }
  });

export default handler;
