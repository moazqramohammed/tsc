import nc from "next-connect";
import jwt from "jsonwebtoken";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
}).post(async (req, res) => {
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

export default handler;
