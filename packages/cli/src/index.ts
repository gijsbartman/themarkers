#!/usr/bin/env node

import { spawn } from 'child_process';
import { Command } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgDir = path.resolve(__dirname, '..');

const program = new Command();

program.name('themarkers').description('CLI to manage TheMarkers application').version('0.1.0');

program
  .command('start')
  .description('Start the dashboard and database')
  .option('--port <port>', 'Port to bind to (default: 2401)', '2401')
  .action(async (options) => {
    console.log('Starting TheMarkers dashboard and API...');

    // Start the API using the built version
    const corePath = path.resolve(pkgDir, '../core');
    const api = spawn('node', ['dist/index.js', '--port', options.port], {
      cwd: corePath,
      stdio: 'inherit',
      shell: true,
    });

    api.on('error', (error) => {
      console.error('Failed to start API:', error);
      process.exit(1);
    });

    // No need to start UI separately as it's now served by the API
    console.log(
      `Server starting! Once ready, open http://localhost:${options.port} in your browser`
    );

    // Handle SIGINT (Ctrl+C) to properly clean up
    process.on('SIGINT', () => {
      api.kill();
      process.exit(0);
    });
  });

program
  .command('health')
  .description('Check the health of the API')
  .action(async () => {
    try {
      const response = await fetch('http://localhost:3001/health');
      const data = await response.json();
      console.log('API Health Status:', data);
    } catch (error) {
      console.error('Failed to check API health:', error);
      process.exit(1);
    }
  });

program.parse();
