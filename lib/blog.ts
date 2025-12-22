import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
	colors?: string;
	image?: string;
	keywords: any; // now properly typed as array
	related?: any;
};

function parseFrontmatter(fileContent: string): {
	metadata: Metadata;
	content: string;
} {
	const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
	const match = frontmatterRegex.exec(fileContent);
	if (!match) {
		throw new Error('Invalid frontmatter');
	}

	const frontMatterBlock = match[1];
	const content = fileContent.replace(frontmatterRegex, '').trim();

	// Parse YAML to object
	let metadata: Metadata;
	try {
		metadata = yaml.load(frontMatterBlock) as Metadata;
	} catch (err) {
		throw new Error(`Error parsing frontmatter YAML: ${(err as Error).message}`);
	}

	return { metadata, content };
}

function getMDXFiles(dir: string): string[] {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function getMDXFilesOrderedByCreationTime(dir: string): string[] {
	return fs
		.readdirSync(dir)
		.filter((file) => path.extname(file) === '.mdx')
		.map((file) => ({
			file,
			birthtime: fs.statSync(path.join(dir, file)).birthtime,
		}))
		.sort((a, b) => a.birthtime.getTime() - b.birthtime.getTime())
		.map((fileObj) => fileObj.file);
}

function readMDXFile(filePath: string): {
	metadata: Metadata;
	content: string;
} {
	const rawContent = fs.readFileSync(filePath, 'utf-8');
	return parseFrontmatter(rawContent);
}

function getMDXData(
	dir: string
): { metadata: Metadata; slug: string; content: string }[] {
	const mdxFiles = getMDXFilesOrderedByCreationTime(dir);
	return mdxFiles.map((file) => {
		const filePath = path.join(dir, file);
		try {
			const { metadata, content } = readMDXFile(filePath);
			const slug = path.basename(file, path.extname(file));

			return { metadata, slug, content };
		} catch (e) {
			console.error(`❌ Failed to parse ${filePath}`);
			console.error("   Error:", (e as Error).message);

			// Optionally: dump first lines of the file for inspection
			const raw = fs.readFileSync(filePath, "utf-8").split("\n").slice(0, 10).join("\n");
			console.error("   File preview:\n" + raw);

			// Re-throw so build fails instead of returning undefined
			throw e;
		}
	});
}

export function getLastNBlogPosts(n: number): {
	metadata: Metadata;
	slug: string;
	content: string;
}[] {
	const allPosts = getMDXData(path.join(process.cwd(), 'app', 'blog', 'markdown'));
	return allPosts.slice(-n).reverse()
}

export function getBlogPosts(): {
	metadata: Metadata;
	slug: string;
	content: string;
}[] {
	return getMDXData(path.join(process.cwd(), 'app', 'blog', 'markdown'));
}

export function formatDate(date: string, includeRelative = false): string {
	const currentDate = new Date();
	if (!date.includes('T')) {
		date = `${date}T00:00:00`;
	}
	const targetDate = new Date(date);

	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
	const daysAgo = currentDate.getDate() - targetDate.getDate();

	let formattedDate = '';
	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo}y ago`;
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo}mo ago`;
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo}d ago`;
	} else {
		formattedDate = 'Today';
	}

	const fullDate = targetDate.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});

	if (!includeRelative) return fullDate;
	return `${fullDate} (${formattedDate})`;
}