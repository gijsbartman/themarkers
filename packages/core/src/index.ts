import { PrismaClient } from '@prisma/client';
import { startServer } from './server';

export const prisma = new PrismaClient();

export * from '@prisma/client';
export * from './server';

// Start the server when this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const portIndex = args.indexOf('--port');
  const port = portIndex !== -1 ? parseInt(args[portIndex + 1], 10) : 2401;

  startServer({ port }).catch(console.error);
}
