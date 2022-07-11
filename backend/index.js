const express = require("express");
const app = express();
const PORT = 8083;
const cors = require("cors");   
const conn = require("./db");

conn.connection.on("connected", (err) => {
    if(err){
        console.error(err);
    }else{
        console.log("Connected to Mongodb");
    }
})

app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/link", require("./routes/link"));
app.use("/person", require("./routes/persondetails"));
app.use("/edu", require("./routes/edudetails"));
app.use("/project", require("./routes/project"));
app.use("/intern", require("./routes/intern"));

// ---------------------------------------------- //

app.listen(PORT, () => {
    console.log("Server is start");
});