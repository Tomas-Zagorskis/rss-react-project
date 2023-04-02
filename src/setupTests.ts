import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { randomUUID } from 'node:crypto';

expect.extend(matchers);
window.crypto.randomUUID = randomUUID;
