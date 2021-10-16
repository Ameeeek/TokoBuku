const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./db.js");

const app = express();
const port = 4000;
const routeAkses = require("./routes.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses);
app.listen(port, () =>{
    console.log("koneksi telah berhasil ke " + port);
})