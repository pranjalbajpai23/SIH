const express = require('express');
const viewRouter = express.Router();
const {getLandingpage} = require('../Controller/viewController');


viewRouter.route("/").get(getLandingpage);
module.exports.viewRouter = viewRouter;