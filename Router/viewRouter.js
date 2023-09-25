const express = require('express');
const viewRouter = express.Router();
const {getLandingpage,getStartPage} = require('../Controller/viewController');


viewRouter.route("/").get(getLandingpage);
viewRouter.route("/start").get(getStartPage);
module.exports.viewRouter = viewRouter;