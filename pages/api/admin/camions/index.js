import query from "../../../../database/db.js";
import connect from "../../../../next-connect/next-connect";
const API = connect()
  .get(async (req, res) => {
    const camions = await query("SELECT * FROM camions");
    res.status(200).json({ camions: camions });
  })
  .post(async (req, res) => {
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
      finishedDate,
    } = req.body;
    const newCamion = await query(
      `INSERT INTO camions(owner,driverCardNumber,chassisNo,plateNumber,camionMarket,camionWieght,camionColor,serialNumber,loginType,camionModel,camionLoad,madeDate,businessCard,prent,insurance,finishedDate) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
        finishedDate,
      ]
    );
    res.status(200).json({ camion: newCamion });
  })
  .put(async (req, res) => {
    try {
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
        finishedDate,
        id,
      } = req.body;
      const VALUES = [
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
        finishedDate,
        id,
      ];
      const editData = await query(
        `UPDATE camions SET
        owner = ?,
        driverCardNumber = ?,
        chassisNo = ?,
        plateNumber = ?,
        camionMarket = ?,
        camionWieght = ?,
        camionColor = ?,
        serialNumber = ?,
        loginType = ?,
        camionModel = ?,
        camionLoad = ?,
        madeDate = ?,
        businessCard = ?,
        prent = ?,
        insurance = ?,
        finishedDate = ?
        WHERE id = ?`,
        VALUES
      );
      res.status(200).json({ driverEditData: "ANY" });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  });
export default API;
