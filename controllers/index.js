const router = require('express').Router();

const apiRoutes = require('./api');

// this is for home-routes.js
const homeRoutes = require('./home-routes.js');

// this is for the dashboard-routes.js
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;