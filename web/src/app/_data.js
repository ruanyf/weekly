import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.cwd(), 'src/article/generate');

export function getIndex() {
  return JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf-8'));
}

export function getIssue(number) {
  const file = path.join(dir, `issue-${number}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}
