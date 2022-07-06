import express from "express"
import db from "../database.js"
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(express.json());

export async function validPassword(req, res){
  const user = await req.body;
  console.log(user)

const found = await db.collection('users').findOne({email: user.email})

if(!found) {return res.status(404)}

const comparePass = bcrypt.compareSync(user.password, found.password)

  if(found && comparePass){
    const token = uuid();
    console.log(token)
    console.log(found._id)
    await db.collection("sessions").insertOne({
      userId: found._id,
      token
    })
    
    const send = {
      user: found.name,
      token: token
    }

    res.locals.user = send

    return next()
  } else{
    return res.status(404).send("User and/or password does not match")
  }
}