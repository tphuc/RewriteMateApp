import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import React, { FC } from 'react';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { StyledImage } from './styled-image';
import { AppStoreBtn } from './appstore-btn';


interface TableProps {
	data: {
		headers: string[];
		rows: string[][];
	};
}

const Table: FC<TableProps> = ({ data }) => {
	const headers = data?.headers?.map?.((header, index) => (
		<th key={index} >{header}</th>
	));
	const rows = data?.rows?.map?.((row, index) => (
		<tr key={index} >
			{row.map?.((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	));

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

interface CustomLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const CustomLink: FC<CustomLinkProps> = (props) => {
	const { href, children, ...rest } = props;

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...rest} className='cursor-pointer'>
				{children}
			</Link>
		);
	}

	if (href.startsWith('#')) {
		return <a {...rest}>{children}</a>;
	}

	return (
		<a target="_blank" rel="noopener noreferrer" className='cursor-pointer' href={href} {...rest}>
			{children}
		</a>
	);
};

const Paragraph: FC<{ children: React.ReactNode }> = ({ children }) => (
	<p className="leading-7 my-2">{children}</p>
);

const CustomHR: FC = () => (
	<hr className="my-8 border-t border-muted" />
);

const CustomBlockquote: FC<{ children: React.ReactNode }> = ({ children }) => (
	<blockquote className="border-l-4 border-muted pl-4 text-orange-300/80">
		{children}
	</blockquote>
);

function RoundedImage(props: any) {
	return (
		<Dialog>
			<DialogTrigger asChild>

				<img
					width={800}
					height={600}
					className="rounded-md cursor-pointer bg-border w-full max-w-[90vw] rounded-md border shadow-md drop-shadow-lg"

					{...props}
					alt={props?.alt || ''}
					style={{ objectFit: 'cover', ...props.style }}
				/>

			</DialogTrigger>

			<DialogContent className="max-w-[95vw] max-h-[95vh] p-0 flex flex-col items-center justify-center bg-transparent shadow-none border-none">
				<DialogTitle className='text-sm'>{props.alt}</DialogTitle>
				<img
					src={props.src}
					alt={props.alt || ''}
					width={1200}
					height={900}
					className="rounded-md max-h-[90vh] w-auto h-auto"
				/>
			</DialogContent>
		</Dialog>
	);
}

type ImageGridProps = {
	images: string[];
	alt?: string;
};

export function ImageGrid({ images, alt }: ImageGridProps) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{images.map((url, idx) => (
				<RoundedImage key={idx} src={url} alt={alt || ''} />
			))}
		</div>
	);
}

type ImageFlowProps = {
	images: string[];
	alt?: string;
};

function FlowImage({ src, alt }: { src: string; alt?: string }) {
	return (
		<Dialog >
			<DialogTrigger asChild>
				<div className="relative h-full flex-shrink-0 snap-center cursor-pointer">
					<StyledImage
						src={src}
						alt={alt || ""}
						width={440}
						style={{ width: "auto", height: 400 }}
						className="object-cover h-[300px] w-auto shadow-md drop-shadow-md"
					/>
				</div>
			</DialogTrigger>

			<DialogContent className="max-w-[95vw] max-h-[95vh] p-0 flex flex-col items-center justify-center bg-transparent shadow-none border-none">
				{alt && <DialogTitle className="text-sm mb-2">{alt}</DialogTitle>}
				<Image
					src={src}
					alt={alt || ""}
					width={1200}
					height={900}
					className="rounded-md max-h-[90vh] w-auto h-auto"
				/>
			</DialogContent>
		</Dialog>
	);
}

export function ImageFlow({ images, alt }: ImageFlowProps) {
	return (
		<div className='relative'>
				<div className="pointer-events-none
		absolute z-10 top-0 left-0 h-full w-full 
		" style={{
					boxShadow: `
            inset 20px 0 20px 0px #0a0a0aaa,
            inset -20px 0 20px 0px #0a0a0aaa
          `,
				}}/>

			{/* <div className="
		absolute z-10 top-0 right-0 h-full w-[4%] bg-gradient-to-l from-background via-20% via-background/70 to-transparent
		" /> */}
			<div className="
					flex overflow-x-auto gap-4 py-2 snap-x snap-mandatory px-2
					
				" >
				{images.map((url, idx) => (
					<FlowImage key={idx} src={url} alt={alt} />
				))}

			</div>
		</div>

	);
}


interface CodeProps extends React.HTMLAttributes<HTMLElement> {
	children: string;
}

const Code: FC<CodeProps> = ({ children, ...props }) => {
	const codeHTML = highlight(children);
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const slugify = (str: string): string => {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
		.replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

const createHeading = (level: number): FC<{ children: string }> => {
	const Heading: FC<{ children: string }> = ({ children }) => {
		const slug = slugify(children);
		return React.createElement(
			`h${level}`,
			{ id: slug, className: cn(`text-foreground mb-0 font-semibold tracking-tight`, level <= 2 ? 'mt-8' : 'mt-2') },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor text-foreground',
				}),
			],
			children
		);
	};

	Heading.displayName = `Heading${level}`;

	return Heading;
};



type CTAVariant = {
	title: string
	headline: string
	cta: string
	image: string
	gradient: {
		from: string
		to: string
	}
}

const RewriteMateCTA = ({
	variant = 0,
}: {
	variant?: number
}) => {
	const variants: CTAVariant[] = [
		{
			title: 'Write better everywhere',
			headline: 'Rewrite, rephrase, and refine text instantly without switching apps.',
			cta: "Download on App Store. It's Free",
			image: '/showcase1.webp',
			gradient: {
				from: '#3853e2',
				to: '#00cfcb',
			},
		},
		{
			title: 'No copy-paste. No app switching. Just better writing',
			headline: 'RewriteMate brings AI writing assistance directly into your keyboard.',
			cta: "Free download on the App Store",
			image: '/showcase1.webp',
			gradient: {
				from: '#7c3aed',
				to: '#ec4899',
			},
		},
		{
			title: 'Sound clear, natural, and confident in every message.',
			headline: 'Polish emails, chats, and posts with an AI keyboard built for real communication.',
			cta: "Free download on the App Store",
			image: '/showcase1.webp',
			gradient: {
				from: '#0f766e',
				to: '#22d3ee',
			},
		},
		{
			title: 'An AI keyboard that adapts to your writing style.',
			headline: 'Create custom prompts and rewrite text your way—inside any app.',
			cta: "Get RewriteMate on the App Store",
			image: '/showcase2.webp',
			gradient: {
				from: '#1e293b',
				to: '#334155',
			},
		},
		{
			title: 'One keyboard for rewriting, grammar, tone, and translation.',
			headline: 'Improve clarity, fix mistakes, and adjust tone in seconds on iOS.',
			cta: "Download on App Store. It's Free",
			image: '/showcase2.webp',
			gradient: {
				from: '#3f6212',
				to: '#84cc16',
			},
		},
	]

	const current = variants[variant] ?? variants[0]

	return (
		<div
			style={{
				marginTop: 20,
				marginBottom: 20,
				background: `linear-gradient(135deg, ${current.gradient.from}, ${current.gradient.to})`,
			}}
			className="rounded-2xl p-4 md:p-6 space-y-2"
		>
		
				<h3 style={{margin:0}} className="text-2xl tracking-tighter font-semibold text-white">
					{current.title}
				</h3>

				<p style={{margin:0}} className="text-white/80">
					{current.headline}
				</p>

				<a
					className="inline-flex mt-4"
					target="_blank"
					rel="noopener noreferrer"
					href="https://apps.apple.com/app/rewritemate-ai-keyboard/id6755306532"
				>
					<div className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 font-medium">
						{current.cta}
					</div>
				</a>

		</div>
	)
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	img: RoundedImage,
	a: CustomLink,
	code: Code,
	Table,
	hr: CustomHR,
	blockquote: CustomBlockquote,
	p: Paragraph,
	ImageGrid,
	ImageFlow,
	RewriteMateCTA
};

export const CustomMDX: FC<MDXRemoteProps> = (props) => {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
			options={{
				mdxOptions: {
					remarkPlugins: [remarkGfm], // Enable GFM for tables
				},
			}}
		/>
	);
};