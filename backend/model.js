const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema(
    {
        pengarang: {type : String, required: true},
        judul: {type : String, required: true},
        harga: {type : Number, required: true},
        stok: {type : Number, required: true},
    },
    {
        collection: "koleksiBuku"
    }
);

module.exports = mongoose.model("BukuModel", bookSchema);