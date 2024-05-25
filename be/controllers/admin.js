const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { json } = require('body-parser')


const createAdmin = async (req, res) => {
    try{
    const { username, password } = req.body
    
    const newPassword = await bcrypt.hash(password, 10)
    const adminBaru = await models.admin.create({username,password: newPassword})
    
    res.status(200).send({adminBaru})
    }catch(err){    
        console.log(err)
    }
}

const login = async (req, res) => {
    try{
    const { username, password } = req.body

    const adminBaru = await models.admin.findOne({where:{username: username}})
    if (!adminBaru){
        return res.status(404).send({msg:"Username not found"});
    }
   const dbPassword = adminBaru.password
   const match = await bcrypt.compare(password, dbPassword)

    if(!match){
        return res.status(400).send("error")
    }

    const token = jwt.sign({username: username}, "Tester");

    res.status(200).send({adminBaru, token})
    }catch(err){
        console.log(err)
    }
}


const updateAdmin = async (req, res) => {
    try{
        const id = req.params.id
        const { username, password } = req.body
        const update = await models.admin.update({username,password},{where:{id:id}});
        res.status(200).send("successfuly updated")
    }catch(err){
        res.status(400).send({error: err.message})
    }
}

const deleteAdmin = async (req, res) => {
    try{
    const id = req.params.id
    const hapus = await models.admin.destroy({where:{id:id}})
    res.status(200).send("successfully deleted")
    }catch(err){
        res.status(400).send({error: err.message})
    }
}


module.exports = { createAdmin, updateAdmin, deleteAdmin, login};