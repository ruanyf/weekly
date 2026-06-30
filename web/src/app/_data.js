import fs from 'node:fs';
import path from 'node:path';
import {INDEX} from '@/article/generate/index.mjs';

const dir = path.resolve(process.cwd(), 'src/article/generate');

export function getIndex() {
  return INDEX;
}

export function getIssue(number) {
  const file = path.join(dir, `issue-${number}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

export function getSearchIndex() {
  return JSON.parse(fs.readFileSync(path.join(dir, 'search-index.json'), 'utf-8'));
}
