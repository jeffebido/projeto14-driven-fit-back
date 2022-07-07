import db from "../database.js";

export async function getAllProducts(req, res) {

    try {
        const products = await db.collection('products').find().toArray();//Busca lista de produtos no bd
        
        return res.send(products);
    } catch(error) {
        console.log(error);
    }
}