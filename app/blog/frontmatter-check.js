// validate-frontmatter.js
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

function validateFrontmatter(dir) {
  const mdxFiles = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));

  let hasError = false;

  mdxFiles.forEach(file => {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, "utf-8");

    const match = /^---\s*([\s\S]*?)\s*---/.exec(raw);
    if (!match) {
      console.error(`❌ No frontmatter found in ${file}`);
      hasError = true;
      return;
    }

    const block = match[1];
    try {
      const metadata = yaml.load(block);

      // Validate required fields
      const required = ["title", "publishedAt", "summary", "keywords"];
      for (const key of required) {
        if (!(key in metadata)) {
          console.error(`⚠️  Missing "${key}" in ${file}`);
          hasError = true;
        }
      }

      // Type check keywords
      if (metadata.keywords && !Array.isArray(metadata.keywords)) {
        console.error(`⚠️  "keywords" must be an array in ${file}`);
        hasError = true;
      }

    } catch (err) {
      console.error(`❌ Invalid YAML in ${file}:`, err.message);
      hasError = true;
    }
  });

  if (!hasError) {
    console.log("✅ All frontmatter valid!");
  } else {
    process.exit(1);
  }
}

// Run with: node validate-frontmatter.js ./app/blog/markdown
const targetDir = 'markdown';
if (!targetDir) {
  console.error("Usage: node validate-frontmatter.js <folder>");
  process.exit(1);
}

validateFrontmatter(path.resolve(targetDir));