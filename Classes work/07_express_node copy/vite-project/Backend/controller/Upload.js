const uploadimage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' }); // <- this is your 400
  }

  res.status(200).json({
    message: "Upload successful",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
};

module.exports = { uploadimage };
