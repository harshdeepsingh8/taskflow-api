import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import taskRoutes from './routes/task.routes';
import projectRoutes from './routes/project.routes';
import commentRoutes from './routes/comment.routes';
import { authMiddleware } from './middlewares/auth.middleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "TaskFlow API",
    version: "1.0.0"
  },
  paths: {
    "/tasks": {
      get: { summary: "Get all tasks" },
      post: { summary: "Create task" }
    },
    "/tasks/{id}": {
      put: { summary: "Update task" },
      delete: { summary: "Delete task" }
    }
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/tasks', authMiddleware, taskRoutes);
app.use('/projects', authMiddleware, projectRoutes);
app.use('/comments', authMiddleware, commentRoutes);

export default app;