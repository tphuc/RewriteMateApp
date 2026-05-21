const fs = require('fs');
const path = require('path');

// Slugify the title for filename
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')    // Remove special characters
    .replace(/[\s_-]+/g, '-')    // Replace spaces/underscores with -
    .replace(/^-+|-+$/g, '');    // Trim leading/trailing dashes
}

// Limit slug to 100 characters max (excluding extension)
function limitSlug(slug, maxLength = 100) {
  return slug.length <= maxLength
    ? slug
    : slug.slice(0, maxLength);
}

// Extract title from the first 5 lines
function extractTitle(lines) {
  for (let line of lines) {
    if (line.trim().startsWith('title:')) {
      const match = line.match(/title:\s*['"](.+?)['"]/);

      if (match) {
        return match[1];
      }
    }
  }

  return null;
}

const folderPath = path.join(__dirname, 'markdown');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Failed to read folder:', err);
    return;
  }

  console.log(files);

  files.forEach(file => {
    const ext = path.extname(file);

    // Only process .md and .mdx
    if (ext !== '.md' && ext !== '.mdx') {
      return;
    }

    // Ignore files whose current filename is already >= 10 chars
    const currentName = path.basename(file, ext);

    if (currentName.length >= 10) {
      console.log(`Ignored: ${file}`);
      return;
    }

    const fullPath = path.join(folderPath, file);

    const stream = fs.createReadStream(fullPath, {
      encoding: 'utf8'
    });

    let buffer = '';

    stream.on('data', chunk => {
      buffer += chunk;

      const lines = buffer.split('\n');

      // Stop early after enough content
      if (lines.length >= 5 || chunk.includes('---')) {
        stream.destroy();

        const firstFive = lines.slice(0, 5);

        const title = extractTitle(firstFive);

        if (!title) {
          console.warn(`No title found in ${file}`);
          return;
        }

        let slug = slugify(title);

        slug = limitSlug(slug, 100);

        const newFilename = `${slug}.mdx`;
        const newPath = path.join(folderPath, newFilename);

        // Skip if filename already matches
        if (file === newFilename) {
          console.log(`Already correct: ${file}`);
          return;
        }

        fs.rename(fullPath, newPath, err => {
          if (err) {
            console.error(
              `Error renaming ${file} to ${newFilename}:`,
              err
            );
          } else {
            console.log(`Renamed: ${file} → ${newFilename}`);
          }
        });
      }
    });

    stream.on('error', err => {
      console.error(`Error reading ${file}:`, err);
    });
  });
});