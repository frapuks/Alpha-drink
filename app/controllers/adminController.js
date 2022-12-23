const datamapper = require("../datamapper");

const adminController = {
    loginPage(req, res) {
        res.render('loginPage');
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
            res.redirect('/admin/dashboard');
        } else {
            res.render('loginPage', {
                message : 'Aucun utilisateur trouvé'
            })
        }
    }
}

module.exports = adminController;