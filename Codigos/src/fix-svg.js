const fs = require('fs');
const path = require('path');

const replacements = {
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'clip-path': 'clipPath',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity'
};

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let originalContent = fs.readFileSync(fullPath, 'utf8');
      let content = originalContent;
      for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key + '=', 'g');
        content = content.replace(regex, value + '=');
      }
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Done SVG properties fix!');
