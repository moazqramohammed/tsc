import jwt from "jsonwebtoken";

const isAdminLogedIn = async (req, res, next) => {
  try {
    const { jwtSign } = req.body;
    const userSign = await jwt.verify(jwtSign, process.env.SITE_SECRET);
    req.userName = userSign.name || null;
    next();
  } catch (error) {
    res.json({ message: "sign first" });
  }
};

export default isAdminLogedIn;
