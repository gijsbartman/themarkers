import cors from 'cors';
import type { Express, Router } from 'express';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { prisma } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app: Express = express();
const apiRouter: Router = express.Router();

app.use(cors());
app.use(express.json());

// Serve static files from UI
const uiPath = path.resolve(__dirname, '../../ui/dist');
app.use(express.static(uiPath));

// Health check endpoint
apiRouter.get('/health', async (req, res) => {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'healthy', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', database: 'disconnected', error: String(error) });
  }
});

// Mount API routes under /api
app.use('/api', apiRouter);

// Serve index.html for all non-API routes (for client-side routing)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    next();
    return;
  }
  res.sendFile(path.join(uiPath, 'index.html'));
});

export function startServer(port: number = 2401) {
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`API server running at http://localhost:${port}/api`);
      resolve(server);
    });
  });
}
