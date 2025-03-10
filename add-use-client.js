const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Patterns to identify React hooks
const hookPatterns = [
  /useState/,
  /useEffect/,
  /useRef/,
  /useContext/,
  /useReducer/,
  /useCallback/,
  /useMemo/,
  /useLayoutEffect/,
  /useImperativeHandle/,
  /useDebugValue/,
  /framer-motion/,
  /motion\./,
  /useRouter/,
  /usePathname/,
  /useSearchParams/
];

// File extensions to process
const extensions = ['.jsx', '.js', '.tsx', '.ts'];

// Directories to exclude
const excludeDirs = ['node_modules', '.next', '.git'];

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Skip if already has "use client" directive
    if (content.includes('"use client"') || content.includes("'use client'")) {
      console.log(`Skipping ${filePath} - already has "use client" directive`);
      return;
    }
    
    // Check if file contains any hooks
    const hasHooks = hookPatterns.some(pattern => pattern.test(content));
    
    if (hasHooks) {
      console.log(`Adding "use client" directive to ${filePath}`);
      const updatedContent = `"use client";\n\n${content}`;
      await writeFile(filePath, updatedContent, 'utf8');
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

async function walkDir(dir) {
  try {
    const entries = await readdir(dir);
    
    for (const entry of entries) {
      if (excludeDirs.includes(entry)) continue;
      
      const fullPath = path.join(dir, entry);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        await walkDir(fullPath);
      } else if (stats.isFile() && extensions.includes(path.extname(fullPath))) {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error);
  }
}

// Start processing from the src directory
const srcDir = path.join(__dirname, 'src');
walkDir(srcDir)
  .then(() => console.log('Done adding "use client" directives'))
  .catch(error => console.error('Error:', error));
