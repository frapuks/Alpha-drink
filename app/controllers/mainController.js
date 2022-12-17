const datamapper = require("../datamapper");

const mainController = {
    async homePage(req,res){
        const categories = await datamapper.getAllCategoriesWithDrinks();
        if(!categories){
            return res.status(500).render('500');
        }
        return res.render("home", {
            categories
        });
    }
};

module.exports = mainController;