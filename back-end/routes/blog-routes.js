import express from "express";
import { addBlogs, getAllBlogs} from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog)
blogRouter.put('/update',)

export default blogRouter;