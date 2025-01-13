import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jobRoutes from './routes/jobRoutes';
import sequelize from './config/db';
import { errorHandler } from "./middlewares/errorHandler";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(errorHandler);

app.use('/api',jobRoutes);

sequelize.sync({force:false}).then(()=>{
    console.log("This is working !!");
})

export default app;