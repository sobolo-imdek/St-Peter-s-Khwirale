const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../src/data/content.js');
let content = fs.readFileSync(contentPath, 'utf8');

// Regex to find the gallery array
// Matches: gallery: [ ... ]
const galleryRegex = /gallery:\s*\[([\s\S]*?)\]/;
const match = content.match(galleryRegex);

if (match) {
    const galleryContent = match[1];
    // Split by comma, trim, filter empty
    const items = galleryContent.split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0 && (s.startsWith('"') || s.startsWith("'")));

    const newItems = items.map((item, index) => {
        const src = item.replace(/['"]/g, '');
        let alt = "St Peter's Khwirale School Gallery Image";
        if (src.includes('players')) alt = "St Peter's Khwirale Sports Team";

        return `{ src: "${src}", alt: "${alt}" }`;
    });

    const newGalleryBlock = `gallery: [\n        ${newItems.join(',\n        ')}\n    ]`;

    const newContent = content.replace(galleryRegex, newGalleryBlock);
    fs.writeFileSync(contentPath, newContent);
    console.log('Successfully converted gallery to objects.');
} else {
    console.error('Could not find gallery array.');
}
