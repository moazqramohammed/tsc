import jwt from "jsonwebtoken";
import connect from "../../../next-connect/next-connect";
const API = connect().post(async (req, res) => {
  const { name, password } = req.body;

  if (name === process.env.ADMIN_NAME) {
    if (password === process.env.ADMIN_PASSWORD) {
      const JWT = await jwt.sign(
        { name: process.env.ADMIN_NAME },
        process.env.SITE_SECRET
      );
      res.json({ jwt: JWT, message: "welcom" });
    } else {
      res.json({ message: "password is not correct" });
    }
  } else {
    res.json({ message: "name is not correct" });
  }
});

export default API;
