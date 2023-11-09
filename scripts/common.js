const fs = require('fs');
const path = require('path');

const rootDirectory = path.join(__dirname, '..');
const projectSourceDirectory = path.join(rootDirectory, 'projects', 'simplor', 'src');
const projectLibraryDirectory = path.join(projectSourceDirectory, 'lib');
const projectStylesDirectory = path.join(projectSourceDirectory, 'styles');
const publicApiFilePath = path.join(projectSourceDirectory, 'public-api.ts');
const publicApiPrefix = './lib';
const distributionDirectory = path.join(rootDirectory, 'dist', 'simplor');
const distributionStylesDirectory = path.join(distributionDirectory, 'styles');

module.exports = {
  rootDirectory,
  projectSourceDirectory,
  projectLibraryDirectory,
  projectStylesDirectory,
  publicApiFilePath,
  publicApiPrefix,
  distributionDirectory,
  distributionStylesDirectory,
};
