import { PrismaClient } from '@prisma/client';
import { startServer } from './server';

export const prisma = new PrismaClient();

export * from '@prisma/client';
export * from './server';

// Start the server when this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer().catch(console.error);
}
