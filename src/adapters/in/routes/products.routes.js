import { Router } from "express";
import {ProductsController} from "../../../interface/http/ProductsController.js";
import { ListProductsUseCase } from "../../../application/ListProducts.js";

const router = Router();
const listProductsUseCase = new ListProductsUseCase();
const productsController = new ProductsController(listProductsUseCase);
router.get("/", productsController.list.bind(productsController));
export default router;
