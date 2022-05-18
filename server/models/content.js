const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema(
    {
        chapterID: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
        content: {
            type: String
        }
});


const Content = mongoose.model("content", contentSchema);
module.exports = Content;