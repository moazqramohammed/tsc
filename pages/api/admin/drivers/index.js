import query from "../../../../database/db.js";
import connect from "../../../../next-connect/next-connect";
const API = connect()
  .get(async (req, res) => {
    const drivers = await query("SELECT * FROM driver");
    res.status(200).json({ drivers: drivers });
  })
  .post(async (req, res) => {
    const {
      driverName,
      cardNumber,
      cardCopy,
      generatePlace,
      generateDate,
      driverNationality,
      driverReligion,
      workBoss,
      driverPhone,
      driverPassword,
    } = req.body;

    await query(
      "INSERT INTO driver(driverName,cardNumber,cardCopy,generatePlace,generateDate,driverNationality,driverReligion,workBoss,driverPhone,driverPassword) VALUES(?,?,?,?,?,?,?,?,?,?)",
      [
        driverName,
        cardNumber,
        cardCopy,
        generatePlace,
        generateDate.slice(0, 10),
        driverNationality,
        driverReligion,
        workBoss,
        driverPhone,
        driverPassword,
      ]
    );
    res.status(200).json({ reports: "NOTHING RIGHT" });
  })
  .put(async (req, res) => {
    try {
      const {
        cardCopy,
        cardNumber,
        driverName,
        driverNationality,
        driverPassword,
        driverPhone,
        driverReligion,
        generateDate,
        generatePlace,
        id,
        workBoss,
      } = req.body;
      const editData = await query(
        `UPDATE driver SET
        cardCopy = ?,
        cardNumber = ?,
        driverName = ?,
        driverNationality = ?,
        driverPassword = ?,
        driverPhone = ?,
        driverReligion = ?,
        generateDate = ?,
        generatePlace = ?,
        workBoss = ? WHERE id = ?`,
        [
          cardCopy,
          cardNumber,
          driverName,
          driverNationality,
          driverPassword,
          driverPhone,
          driverReligion,
          new Date(generateDate),
          generatePlace,
          workBoss,
          id,
        ]
      );
      res.status(200).json({ driverEditData: editData || "ANY" });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  });
export default API;
