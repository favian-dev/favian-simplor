const { projectLibraryDirectory, publicApiPrefix, publicApiFilePath } = require('./common');
const fs = require('fs');
const path = require('path');

/** All typescript files in lib directory. */
const typescriptFiles = getFilesRecursively(projectLibraryDirectory);

/** Normalized filenames for public-api.ts */
const normalizedTypescriptFiles = typescriptFiles
  .filter((file) => !file.endsWith('.spec.ts') && file.endsWith('.ts')) // Exclude test files and not typescript files.
  .map((file) => file.replace(projectLibraryDirectory, publicApiPrefix).replaceAll('\\', '/')); // Replace backslashes to slashes.

fs.writeFileSync(
  publicApiFilePath,
  normalizedTypescriptFiles.map((file) => `export * from '${file.replace(/\.ts$/, '')}'`).join('\n'),
  {
    encoding: 'utf8',
  },
);

/**
 * Get all files recursively in directory.
 * @param directory - Path of directory to get all files.
 * @returns string[] - Array of filepaths in directory.
 */
function getFilesRecursively(directory) {
  const files = [];
  const contents = fs.readdirSync(directory);

  contents.forEach((content) => {
    const contentPath = path.join(directory, content);
    const stat = fs.statSync(contentPath);

    if (stat.isDirectory()) {
      files.push(...getFilesRecursively(contentPath));
    } else {
      files.push(contentPath);
    }
  });

  return files;
}
