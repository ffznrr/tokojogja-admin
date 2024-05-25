const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const getRouter = require("./routes/route");
const multer = require("multer");
const upload = multer();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api", getRouter);

app.listen(port, () => console.log("Sukses terhubung ke server")); 
