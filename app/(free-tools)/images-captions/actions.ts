'use server'

import { promises as fs } from 'fs'
import { OpenRouter } from '@openrouter/sdk'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function generateTaglines(options?: {
  count?: number
  style?: string
  userGuidance?: string
}) {
  const count = options?.count || 10

  const [playbookContent, productContent, referencesContent] = await Promise.all([
    fs.readFile(path.join(__dirname, 'playbook.md'), 'utf-8').catch(() => ''),
    fs.readFile(path.join(__dirname, 'product-ios.md'), 'utf-8').catch(() => ''),
    fs.readFile(path.join(__dirname, 'references.md'), 'utf-8').catch(() => ''),
  ])

  if (!playbookContent) {
    throw new Error('Failed to load playbook')
  }

  const styleInstruction = options?.style
    ? `Generate all ${count} taglines in the "${options.style}" style.`
    : `Split the ${count} taglines across styles: 30% Apple-style, 25% emotional, 25% bold memorable, 20% startup-style.`

  const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! })

  const systemContent = `You are an elite brand copywriter who has created taglines for Apple, Stripe, Notion, Airbnb, Slack, and Linear. Your task is to create short, memorable product taglines for RewriteMate.

${playbookContent}

Product to write for:
${productContent}

Reference taglines for style inspiration:
${referencesContent}

${styleInstruction}

Additional requirement: For each tagline, describe the exact image, photo, or graphic style that should accompany it. Think App Store screenshot compositions, billboard visuals, or hero section imagery.

CRITICAL: You MUST return ONLY a valid JSON array and nothing else. Do not wrap in markdown code fences, do not add any explanations or extra text.

Return a JSON array of exactly ${count} tagline objects. Each object must have:
- "id": unique number (1-${count})
- "tagline": the 2-5 word tagline
- "style": which style this belongs to (Apple-style, startup-style, emotional, bold memorable)
- "memorability": score 1-10
- "clarity": score 1-10
- "brandability": score 1-10
- "visualSuggestion": describe the exact image or graphic that should accompany this tagline (photography style, color palette, composition, typography treatment)

Example format:
[
  {
    "id": 1,
    "tagline": "Writing, Refined",
    "style": "Apple-style",
    "memorability": 9,
    "clarity": 8,
    "brandability": 9,
    "visualSuggestion": "Minimal product photography — an iPhone keyboard close-up on a clean white desk, soft natural lighting, the tagline set in San Francisco字体 centered below in thin weight. Muted warm tones."
  }
]`

  let userContent = `Generate ${count} taglines for RewriteMate image captions.`

  if (options?.style?.trim()) {
    userContent += `\n\nStyle focus: ${options.style.trim()}`
  }

  if (options?.userGuidance?.trim()) {
    userContent += `\n\nDirection:\n${options.userGuidance.trim()}`
  }

  const response = await client.chat.send({
    chatRequest: {
      model: 'google/gemma-4-31b-it:free',
      messages: [
        { role: 'system', content: systemContent },
        { role: 'user', content: userContent },
      ],
      temperature: 1.5,
    },
  })

  const result = response.choices?.[0]?.message?.content
  return result?.trim() || '[]'
}

export async function generateCaptions(options?: {
  count?: number
  style?: string
  platform?: string
  userGuidance?: string
}) {
  const count = options?.count || 8

  const [playbookContent, productContent, referencesContent] = await Promise.all([
    fs.readFile(path.join(__dirname, 'playbook.md'), 'utf-8').catch(() => ''),
    fs.readFile(path.join(__dirname, 'product-ios.md'), 'utf-8').catch(() => ''),
    fs.readFile(path.join(__dirname, 'references.md'), 'utf-8').catch(() => ''),
  ])

  if (!playbookContent) {
    throw new Error('Failed to load playbook')
  }

  const platformContext = options?.platform
    ? `Optimize these captions for ${options.platform}.`
    : 'Design these for broad use — App Store, social media, ads, and landing pages.'

  const styleInstruction = options?.style
    ? `All ${count} captions should use the "${options.style}" approach.`
    : `Mix styles across the ${count} captions: Problem→Solution, Feature-Focused, Productivity Angle, Human & Relatable, Premium/Apple-Style, Social Media Hooks, and Conversion-Focused.`

  const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! })

  const systemContent = `You are a senior creative director specializing in product marketing copy for mobile apps. You write captions that convert — for App Store screenshots, social media image posts, ads, and landing pages.

Product to write for:
${productContent}

Tagline playbook (study the principles for caption writing):
${playbookContent}

Reference captions for style inspiration:
${referencesContent}

${platformContext}

${styleInstruction}

Rules for captions:
- 1-3 sentences maximum
- Never describe features directly — focus on outcome, feeling, or identity
- Sound premium and confident but never hypey
- Avoid: "revolutionary", "cutting-edge", "powerful", "next-generation", "seamless", "game-changing"
- Each caption should feel like it could appear next to a product image on the App Store or in a social media ad
- For each caption, describe the EXACT image or visual that should accompany it

CRITICAL: You MUST return ONLY a valid JSON array and nothing else. Do not wrap in markdown code fences, do not add any explanations or extra text.

Return a JSON array of exactly ${count} caption objects. Each object must have:
- "id": unique number (1-${count})
- "caption": the caption text (1-3 sentences)
- "style": which caption style this belongs to
- "imageDescription": detailed description of the image or visual that should accompany this caption — photography style, composition, colors, what's in frame
- "useCase": where this caption-image pair works best (e.g., "App Store screenshot A", "Instagram image post", "Facebook ad", "Landing page hero", "Twitter image tweet")

Example format:
[
  {
    "id": 1,
    "caption": "Stop rewriting the same sentence five times. RewriteMate fixes it in one tap.",
    "style": "Problem → Solution",
    "imageDescription": "Split-screen comparison: left side shows a cluttered Notes app with the same sentence rewritten 5 times, right side shows RewriteMate keyboard with the polished version. Clean white background, iOS screenshot style, blue accent highlights.",
    "useCase": "App Store screenshot A / Instagram carousel slide 1"
  }
]`

  let userContent = `Generate ${count} image captions for RewriteMate.`

  if (options?.style?.trim()) {
    userContent += `\n\nStyle focus: ${options.style.trim()}`
  }

  if (options?.platform?.trim()) {
    userContent += `\n\nPlatform: ${options.platform.trim()}`
  }

  if (options?.userGuidance?.trim()) {
    userContent += `\n\nDirection:\n${options.userGuidance.trim()}`
  }

  const response = await client.chat.send({
    chatRequest: {
      model: 'google/gemma-4-31b-it:free',
      messages: [
        { role: 'system', content: systemContent },
        { role: 'user', content: userContent },
      ],
      temperature: 1.5,
    },
  })

  const result = response.choices?.[0]?.message?.content
  return result?.trim() || '[]'
}
