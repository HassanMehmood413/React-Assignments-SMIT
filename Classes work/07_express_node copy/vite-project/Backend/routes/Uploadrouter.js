// Uploadrouter.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadimage } = require("../controller/Upload");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadimage);

module.exports = router;
