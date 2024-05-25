const express = require('express')
const routes = express.Router()
const adminControllers = require("../controllers/admin")
const barangControllers = require("../controllers/barang")
const upload = require("../middleware/uploader")

routes.post("/login", adminControllers.login)
routes.post("/adminbaru", upload,adminControllers.createAdmin)
routes.put("/adminbaru/:id", adminControllers.updateAdmin)
routes.delete("/adminhapus/:id", adminControllers.deleteAdmin)


routes.post("/barangbaru", upload, barangControllers.createBarang)
routes.get("/getbarang", barangControllers.getAllBarang)
routes.put("/updatebarang/:id", upload ,barangControllers.updateBarang)
routes.delete("/deletebarang/:id", barangControllers.deleteBarang)
routes.get("/barangid/:id", barangControllers.getBarangById);

module.exports = routes