const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const RESOURCES_PATH = path.resolve(__dirname, '../resources');
const FABLEPRESS_VENDOR_PATH = path.resolve(__dirname, '../../FablePress/public/assets/vendor/fablepress-editor');

if (!fs.existsSync(RESOURCES_PATH)) {
  fs.mkdirSync(RESOURCES_PATH, { recursive: true });
}
if (!fs.existsSync(path.join(RESOURCES_PATH, 'themes'))) {
  fs.mkdirSync(path.join(RESOURCES_PATH, 'themes'), { recursive: true });
}

console.log('Building packages...');
try {
  execSync('npm run build:all', { stdio: 'inherit', cwd: path.resolve(__dirname, '../') });
} catch (error) {
  console.error('Error during npm run build:all:', error.message);
  process.exit(1);
}

const filesToSync = [
  // Core Editor
  { src: 'apps/editor/dist/cdn/zen-composer-all.min.js', dest: 'zen-composer-all.min.js' },
  { src: 'apps/editor/dist/cdn/zen-composer.min.css', dest: 'zen-composer.min.css' },
  // Plugins
  { 
    src: 'plugins/color-syntax/dist/cdn/zenComposer-zen-composer-plugin-color-syntax.min.js', 
    dest: 'zen-composer-plugin-color-syntax.min.js' 
  },
  { 
    src: 'plugins/table-merged-cell/dist/cdn/zenComposer-zen-composer-plugin-table-merged-cell.min.js', 
    dest: 'zen-composer-plugin-table-merged-cell.min.js' 
  },
  { 
    src: 'plugins/code-syntax-highlight/dist/cdn/zenComposer-zen-composer-plugin-code-syntax-highlight-all.min.js', 
    dest: 'zen-composer-plugin-code-syntax-highlight-all.min.js' 
  }
];

console.log('Copying built assets to ZenComposer/resources...');
filesToSync.forEach(({ src, dest }) => {
  const srcPath = path.resolve(__dirname, '../', src);
  const destPath = path.join(RESOURCES_PATH, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Synced to resources: ${dest}`);
  } catch (err) {
    console.error(`Failed to copy ${src} to resources/${dest}:`, err.message);
  }
});

// Optionally, sync to FablePress if it exists (for local development ease)
if (fs.existsSync(FABLEPRESS_VENDOR_PATH)) {
  console.log('Syncing all resources to FablePress...');
  
  // Create themes folder in FablePress if it doesn't exist
  if (!fs.existsSync(path.join(FABLEPRESS_VENDOR_PATH, 'themes'))) {
    fs.mkdirSync(path.join(FABLEPRESS_VENDOR_PATH, 'themes'), { recursive: true });
  }

  // Copy everything from resources/ to FablePress
  const copyRecursive = (srcDir, destDir) => {
    const items = fs.readdirSync(srcDir);
    items.forEach(item => {
      const srcItem = path.join(srcDir, item);
      const destItem = path.join(destDir, item);
      if (fs.statSync(srcItem).isDirectory()) {
        if (!fs.existsSync(destItem)) {
          fs.mkdirSync(destItem, { recursive: true });
        }
        copyRecursive(srcItem, destItem);
      } else {
        fs.copyFileSync(srcItem, destItem);
        console.log(`Synced to FablePress: ${path.relative(RESOURCES_PATH, srcItem)}`);
      }
    });
  };

  copyRecursive(RESOURCES_PATH, FABLEPRESS_VENDOR_PATH);
}

console.log('Sync complete!');
