const datamapper = require("../datamapper");

const adminController = {
    loginPage(req, res) {
        if (req.session.user) {
            if (req.session.user.role_id === 1) {
                return res.redirect('/admin/dashboard');
            }
        }
        return res.render('loginPage');
    },

    async loginCheck(req, res) {
        const user = await datamapper.findUser(req.body);
        if (user) {
            req.session.user = {
                id : user.id,
                name : `${user.firstname} ${user.lastname}`,
                email : user.email,
                role_id : user.role_id
            };
            return res.redirect('/admin/dashboard');
        } else {
            return res.render('loginPage', {
                message : 'Aucun utilisateur trouvé'
            })
        }
    },

    async dashboardPage(req, res) {
        try {
            const categories = await datamapper.getAllCategoriesWithDrinks();
            const idCategories = await datamapper.getAllCategories();
            return res.render('dashboardPage', {
                categories,
                idCategories,
                js : '/dashboard.js'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async updateDrinkPage(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            const drink = await datamapper.getOneDrinkById(drinkId);
            const reviews = await datamapper.getReviewByDrinkId(drinkId);
            const idCategories = await datamapper.getAllCategories();
            const js = '/dashboard.js';
            return res.render('updateDrinkPage', {
                drink,
                reviews,
                idCategories,
                js
            })
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async updateDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            await datamapper.updateDrink(drinkId, req.body);
            return res.redirect(`/admin/drinks/${drinkId}`);
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async deleteReview(req, res) {
        try {
            const reviewId = parseInt(req.params.id);
            const result = await datamapper.deleteReview(reviewId);
            return res.redirect(`/admin/drinks/${result.drink_id}`);
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async deleteDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            await datamapper.deleteDrink(drinkId);
            return res.redirect('/admin/dashboard');
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async availableDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            await datamapper.availableDrink(drinkId);
            return res.redirect('/admin/dashboard');
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async unavailableDrink(req, res) {
        try {
            const drinkId = parseInt(req.params.id);
            await datamapper.unavailableDrink(drinkId);
            return res.redirect('/admin/dashboard');
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    },

    async addDrink(req, res) {
        try {
            await datamapper.addDrink(req.body);
            return res.redirect('/admin/dashboard');
        } catch (error) {
            console.error(error);
            return res.status(500).render('500');
        }
    }
}

module.exports = adminController;