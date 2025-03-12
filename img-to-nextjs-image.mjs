import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to check if a file should be processed
const shouldProcessFile = (file) => {
  const extensions = ['.js', '.jsx', '.tsx', '.mdx'];
  return extensions.some(ext => file.endsWith(ext));
};

// Function to add Next.js Image import if not present
const addImageImport = (content) => {
  if (!content.includes("import Image from 'next/image'")) {
    return "import Image from 'next/image';\n" + content;
  }
  return content;
};

// Function to convert img tags to Image components
const convertImgToNextImage = (content) => {
  // Replace <img> tags with <Image>
  let newContent = content.replace(
    /<img([^>]*)>/g,
    (match, attributes) => {
      // Convert src to required props
      attributes = attributes.replace(/src="([^"]*)"/, (m, src) => `src="${src}" width={500} height={300}`);
      return `<Image${attributes} priority={false} />`;
    }
  );

  // Add Image import if needed
  if (newContent !== content) {
    newContent = addImageImport(newContent);
  }

  return newContent;
};

// Function to process a file
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const newContent = convertImgToNextImage(content);
    
    if (content !== newContent) {
      await fs.writeFile(filePath, newContent, 'utf-8');
      console.log(`✅ Processed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
    return false;
  }
}

// Function to recursively process directories
async function processDirectory(directory) {
  const files = await fs.readdir(directory);
  let changedFiles = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      changedFiles += await processDirectory(fullPath);
    } else if (stat.isFile() && shouldProcessFile(file)) {
      const changed = await processFile(fullPath);
      if (changed) changedFiles++;
    }
  }

  return changedFiles;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('🔍 Starting conversion process...');

try {
  const changedFiles = await processDirectory(srcDir);
  console.log(`\n✨ Conversion complete! Modified ${changedFiles} files.`);
} catch (error) {
  console.error('❌ Error during conversion:', error);
} 