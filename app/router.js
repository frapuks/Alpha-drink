const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get("/", mainController.homePage);


router.use((req,res)=>{
    res.status(404).render("404",);
});

module.exports = router;