import { defineConfig } from 'vitest/config';
export default defineConfig({ test: { environment: 'jsdom', include: ['apps/web/src/**/*.test.{ts,tsx}', 'tests/integration/**/*.test.ts'], restoreMocks: true } });
