const security = {
    adminCheck : (req, res, next) => {
        req.session.user ? req.session.user.role_id === 1 ? next() : res.redirect('/') : res.redirect('/');
    }
}

module.exports = security;