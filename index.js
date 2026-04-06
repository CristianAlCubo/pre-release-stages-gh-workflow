#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
if (!fs.existsSync(workflowsDir)) fs.mkdirSync(workflowsDir, { recursive: true });

const files = [
  { name: 'versioning-release.yml', content: 'name: Versioning Release\n' },
  { name: 'versioning-release-candidate.yml', content: 'name: Versioning Release Candidate\n' },
  { name: 'versioning-development.yml', content: 'name: Versioning Development\n' },
];

files.forEach(file => {
  const filePath = path.join(workflowsDir, file.name);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, file.content);
});

console.log('Workflows creados en .github/workflows');