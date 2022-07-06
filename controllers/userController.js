import express from "express"
import db from "../database.js"
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());

export async function LogIn(req, res){db;
    const user = await req.body;
    console.log(user)

    const send = res.locals.user;
    console.log(send)

    return res.status(200).send(send)
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