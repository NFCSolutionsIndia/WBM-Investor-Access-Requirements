// Fixes a Next.js 16 static-export mismatch:
// The router fetches  __next.segment.__PAGE__.txt  (dots)
// but the build creates  __next.segment/__PAGE__.txt  (nested dir).
// This script copies every nested RSC payload file to the flat dotted name
// expected by the router, so client-side navigation works on GitHub Pages.
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

function flattenNextDir(srcDir, pageDir, prefix) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const fullPath = path.join(srcDir, entry.name);
    const flatName = `${prefix}.${entry.name}`;
    if (entry.isFile()) {
      const dest = path.join(pageDir, flatName);
      if (!fs.existsSync(dest)) fs.copyFileSync(fullPath, dest);
    } else if (entry.isDirectory()) {
      flattenNextDir(fullPath, pageDir, flatName);
    }
  }
}

function walkPageDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.name === '_next') continue;
    if (entry.name.startsWith('__next.')) {
      flattenNextDir(fullPath, dir, entry.name);
    } else {
      walkPageDirs(fullPath);
    }
  }
}

walkPageDirs(outDir);

// Clean up large unoptimized video files to prevent GitHub file size violations during deploy
const filesToExclude = [
  path.join(outDir, 'media', 'WhatweDo.mp4'),
  path.join(outDir, 'media', 'Investor22.mp4')
];

for (const file of filesToExclude) {
  if (fs.existsSync(file)) {
    console.log(`Excluding large video file from deploy bundle: ${file}`);
    fs.unlinkSync(file);
  }
}
