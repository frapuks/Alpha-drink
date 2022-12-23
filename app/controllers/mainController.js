const datamapper = require("../datamapper");

const mainController = {
    async homePage(req,res){
        // faire le try catch ici, pas dans le datamapper
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
            const js = '/javascript/drink.js';
            res.render('drink', {
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
        await datamapper.createReview(req.body);
        res.redirect(`/drinks/${req.body.drink_id}`);
    }
};

module.exports = mainController;