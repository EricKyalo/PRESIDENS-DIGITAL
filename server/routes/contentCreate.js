const express = require("express");
const router = express.Router();
const Content = require("../models/content");


// get route for new form/page
router.get("/contentCreate", (req, res) => {
    res.render("copywriting/new", {content: new Content() } ) 
});


// post route
router.post("/contentCreate", async (req, res) => {
    let content = new Content({
        id: req.body.id,
        title:  req.body.title,
        content: req.body.content
    })
    try {
        content = await content.save()
        res.redirect("/course")
        console.log(req.body)
    } catch(e) {
        console.log(e);
        res.render("copywriting/new", {content: content}) 
        // returns us to the new page incase there's an error
    }
});

// using sermon.slug instead of sermon.id

module.exports = router;



















// // multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "");
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     }
//   });
  
//   const upload = multer({
//     storage: storage }).single("uploaded_file")
  
//   router.post("/contentCreate", async(req, res) =>{
//         let content = new Content({
//             id: req.body.id,
//             name: req.body.name,
//             content: req.body.content
//         })
                    
//         try {
//             content = await content.save()
//             res.redirect("/course")
//             console.log(req.file)
//         } catch(e) {
//             console.log(e);
//             res.render("copywriting/new", {content: content}) 
//                 // returns us to the new page incase there's an error
//             }
//         }
//       })
    