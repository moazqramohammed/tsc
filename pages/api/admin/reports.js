import query from "../../../database/db.js";
import connect from "../../../next-connect/next-connect";
const API = connect().get(async (req, res) => {
  const reports = await query("SELECT * FROM reports");
  res.status(200).json({ reports: reports });
});

export default API;
