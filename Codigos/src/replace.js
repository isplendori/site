const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('font-itc-garamond-std')) {
        content = content.replace(/font-itc-garamond-std/g, 'font-instrument-serif');
        fs.writeFileSync(fullPath, content);
      }
      if (content.includes('itcGaramondStd.variable')) {
        content = content.replace(/itcGaramondStd\.variable/g, 'instrumentSerif.variable');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
