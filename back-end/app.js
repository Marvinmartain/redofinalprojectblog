import express from 'express';
import mongoose from 'mongoose';
import { Router } from 'express';
// import blogRouter from './routes/blog-routes';
// import router from './routes/user-routes';



const app = express();

app.use(express.json());
// app.use("/api/user", router);
// app.use("/api/blog", blogRouter);


mongoose.connect(
  
  "mongodb+srv://aareeuh:gOUNtmhcOcTXaPtl@cluster0.8zciamf.mongodb.net/Blog?retryWrites=true&w=majority"
)
  .then(() => app.listen(5000))
  .then(() => console.log("Connected To Database and Listening TO Localhost 5000")
)
  .catch((err) => console.log(err));



