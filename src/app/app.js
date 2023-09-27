import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import '../database/db.js'; 
import '../helper/createRole.js';
import '../helper/insertQuestions.js';
import '../helper/insertBaseAnswer.js';
import helmet from 'helmet';


// import routes 
import Answer from '../routes/answerRouter.js';
import categoryRouter from '../routes/categoryRouter.js';
import logInRouter from '../routes/logInRouter.js';
import modulesRouter from '../routes/modulesRouter.js';
import resourcesRouter from '../routes/resourcesRouter.js';
import roleRouter from '../routes/roleRouter.js';
import testRouter from '../routes/testRouter.js';
import typeLearnRouter from '../routes/typeLearnRouter.js';
import userRouter from '../routes/userRouter.js';
import logOut from '../routes/logOut.js';
import BaseAnswer from '../routes/baseAnswerRouter.js';



// config server
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  //use routes

app.use('/api/answer', Answer);
app.use('/api/category', categoryRouter);
app.use('/api/logIn', logInRouter);
app.use('/api/modules', modulesRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/role', roleRouter);
app.use('/api/test', testRouter);
app.use('/api/typeLearn', typeLearnRouter);
app.use('/api/user', userRouter);
app.use('/api/logOut', logOut);
app.use('/api/baseAnswer', BaseAnswer);



export default app;