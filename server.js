import express from "express"
import cors from "cors"
import chalk from "chalk"
import dotenv from "dotenv"
import userRouter from './router/userRoute.js';
import checkoutRoute from './router/checkoutRoute.js'
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3027

//HANDLES SIGNUP AND LOGIN
app.use(userRouter)

// HANDLES HOME AND PRODUCT

// HANDLES CART AND CHECKOUT
app.use(checkoutRoute)

app.listen(PORT, () => {
    console.log(chalk.bold.blue('SERVER_UP ON PORT' + PORT));
  });
