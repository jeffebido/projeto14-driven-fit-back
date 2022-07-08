import express from "express"
import db from "../database.js"
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(express.json());

export async function LogIn(req, res){db;
    const data = await req.body;
    console.log(data)
    const token = uuid();

    const user = await db.collection('users').findOne({email: data.email})
    // console.log(user)
    const session = await db.collection('sessions').findOne({userId: user._id})
    // console.log(session)

    const loginData = {
      name: user.name,
      token: token
    }

    if(session){
      try{
        await db.collection('sessions').updateOne(
          {_id: user._id}, // FIND SESSION 
          {$set:{token: token}}) // UPDATE SESSION FIELD
        return res.status(200).send(loginData)
      } catch(err){
        console.log(err)
      }
    }

    await db.collection("sessions").insertOne({
      userId: user._id,
      token: token
    })

    console.log(loginData)

    return res.status(200).send(loginData)
}

export async function SignUp(req, res){
    const {name, email, password, photo} = req.body;
    console.log(req.body);

  const encrypted = bcrypt.hashSync(password, 10);
  console.log(encrypted)
  const encUser ={ // ENCRYPTED USER
    name,
    email,
    password: encrypted,
    photo
  }

    try{
        await db.collection('users').insertOne(encUser);
        res.status(201).send('created')
    } catch(err){
        console.log(err)
    }
}