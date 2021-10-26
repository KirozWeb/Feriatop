const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("index",{titulo : ""});
})

router.get('/servicios',(req,res)=>{
    res.render("servicios",{tituloServicios : ""});
})

module.exports = router;