import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb+srv://aareeuh:gOUNtmhcOcTXaPtl@cluster0.8zciamf.mongodb.net/Blog?retryWrites=true&w=majority")
  .then(() => app.listen(5000))
  .then(() => console.log("Connected To Database and Listening TO Localhost 5000"))
  .catch((err) => console.log(err));



