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
}).post(async (req, res) => {
  const {
    owner,
    driverCardNumber,
    chassisNo,
    plateNumber,
    camionMarket,
    camionWieght,
    camionColor,
    serialNumber,
    loginType,
    camionModel,
    camionLoad,
    madeDate,
    businessCard,
    prent,
    insurance,
  } = req.body;
  const newCamion = await query(
    `INSERT INTO camions(owner,driverCardNumber,chassisNo,plateNumber,camionMarket,camionWieght,camionColor,serialNumber,loginType,camionModel,camionLoad,madeDate,businessCard,prent,insurance) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      owner,
      driverCardNumber,
      chassisNo,
      plateNumber,
      camionMarket,
      camionWieght,
      camionColor,
      serialNumber,
      loginType,
      camionModel,
      camionLoad,
      madeDate,
      businessCard,
      prent,
      insurance,
    ]
  );
  res.status(200).json({ camion: newCamion });
});
//   .put(async (req, res) => {
//     try {
//       const { id } = req.body;
//       const editData = await query("SELECT * FROM driver WHERE id = ?", [id]);
//       res.status(200).json({ driverEditData: editData });
//     } catch (error) {
//       res.status(404).json({ message: error });
//     }
//   })
//   .get(async (req, res) => {
//     const drivers = await query("SELECT * FROM driver");
//     res.status(200).json({ drivers: drivers });
//   });

export default handler;
