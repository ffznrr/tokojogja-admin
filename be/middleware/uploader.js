const multer = require("multer");

const filter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/webp") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadPath = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'resources/uploads/')
  },
  filename: (req, file, cb) => {
    const filename = `${file.originalname}`;
    cb(null, filename);
  }
})

const upload = multer({
  fileFilter: filter,
  storage: multer.memoryStorage()
}).single('gambar_barang');

// const Upload = multer({Storage: fileStorage, fileFilter: filter}).single('gambar_barang')

module.exports = upload;