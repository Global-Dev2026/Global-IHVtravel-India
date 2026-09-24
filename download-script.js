const fs = require('fs');
const path = require('path');
const https = require('https');

const srcDir = path.join(__dirname, 'src');
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }

      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const urlMap = new Map();

async function run() {
  const files = walk(srcDir);
  const regex = /https:\/\/(?:images\.unsplash\.com|www\.pexels\.com)[^\s"'`)]+?(?=["'`\)])/g;
  
  let i = 1;
  let videoI = 1;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const matches = content.match(regex);
    
    if (matches) {
      for (const url of matches) {
        if (!urlMap.has(url)) {
          const isVideo = url.includes('pexels.com/video');
          const ext = isVideo ? '.mp4' : '.jpg';
          const filename = isVideo ? `video-${videoI++}${ext}` : `image-${i++}${ext}`;
          
          urlMap.set(url, {
            localPath: `/images/${filename}`,
            destPath: path.join(publicImagesDir, filename)
          });
        }
      }
    }
  }

  console.log(`Found ${urlMap.size} unique URLs to download.`);

  const successfulUrls = new Set();

  for (const [url, info] of urlMap.entries()) {
    console.log(`Downloading ${url} -> ${info.localPath}`);
    try {
      if (!fs.existsSync(info.destPath)) {
          await download(url, info.destPath);
      }
      successfulUrls.add(url);
    } catch (e) {
      console.error(`Skipping ${url}: ${e.message}`);
    }
  }

  console.log('Replacing URLs in files...');
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    for (const [url, info] of urlMap.entries()) {
      if (successfulUrls.has(url) && content.includes(url)) {
        content = content.split(url).join(info.localPath);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }

  console.log('Done!');
}

run().catch(console.error);
