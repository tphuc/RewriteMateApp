'use server'

import { OpenRouter } from '@openrouter/sdk'

export async function checkGrammar(text: string) {
  if (!text.trim()) {
    return ''
  }

  const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! })

  const systemContent = `You are a professional grammar editor. Your job is to proofread and correct grammar, spelling, punctuation, and word choice in the provided text.

Rules:
- Fix all grammar, spelling, and punctuation errors
- Improve word choice and sentence flow where needed
- Preserve the original meaning, tone, and style
- Do not rewrite the text completely — only correct what needs fixing
- If the text is already correct, return it unchanged
- After the corrected text, add a newline and then a short "Changes made:" section listing what you fixed (e.g., "- Fixed comma splice", "- Corrected 'their' → 'there'")
- If no changes were needed, just return the original text unchanged
- Return ONLY the corrected text followed by the changes section — no explanations, no markdown`

  const response = await client.chat.send({
    chatRequest: {
      model: 'google/gemma-4-31b-it:free',
      messages: [
        { role: 'system', content: systemContent },
        { role: 'user', content: `Proofread and correct this text:\n\n${text}` },
      ],
      temperature: 0.3,
    },
  })

  const result = response.choices?.[0]?.message?.content
  return result?.trim() || ''
}
