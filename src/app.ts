import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import taskRoutes from './routes/task.routes';
import projectRoutes from './routes/project.routes';
import commentRoutes from './routes/comment.routes';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/comments', commentRoutes);
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ message: err.message });
});

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "TaskFlow API",
    version: "1.0.0"
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;