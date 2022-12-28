const datamapper = require("../datamapper");

const mainController = {
    async homePage(req,res){
        try {
            const categories = await datamapper.getAllCategoriesWithDrinks();
            return res.render("home", {
                categories
            });
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async drinkPage(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.getOneDrinkById(drinkId);
            const reviews = await datamapper.getReviewByDrinkId(drinkId);
            const js = '/drink.js';
            return res.render('drink', {
                drink,
                reviews,
                js
            })
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async addReview(req, res) {
        try {
            await datamapper.createReview(req.body);
            await datamapper.updateAverageRate(parseInt(req.body.drink_id));
            return res.redirect(`/drinks/${req.body.drink_id}`);
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    }
};

module.exports = mainController;