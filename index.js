require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const app = express();
const session = require('express-session')

const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: (1000*60*60)
	},
};

app.use(session(sessionConfig));

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

app.use((req, res, next) => {
  if (req.session.user) {
      res.locals.user = req.session.user;
  }
  next();
})

app.use(router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT,()=>{
    console.log(`Mon serveur est démarré sur http://localhost:${PORT}`);
});