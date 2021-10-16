const akses = require("express").Router();
const bukuModel = require("./model.js");

akses.route("/").get((req, res) => {
    bukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req,res) => {
    bukuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku telah dihapus"))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/update/:id").put((req, res)=>{
    bukuModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/add").post((req,res) => {
    bukuModel.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error )=> res.status(400).json(error.message));
})
module.exports = akses;