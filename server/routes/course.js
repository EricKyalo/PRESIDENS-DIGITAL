const express = require("express");
const router = express.Router();
const Content = require("../models/content")

// // get route

// router.get("/course", (req, res) => {
//      res.render("copywriting/course")
// })


// get + content route
router.get("/course/", async(req, res, next) =>{
     let content =  await Content.find({})
     let {chapterID} = req.params;
     content = await Content.findOne({chapterID: chapterID})
     try{
          res.render("copywriting/course", { content: content })
     }
     catch (e) {
          console.log(e)   
          return res.render("copywriting/course")
     }
})

router.get('/course/:chapterID', async (req, res) => {
     let {chapterID} = req.params;
     content = await Content.findOne({chapterID: chapterID});
     res.render("copywriting/course", { content: content })
 });

module.exports = router;

// app.get('/all', async (req, res) => {
//     // const data = await Content.find({});
//     const data = await Content.findOne({ id: 1 });
//     res.send(data);
// });
// app.get('/chapters/:chapterId', async (req, res) => {
//      let { chapterId } = req.params;
//      chapterId = parseInt(chapterId);
//      const data = await Content.findOne({ id: chapterId });
//      res.send(data);
//  });

