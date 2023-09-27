
const getLandingpage = (req,res) => {
    res.render("landingpage.ejs");
}
const getStartPage =(req,res)=>{
    res.render("startPage.ejs");
}
const getDocumentsPage=(req,res)=>{
    res.render("documentsPage.ejs")
}

module.exports.getLandingpage = getLandingpage;
module.exports.getStartPage = getStartPage;
module.exports.getDocumentsPage = getDocumentsPage;
