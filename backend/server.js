require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./index");

const DB_URL = process.env.MONGO_URL.replace("<db_password>", process.env.MONGO_PASSWORD);
const port = process.env.PORT || 4000;

mongoose
.connect(DB_URL)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));


app.listen(port, (err) => {
   if(err) console.log(err, "Application failed to start");
   else console.log(`Application started on port ${port}`);
});
