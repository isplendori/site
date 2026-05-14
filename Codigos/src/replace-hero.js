const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'assets', 'images', 'novo-hero.txt');
const outputPath = path.join(__dirname, 'src', 'components', 'atoms', 'HeroArchitecture', 'index.tsx');

let svg = fs.readFileSync(inputPath, 'utf-8');

// Replace standard dashed SVG properties with camelCase for React
const propsToReplace = [
  'clip-path',
  'stroke-linecap',
  'stroke-linejoin',
  'fill-rule',
  'clip-rule',
  'stroke-width',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-dasharray',
  'stroke-dashoffset',
  'font-family',
  'font-size',
  'font-weight',
  'text-anchor',
  'alignment-baseline',
  'vector-effect',
  'stop-color',
  'stop-opacity'
];

propsToReplace.forEach(prop => {
  const camelCase = prop.replace(/-([a-z])/g, g => g[1].toUpperCase());
  const regex = new RegExp(prop + '(?=>|=)', 'g');
  svg = svg.replace(regex, camelCase);
});

// Inject className into the <svg> tag and remove hardcoded width/height
svg = svg.replace(/<svg([^>]+)>/, (match, p1) => {
  let inner = p1.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '');
  return `<svg className={cn("pointer-events-none select-none w-full h-auto", className)} ${inner}>`;
});

const tsxContent = `import { cn } from "@/lib/utils";

export interface HeroArchitectureProps {
  className?: string;
}

const HeroArchitecture = ({ className }: HeroArchitectureProps) => {
  return (
    ${svg}
  );
};

export default HeroArchitecture;
`;

fs.writeFileSync(outputPath, tsxContent, 'utf-8');
console.log("Successfully generated HeroArchitecture component.");
