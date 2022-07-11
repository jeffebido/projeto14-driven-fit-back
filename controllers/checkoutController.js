import express from "express"
import db from "../database.js"
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import  authSchema1 from '../validations/validation_schema.js'
const app = express();

app.use(express.json());

export async function checkedOut(req,res){
    const data= await req.body;

    try {
        const result = await authSchema1.validateAsync(req.body);
        console.log(result)

        if(data){
            const buyerdata = await db.collection("invoices").insertOne({data});
            return res.status(200).send('compra finalizada com sucesso')
        }
    } catch (error) {
        console.log(error)
        return res.status(404).send("erro na finalização da compra")
    }

}