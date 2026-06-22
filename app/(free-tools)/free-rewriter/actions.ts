'use server'

import { OpenRouter } from '@openrouter/sdk'

const TONE_INSTRUCTIONS: Record<string, string> = {
  professional: 'Rewrite this text in a professional, polished tone. Make it sound confident, clear, and appropriate for a business or work context.',
  casual: 'Rewrite this text in a casual, conversational tone. Make it sound natural and friendly, like talking to a friend.',
  friendly: 'Rewrite this text in a warm, friendly tone. Make it approachable and kind while staying clear.',
  formal: 'Rewrite this text in a formal, academic tone. Use proper language suitable for official documents or formal correspondence.',
  creative: 'Rewrite this text in a creative, engaging tone. Make it vivid and interesting while preserving the original meaning.',
}

export async function rewriteText(
  text: string,
  options?: { tone?: string; userGuidance?: string }
) {
  if (!text.trim()) {
    return ''
  }

  const tone = options?.tone || 'professional'
  const toneInstruction = TONE_INSTRUCTIONS[tone] || TONE_INSTRUCTIONS.professional

  const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! })

  const systemContent = `You are a professional writing assistant. Your job is to rewrite text according to the user's requested tone and style.

Rules:
- Preserve the original meaning and key information
- Fix any grammar or spelling errors
- Keep the same length unless the tone change naturally adjusts it
- Do not add information that wasn't in the original
- Return ONLY the rewritten text — no explanations, no quotes, no prefixes
- Do not wrap the response in markdown or quotes`

  let userContent = `${toneInstruction}\n\nText to rewrite:\n${text}`

  if (options?.userGuidance?.trim()) {
    userContent += `\n\nAdditional guidance: ${options.userGuidance.trim()}`
  }

  const response = await client.chat.send({
    chatRequest: {
      model: 'google/gemma-4-31b-it:free',
      messages: [
        { role: 'system', content: systemContent },
        { role: 'user', content: userContent },
      ],
      temperature: 1.0,
    },
  })

  const result = response.choices?.[0]?.message?.content
  return result?.trim() || ''
}
