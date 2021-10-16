const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku",{
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "koneksi ke database gagal, silahkan coba lagi.."));

db.once("open", () =>{
    console.log("Koneksi ke database telah berhasil");
});     