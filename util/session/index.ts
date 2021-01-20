import { withIronSession } from "next-iron-session";
import { pass } from "../../pages/api/db/user/[action]";

export default function withSession(handler) {
  return withIronSession(handler, {
    password: pass,
    cookieName: "FoodLabel",
    cookieOptions: {
      secure: false,
    },
  });
}
