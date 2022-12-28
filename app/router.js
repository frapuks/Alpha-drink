const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const adminController = require('./controllers/adminController');
const security = require('./middleware/security');

router.get('/', mainController.homePage);
router.get('/drinks/:id', mainController.drinkPage);
router.get('/drinks/:id/addStar', mainController.addStar);
router.post('/reviews/add', mainController.addReview);

router.get('/admin/login', adminController.loginPage);
router.post('/admin/loginCheck', adminController.loginCheck);
router.get('/admin/dashboard', security.adminCheck, adminController.dashboardPage);
router.get('/admin/drinks/:id', security.adminCheck, adminController.updateDrinkPage);
router.post('/admin/drinks/:id/update', security.adminCheck, adminController.updateDrink);
router.get('/admin/reviews/:id/delete', security.adminCheck, adminController.deleteReview);
router.get('/admin/drinks/:id/delete', security.adminCheck, adminController.deleteDrink);
router.get('/admin/drinks/:id/available', security.adminCheck, adminController.availableDrink);
router.get('/admin/drinks/:id/unavailable', security.adminCheck, adminController.unavailableDrink);
router.post('/admin/drinks/add', security.adminCheck, adminController.addDrink);

router.use((req,res)=>{
    res.status(404).render("404",);
});

module.exports = router;