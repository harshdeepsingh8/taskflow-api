import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import taskRoutes from './routes/task.routes';
<<<<<<< HEAD
import projectRoutes from './routes/project.routes';
import commentRoutes from './routes/comment.routes';
import swaggerUi from 'swagger-ui-express';
=======
import projectRoutes from './routes/project.routes.js';
import commentRoutes from './routes/comment.routes.js';

dotenv.config();
>>>>>>> feature/email-component

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

<<<<<<< HEAD
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/comments', commentRoutes);
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ message: err.message });
});

=======
// ROUTES
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/comments', commentRoutes);

// SWAGGER
>>>>>>> feature/email-component
const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "TaskFlow API",
    version: "1.0.0"
<<<<<<< HEAD
=======
  },
  paths: {
    "/tasks": {
      get: { summary: "Get all tasks" },
      post: { summary: "Create task" }
    },
    "/projects": {
      get: { summary: "Get all projects" },
      post: { summary: "Create project" }
    },
    "/comments": {
      get: { summary: "Get all comments" },
      post: { summary: "Create comment" }
    }
>>>>>>> feature/email-component
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
<<<<<<< HEAD
=======

// ERROR HANDLER (IMPORTANT FOR MARKS)
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ message: err.message });
});
>>>>>>> feature/email-component

export default app;