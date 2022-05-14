const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
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