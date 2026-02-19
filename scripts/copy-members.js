#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const src = join(root, 'members.json');
const destDir = join(root, 'public');
const dest = join(destDir, 'members.json');

if (!existsSync(src)) {
    console.error('members.json not found in repo root. Nothing to copy.');
    process.exit(1);
}

try {
    if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
    copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
    console.error('Failed to copy members.json:', err);
    process.exit(1);
}
