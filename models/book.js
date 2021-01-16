let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, unique: true, dropDups: true},
    link: { type: String, required: true}
})

let GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;