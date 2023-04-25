import express from "express";
import {getAllBlogs} from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addblog)

export default blogRouter;