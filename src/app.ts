import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import taskRoutes from './routes/task.routes';
import projectRoutes from './routes/project.routes';
import commentRoutes from './routes/comment.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/comments', commentRoutes);

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "TaskFlow API",
    version: "1.0.0"
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;