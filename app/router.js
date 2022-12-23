const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const adminController = require('./controllers/adminController');
const security = require('./middleware/security');

router.get('/', mainController.homePage);
router.get('/drinks/:id', mainController.drinkPage);
router.post('/reviews/add', mainController.addReview);

router.get('/admin/login', adminController.loginPage);
router.post('/admin/loginCheck', adminController.loginCheck);

router.use((req,res)=>{
    res.status(404).render("404",);
});

module.exports = router;