import { Router } from 'express';
import { getAllProducts } from '../controllers/productsController.js';
import { tokenMiddleware } from '../middlwares/tokenMiddleware.js';


const router = Router();

router.use(tokenMiddleware);

router.get("/products", getAllProducts);

export default router;