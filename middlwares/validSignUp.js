import express from "express"
import db from "../database.js"
import joi from "joi";

const app = express();

app.use(express.json());

export async function validSignUp(req, res){
  const {name, email, password, photo} = req.body;
    console.log(req.body);

    const schemaSignUp = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      photo: joi.string.uri().required(),
      password: joi.string().required(),
      confirm: joi.ref("password") 
  })

  const {error} = schemaSignUp.validate(req.body,{abortEarly: false});

  if (error) {
      return res.status(422).send(error);
  }

  const exists = await db.collection('users').findOne({email})

  if(exists){
    return res.status(409).send('email already exists')
  }

  next()
}