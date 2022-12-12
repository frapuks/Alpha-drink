const datamapper = require("../datamapper");

const mainController = {
    homePage(req,res){
        res.render("home");
    }
};

module.exports = mainController;