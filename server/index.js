import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res)=>{
    res.send({ message: 'Hello world'});


})

const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL);

        app.listen(8081,()=> console.log('Server started on port http://locathost:8081'));

    } catch(error){
        console.log(error);
    }
}

startServer();