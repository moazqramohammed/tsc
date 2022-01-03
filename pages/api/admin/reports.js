import nc from "next-connect";
import query from "../../../database/db.js";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
}).get(async (req, res) => {
  const reports = await query("SELECT * FROM reports");
  res.status(200).json({ reports: reports });
});

export default handler;
