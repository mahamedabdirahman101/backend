import express from "express"
import dotenv from "dotenv" 
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`The server is running at http://localhost:${PORT}`);
});





//routes
app.get("/", (req, res) => res.send({message:"API IS WORKING"}));

//get all books
app.get("/api/books", (req,res)=> res.send({message:"All Books"}))

//get single book - fetch
app.get("/api/books/:id", (req,res)=> res.send({message:"Single Book"}));

//post - Save a Book
app.post("/api/books", (req, res) => res.send({message: "Save a book"}));

//update - Update a Book
app.put("/api/books/:id", (req, res) => res.send({message: "Update a book"}));

//DELETE - Delete a Book
app.delete("/api/books/:id", (req, res) => res.send({message: "Delete a book"}));