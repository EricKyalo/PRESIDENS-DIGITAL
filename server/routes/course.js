const express = require("express");
const router = express.Router();
const Content = require("../models/content")

// // get route

// router.get("/course", (req, res) => {
//      res.render("copywriting/course")
// })


// get + content route
router.get("/course", async(req, res, next) =>{
     let content = await Content.findOne({id: 1})
     try{
          res.render("copywriting/course", { content: content })
     }
     catch (e) {
          console.log(e)   
          return res.render("copywriting/course")
     }
})



module.exports = router;


