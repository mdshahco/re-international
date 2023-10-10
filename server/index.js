import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});



// app.get('/test', (req, res)=>{
//     res.json({
//         message: 'hello world',
//     });
// });








const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL);

        app.listen(3000,()=> console.log('Server started on port http://locathost:3000'));

    } catch(error){
        console.log(error);
    }
}

startServer();

