
const getLandingpage = (req,res) => {
    res.render("landingpage.ejs");
}
const getStartPage =(req,res)=>{
    res.render("startPage.ejs");
}

module.exports.getLandingpage = getLandingpage;
module.exports.getStartPage = getStartPage;
