import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { errorHandler } from './middleware/errorMiddleware';
import { sequelize } from './config/database';
import { logger } from './utils/logger';

// Import routes
import authRoutes from './routes/authRoutes';
import venueRoutes from './routes/venueRoutes';
import contactRoutes from './routes/contactRoutes';
import performanceRoutes from './routes/performanceRoutes';
import communicationRoutes from './routes/communicationRoutes';
import documentRoutes from './routes/documentRoutes';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Swagger documentation
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Venue Relationship Tracker API',
      version: '1.0.0',
      description: 'API for the Venue Relationship Tracker application',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/venues', venueRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/performances', performanceRoutes);
app.use('/api/communications', communicationRoutes);
app.use('/api/documents', documentRoutes);

// Error handling middleware
app.use(errorHandler);

// Database connection
sequelize
  .authenticate()
  .then(() => {
    logger.info('Database connection established successfully');

    // Start the server
    app.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    logger.error('Unable to connect to the database:', error);
  });

export default app;
