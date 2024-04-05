import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { 
    deleteProduct, 
    getAdminProducts, 
    getAllCategories, 
    getAllProducts, 
    getSingleProduct, 
    getlatestProducts, 
    newProduct, 
    updateProduct 
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

// Create New Product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// To Get All Products with filters - /api/v1/product/all
app.get("/all", getAllProducts);

// To Get Last 10 Products - /api/v1/product/latest
app.get("/latest", getlatestProducts);

// To Get All Unique Categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

// To Get All Products - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);

// To Get, update, delete Product
app
    .route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);

export default app;