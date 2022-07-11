import express from "express"
import db from "../database.js"
import joi from "joi";
import joiPassword from "joi-password"

const app = express();

app.use(express.json());

export async function validSignUp(req, res, next){
  const {name, email, password, confirm, photo} = req.body;
    console.log(req.body);
  
  const schema = {
    name,
    email,
    password,
    confirm
  }

    const schemaSignUp = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
      confirm: joi.ref("password") 
  })

  const {error} = schemaSignUp.validate(schema,{abortEarly: false});

  if (error) {
      return res.status(422).send(error);
  }

  const exists = await db.collection('users').findOne({email})

  if(exists){
    return res.status(409).send('email already exists')
  }

  next()
}