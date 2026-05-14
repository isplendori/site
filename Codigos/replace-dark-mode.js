const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

const replacements = [
  // Backgrounds
  { search: /\bbg-white(?!\s*dark:bg-)/g, replace: 'bg-white dark:bg-[#0A0A0A]' },
  { search: /\bbg-\[#F1F2F4\](?!\s*dark:bg-)/g, replace: 'bg-[#F1F2F4] dark:bg-[#15151B]' },
  { search: /\bbg-\[#12141B\](?!\s*dark:bg-)/g, replace: 'bg-[#12141B] dark:bg-[#F1F2F4]' },
  { search: /\bbg-\[#202026\](?!\s*dark:bg-)/g, replace: 'bg-[#202026] dark:bg-white' },

  // Texts
  { search: /\btext-\[#202026\](?!\s*dark:text-)/g, replace: 'text-[#202026] dark:text-[#F1F2F4]' },
  { search: /\btext-\[#12141B\](?!\s*dark:text-)/g, replace: 'text-[#12141B] dark:text-[#F1F2F4]' },
  { search: /\btext-\[#727B8E\](?!\s*dark:text-)/g, replace: 'text-[#727B8E] dark:text-[#A0A8B8]' },
  { search: /\btext-white(?!\s*dark:text-)/g, replace: 'text-white dark:text-[#12141B]' },

  // Borders
  { search: /border-\[rgba\(114,123,142,0\.1\)\](?!\s*dark:border-)/g, replace: 'border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)]' },
  { search: /border-\[rgba\(114,123,142,0\.28\)\](?!\s*dark:border-)/g, replace: 'border-[rgba(114,123,142,0.28)] dark:border-[rgba(255,255,255,0.2)]' },

  // Fills & Strokes
  { search: /\bfill-\[#202026\](?!\s*dark:fill-)/g, replace: 'fill-[#202026] dark:fill-[#F1F2F4]' },
  { search: /\bfill-white(?!\s*dark:fill-)/g, replace: 'fill-white dark:fill-[#12141B]' },
  { search: /\bstroke-\[#1A1A20\](?!\s*dark:stroke-)/g, replace: 'stroke-[#1A1A20] dark:stroke-[#F1F2F4]' },
  { search: /\bstroke-\[#202026\](?!\s*dark:stroke-)/g, replace: 'stroke-[#202026] dark:stroke-[#F1F2F4]' },
  
  // Hovers
  { search: /\bgroup-hover:text-white(?!\s*dark:group-hover:text-)/g, replace: 'group-hover:text-white dark:group-hover:text-[#12141B]' },
];

let totalChanges = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    totalChanges++;
  }
});

console.log(`Total files updated: ${totalChanges}`);
