import nc from "next-connect";
import isAdminLogedIn from "../../../middlewares/auth.middleware.js";
import query from "../../../database/db.js";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})
  .use(isAdminLogedIn)
  .post(async (req, res) => {
    const { camionName, from, to, driverName, reportName, goodsType, date } =
      req.body;
    if (
      camionName.trim(/\s/g, "") === "" ||
      from.trim(/\s/g, "") === "" ||
      to.trim(/\s/g, "") === "" ||
      driverName.trim(/\s/g, "") === "" ||
      reportName.trim(/\s/g, "") === "" ||
      goodsType.trim(/\s/g, "") === ""
    ) {
      return res.status(205).json({ message: "some data is empty" });
    } else {
      await query(
        "INSERT INTO reports(reportName,driverName,camionName,repFrom,repTo,goodsType, date) VALUES(?,?,?,?,?,?,?)",
        [reportName, driverName, camionName, from, to, goodsType, date]
      );
      return res.status(200).json({ message: "created" });
    }
  });

export default handler;
