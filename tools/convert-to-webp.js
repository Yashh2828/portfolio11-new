const fs = require('fs');
const path = require('path');

async function convert() {
  const sharp = require('sharp');
  const sequenceDir = path.join(__dirname, '..', 'public', 'sequence');

  console.log('Reading files from:', sequenceDir);
  const files = fs.readdirSync(sequenceDir).filter(f => f.endsWith('.png'));

  console.log(`Found ${files.length} PNG frames to convert to WebP...`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(sequenceDir, file);
    const outputPath = path.join(sequenceDir, file.replace(/\.png$/, '.webp'));

    const originalStats = fs.statSync(inputPath);
    totalOriginalSize += originalStats.size;

    await sharp(inputPath)
      .webp({ quality: 80, effort: 4 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    totalNewSize += newStats.size;

    if ((i + 1) % 20 === 0 || i === files.length - 1) {
      console.log(`Converted ${i + 1}/${files.length} frames...`);
    }
  }

  const origMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const newMB = (totalNewSize / (1024 * 1024)).toFixed(2);
  const savings = ((1 - totalNewSize / totalOriginalSize) * 100).toFixed(1);

  console.log('--------------------------------------------------');
  console.log(`Conversion completed!`);
  console.log(`Original total size: ${origMB} MB`);
  console.log(`New WebP total size: ${newMB} MB`);
  console.log(`Total space saved:   ${savings}% reduction!`);
  console.log('--------------------------------------------------');
}

convert().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
