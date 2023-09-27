const express = require('express');
const viewRouter = express.Router();
const {getLandingpage,getStartPage,getDocumentsPage} = require('../Controller/viewController');


viewRouter.route("/").get(getLandingpage);
viewRouter.route("/start").get(getStartPage);
viewRouter.route("/document").get(getDocumentsPage);
module.exports.viewRouter = viewRouter;