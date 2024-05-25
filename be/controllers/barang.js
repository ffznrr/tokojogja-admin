const models = require('../models');
const { uploadToImageKit } = require("../lib/imagekit");

const createBarang = async (req, res) => {
    try {
        const { nama_barang, stock, harga } = req.body;
        console.log(nama_barang, stock, harga)

        const uploadGambar = await uploadToImageKit(req);
        console.log(uploadGambar)
        const barangBaru = await models.barangs.create({gambar_barang: uploadGambar.url, nama_barang, stock, harga})
        res.status(200).json({ msg: "Barang created successfully", data: barangBaru });
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getAllBarang = async (req, res) => {
    try{
    const getAll = await models.barangs.findAll();
    res.status(200).json({msg: getAll})
    }catch (err) {
console.log(err.message);
    }
}

const deleteBarang = async (req, res) => {
    try{
        const id = req.params.id
        const deleteBarang = await models.barang.destroy({where:{id:id}});
        res.status(200).send("Barang deleted successfully")
    }catch (err) {
        res.status(400).send(err.message)
    }
}

const getBarangById = async (req, res) => {
    try{
    const id = req.params.id
    const findBarang = await models.barang.findOne({where:{id:id}})
    res.status(200).json({msg: findBarang});

    }catch (err) {
        console.error(err.message);
    }
}

const updateBarang = async (req, res) => {
    try{
        const id = req.params.id
        const { nama_barang, stock, harga } = req.body
        const upload = await uploadToImageKit(req)

        const updateBar = await models.barang.update({gambar_barang: upload.url, nama_barang, stock, harga}, {where:{id}})
        res.status(200).send({msg: "successfully update"})
    }catch (err) {
        res.status(400).send({msg: err.message});
    }
}


module.exports = { createBarang, getAllBarang, updateBarang, deleteBarang, getBarangById };
