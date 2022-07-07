import { Router } from 'express';
import { getAllProducts, getAllProductsWithCategories, getProductsCategories} from '../controllers/productsController.js';
import { tokenMiddleware } from '../middlwares/tokenMiddleware.js';


const router = Router();

router.use(tokenMiddleware);

router.get("/products", getAllProducts);// Retorna todos os produtos 
router.get("/products-with-cat", getAllProductsWithCategories);//Retorna Lista de Produtos por Categoria
router.get("/products-categories", getProductsCategories);//Retorna Categorias de Produto

export default router;