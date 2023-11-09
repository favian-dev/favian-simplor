const fs = require('fs');
const path = require('path');
const { projectStylesDirectory, distributionStylesDirectory } = require('./common');

if (!fs.existsSync(distributionStylesDirectory)) {
  fs.mkdirSync(distributionStylesDirectory);
}

const contents = fs.readdirSync(projectStylesDirectory);

contents.forEach((content) => {
  const originalFile = path.join(projectStylesDirectory, content);
  const copyFile = path.join(distributionStylesDirectory, content);

  fs.copyFileSync(originalFile, copyFile);
});
