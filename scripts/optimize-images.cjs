const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const TARGET_DIR = path.join(__dirname, '../public/images');
const QUALITY = 80;
const MAX_WIDTH = 1920;

// Supported extensions
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
    console.log(`Scanning ${TARGET_DIR} for images...`);

    // Use glob to find all matching files recursively
    const files = glob.sync(`${TARGET_DIR}/**/*+(${EXTENSIONS.join('|')})`);

    console.log(`Found ${files.length} images to check.`);

    let processedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const dir = path.dirname(file);
        const name = path.basename(file, ext);
        const targetFile = path.join(dir, `${name}.webp`);

        // Check if WebP version already exists
        if (fs.existsSync(targetFile)) {
            // console.log(`Skipping ${name}${ext} - WebP already exists`);
            skippedCount++;
            continue;
        }

        try {
            console.log(`Optimizing: ${name}${ext}`);

            const image = sharp(file);
            const metadata = await image.metadata();

            let pipeline = image.webp({ quality: QUALITY });

            // Resize if too wide
            if (metadata.width > MAX_WIDTH) {
                console.log(`  -> Resizing from ${metadata.width}px to ${MAX_WIDTH}px`);
                pipeline = pipeline.resize({ width: MAX_WIDTH });
            }

            await pipeline.toFile(targetFile);
            processedCount++;
            // console.log(`  -> Saved to ${path.basename(targetFile)}`);

        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
            errorCount++;
        }
    }

    console.log('------------------------------------------------');
    console.log(`Optimization Complete!`);
    console.log(`Processed: ${processedCount}`);
    console.log(`Skipped:   ${skippedCount}`);
    console.log(`Errors:    ${errorCount}`);
    console.log('------------------------------------------------');
}

optimizeImages();
