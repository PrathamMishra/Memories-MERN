import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/posts.js";

dotenv.config();
const app=express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts",postRoutes);

app.get("/", (req,res) => {
    res.send("Hello to memories API");
})

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(PORT,console.log(`Server running on ${PORT}`));
    })
    .catch((err)=>{
        console.log(err.message);
    });

mongoose.set("useFindAndModify",false);
