import query from "../../../../database/db.js";
import connect from "../../../../next-connect/next-connect";
const API = connect().delete(async (req, res) => {
  const { driverId } = req.query;
  const data = await query(`DELETE FROM driver WHERE id = ?`, [driverId]);
  res.status(200).json({ ...data[0] });
});
export default API;
