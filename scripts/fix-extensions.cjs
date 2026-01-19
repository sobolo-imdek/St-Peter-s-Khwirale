const fs = require('fs');
const path = require('path');
const glob = require('glob');

const TARGET_DIR = path.join(__dirname, '../public/images');

function fixExtensions() {
    console.log(`Scanning ${TARGET_DIR} for double extension files...`);

    const files = glob.sync(`${TARGET_DIR}/**/*.webp`);
    let renamedCount = 0;

    files.forEach(file => {
        const dir = path.dirname(file);
        const basename = path.basename(file);

        // Check for patterns like .JPG.webp, .jpg.webp, .png.webp
        if (basename.match(/\.(jpg|jpeg|png)\.webp$/i)) {
            const newName = basename.replace(/\.(jpg|jpeg|png)\.webp$/i, '.webp');
            const newPath = path.join(dir, newName);

            try {
                fs.renameSync(file, newPath);
                console.log(`Renamed: ${basename} -> ${newName}`);
                renamedCount++;
            } catch (err) {
                console.error(`Error renaming ${basename}:`, err.message);
            }
        }
    });

    console.log(`Fixed ${renamedCount} files.`);
}

fixExtensions();
