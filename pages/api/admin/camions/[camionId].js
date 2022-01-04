import query from "../../../../database/db.js";
import connect from "../../../../next-connect/next-connect";
const API = connect().delete(async (req, res) => {
  const { camionId } = req.query;
  const data = await query(`DELETE FROM camions WHERE id = ?`, [camionId]);
  res.status(200).json({ message: "element deleted" });
});
export default API;
