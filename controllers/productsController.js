import db from "../database.js";

/* Retorna todos os produtos*/
export async function getAllProducts(req, res) {

    try {
        const products = await db.collection('products').find().toArray();//Busca lista de produtos no bd
        
        return res.send(products);
    } catch(error) {
        console.log(error);
    }
}

/* Retorna Categorias de Produto */
export async function getProductsCategories(req, res) {

    try {
        const categories = await db.collection('products').distinct( "category" );
        
        return res.send(categories);
    } catch(error) {
        console.log(error);
    }
}

/* Retorna Lista de Produtos por Categoria*/
export async function getAllProductsWithCategories(req, res) {

    try {

        const categories = await db.collection('products').distinct( "category" );

        let products = [];

        for await (let cat of categories){
            
            products.push({"category":cat, products: await db.collection('products').find( {"category":cat} ).toArray() });
        }
        
        return res.send(products);
    } catch(error) {
        console.log(error);
    }
}

