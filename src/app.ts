import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/tasks', taskRoutes);

export default app;