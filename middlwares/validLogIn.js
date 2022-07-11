import express from "express"
import joi from "joi";

const app = express();

app.use(express.json()); 

export async function validLogIn(req, res, next){
  const user = await req.body;
  console.log(user)

  const schemaLogIn = joi.object({
    email: joi.string().min(1).email().required(),
    password: joi.string().min(1).required()
  })

const {error} = schemaLogIn.validate(req.body,{abortEarly: false});

if (error) {
    return res.status(422).send("User and/or password does not match at vL");
} 
  next();
}