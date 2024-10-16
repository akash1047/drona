import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',  // Directory where your E2E tests will be located
  timeout: 30 * 1000,  // Maximum time one test can run (30 seconds)
  retries: 0,  // Set the number of retries for flaky tests
  use: {
    headless: true,  // Set to false if you want to see the browser during testing
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',  // Record video only when a test fails
    baseURL: 'http://localhost:3000',  // URL of your local dev server
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    // You can add more browsers here (Firefox, WebKit) if needed
  ],
  webServer: {
    command: 'bun run dev',  // Command to start your Next.js app
    port: 3000,
    timeout: 120 * 1000,  // Time to wait for the server to start
    reuseExistingServer: !process.env.CI,  // Do not start a new server if one is already running
  },
});
