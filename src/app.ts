import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import taskRoutes from './routes/task.routes';
import projectRoutes from './routes/project.routes';
import commentRoutes from './routes/comment.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/comments', commentRoutes);

export default app;