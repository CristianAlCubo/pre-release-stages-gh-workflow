// Crear el directorio .github/workflows si no existe
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simular __dirname en ESModule
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workflowsDir = path.join(__dirname, '.github', 'workflows');
if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir, { recursive: true });
}

// 1. Crear el archivo versioning-release.yml
const versioningReleaseFile = path.join(workflowsDir, 'versioning-release.yml');
if (!fs.existsSync(versioningReleaseFile)) {
    fs.writeFileSync(versioningReleaseFile, 'name: Versioning Release\n');
}

// 2. Crear el archivo versioning-release-candidate.yml
const versioningReleaseCandidateFile = path.join(workflowsDir, 'versioning-release-candidate.yml');
if (!fs.existsSync(versioningReleaseCandidateFile)) {
    fs.writeFileSync(versioningReleaseCandidateFile, 'name: Versioning Release Candidate\n');
}
// 3. Crear el archivo versioning-development.yml
const versioningDevelopmentFile = path.join(workflowsDir, 'versioning-development.yml');
if (!fs.existsSync(versioningDevelopmentFile)) {
    fs.writeFileSync(versioningDevelopmentFile, 'name: Versioning Development\n');
}