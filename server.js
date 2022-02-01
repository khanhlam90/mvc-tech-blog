const express = require('express');

const routes = require('./controllers');

//importing the connection to Sequelize from config/connection.js
const sequelize = require('./config/connection');

const path = require('path');

const helpers = require('./utils/helpers');

// set up Handlebars.js
const exphbs = require('express-handlebars');

// pass the helpers
const hbs = exphbs.create({ helpers }); 

// to use express-session and sequelize store; sets up an Express.js session and connects the session to our Sequelize database
const session = require('express-session');

const app = express();

const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});





