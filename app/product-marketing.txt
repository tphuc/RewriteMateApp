# RewriteMate — Marketing Guide

> Marketing reference for RewriteMate: an AI-powered keyboard that rewrites, refines, and translates text directly inside any iOS/macOS app.

**Website:** [rewritemate.app](https://rewritemate.app)  
**App Store:** [apps.apple.com/app/rewritemate-ai-keyboard/id6755306532](https://apps.apple.com/app/rewritemate-ai-keyboard/id6755306532)  
**Contact:** hi@rewritemate.app  
**Social:** Instagram (@rewritemate.app), X (@rewritemateapp), Discord

---

## Table of Contents

1. [Overview](#overview)
2. [Positioning](#positioning)
3. [Target Audience & Personas](#target-audience--personas)
4. [Main Features (with UI Context)](#main-features-with-ui-context)
5. [Use Cases](#use-cases)
6. [Pricing & Plans](#pricing--plans)
7. [Competitive Landscape](#competitive-landscape)
8. [SEO Keywords](#seo-keywords)
9. [Key Messaging](#key-messaging)
10. [Screens & Visuals Reference](#screens--visuals-reference)

---

## Overview

RewriteMate is an **AI keyboard extension** for iOS (and macOS) that lets users rewrite, rephrase, grammar-check, translate, and generate text directly inside any app — without copy-pasting or switching contexts. It ships with 14+ built-in commands (Proofread, Paraphrase, Change Tone, Translate, etc.) and allows users to create fully custom command prompts with custom icons and colors.

The product has two touchpoints:

| Module | Role | Tech |
|--------|------|------|
| **Main App** | Onboarding, login, command/folder management, AI model selection, subscriptions | SwiftUI |
| **Keyboard Extension** | The actual rewriting surface — works in any text field across any iOS app | SwiftUI top bar + UIKit keyboard rows |

**Key differentiator:** It is not a standalone app you paste text into. It lives *inside* the keyboard, so the rewrite happens right where the user is already typing.

---

## Positioning

### One-liner

> *The AI keyboard that rewrites, rephrases, and refines your text directly inside any app.*

### Elevator Pitch

RewriteMate eliminates the friction of switching between apps to improve your writing. Select text anywhere — Messages, Mail, Notes, Twitter, Notion, Safari — tap a command from the keyboard top bar, and watch the AI-enhanced result stream in. Then Insert, Replace, or Copy with one tap. Custom commands, custom folders, multi-model AI (GPT-4.1-nano, GPT-5-nano, Claude 3 Haiku, Gemini 2.5 Flash Lite), and translation to 100+ languages.

### Brand Voice

- **Tone:** Direct, confident, warm. No hype, no jargon.
- **Vibe:** "Your better AI writing assistant" — a tool for people who write every day and want to sound better without extra effort.
- **Taglines used:**
  - "Your Better AI Writing Assistant"
  - "Write With Confidence Everywhere"
  - "Instantly improve, rephrase, and refine any text"

---

## Target Audience & Personas

### Primary

| Persona | Pain Point | How RewriteMate Helps |
|---------|-----------|----------------------|
| **Professionals & office workers** | Emails and Slack messages need to be clear, professional, and mistake-free | Proofread, tone adjustment, shorten/expand, quick replies |
| **Non-native English speakers** | Writing confidently in English is a struggle | Grammar fix, paraphrase, translate, simplify |
| **Content creators & marketers** | Writing captions, posts, and copy repeatedly | Quick AI rewrites, tone switching, custom commands for recurring formats |
| **Students** | Essays, reports, applications need polished language | Proofread, expand, paraphrase, simplify |
| **Founders & operators** | High-stakes messages (investors, clients, team) need to land right | Refine tone, tighten wording, custom commands for common scenarios |

### Secondary

- **Freelancers & consultants** — client communication, proposals
- **Writers & journalists** — drafts, edits, headlines
- **Customer support agents** — polite replies, tone softening, quick canned responses
- **Social media managers** — captions, hashtags, replies at scale

---

## Main Features (with UI Context)

### 1. One-Tap Rewriting Commands

**What it is:** 14+ built-in AI commands accessible from the keyboard's top bar.

**How the user sees it:**

```
Keyboard top bar (default tab — Commands):

┌────┬──────────────────────────────────┬─────┐
│ ☰  │  [Proofread] [Paraphrase]       │ ✨  │
│ 📋 │  [Shorten]   [Simplify]         │Comp │
│ 🕐 │  [Change Tone] [Expand]         │ ose │
└────┴──────────────────────────────────┴─────┘
```

The user taps a command chip → AI processes the text at the cursor → result streams into a response overlay. Three action buttons appear: **Copy**, **Insert** (at cursor), **Replace** (current sentence).

**Available built-in commands:**
- Proofread, Paraphrase, Shorten, Expand, Simplify, Summarize
- Change Tone → Professional, Casual, Friendly, Formal, Creative
- Translate → English, Spanish, Chinese, Vietnamese, +100 languages
- Quick Reply, Polite Reply, Agree Reply, Decline Reply
- Add Hashtags

### 2. Custom Commands

**What it is:** Users create their own rewrite commands with custom icon, color, title, and AI prompt.

**How the user sees it:**
- Created in the main app via `AddRewriteTaskSheet` (tap "+" in `TaskRepoGridView`)
- Each task appears as a **colored gradient card** with an SF Symbol icon in the app's grid view
- In the keyboard extension, custom commands appear as chips alongside built-in ones
- Prompt can be tested before saving via the **Prompt Playground** (`TaskPromptPlaygroundSheet`)

### 3. Folder Organization

**What it is:** Commands can be grouped into folders for quick filtering.

**How the user sees it:**
- In the main app's `LibraryView`, a list of folders with icons and task counts
- 3 built-in folders: Rewrite, Translate, Reply
- Users can create, rename, reorder, and delete custom folders
- In the keyboard extension, a `FolderSwitch` row of pill-shaped filter chips sits above the command grid

### 4. Compose (AI Chat)

**What it is:** A free-form text input where users type custom instructions to the AI.

**How the user sees it:**

```
Compose tab:

┌──────────────────────────────────┐
│  Ask anything...           [X] ✨│
└──────────────────────────────────┘
```

- Custom text field with animated rotating gradient border and blinking caret
- User types "Make this sound more urgent" or "Rewrite this for a job application"
- The AI uses the instruction + the text at the cursor to produce a result

### 5. Translation

**What it is:** Translate selected text to 100+ languages without leaving the keyboard.

**How the user sees it:**
- Tab with a globe icon shows a horizontal row of language chips
- Languages configured in the main app via `TranslateLanguageGrid`
- Tap a language → instantly translates the current text

### 6. History

**What it is:** Previously used commands are saved for quick re-access.

**How the user sees it:**
- Clock icon tab shows a chip grid of recently used commands
- Persists across keyboard sessions via shared file storage

### 7. Multi-Model AI

**What it is:** Users can choose which AI model powers their rewrites.

**How the user sees it:**
- In Profile tab → Model → `ModelSelectionView`
- Options: GPT-4.1-nano (default), GPT-5-nano, Claude 3 Haiku, Gemini 2.5 Flash Lite
- Non-Pro users are locked to the default model; Pro users can freely switch

### 8. Text Response Actions

After AI processes the text, the response section shows:

| Action | UI Element | Behavior |
|--------|-----------|----------|
| **Back** | ← arrow | Dismisses response, returns to commands |
| **Copy** | 📋 clipboard icon | Copies full response to system clipboard, brief checkmark animation |
| **Insert** | ↩️ icon | Inserts response at current cursor position |
| **Replace** | ↪️ icon | Detects current sentence boundaries, replaces sentence with response |

### 9. iCloud Sync (Pro)

**What it is:** Commands and folders sync across devices via iCloud.

**How the user sees it:**
- No visible toggle — Pro users automatically get iCloud-backed file storage
- Tasks and folders are mirrored across iPhone, iPad, and Mac

### 10. Drag & Drop Reordering (Main App)

**What it is:** Tasks and folders can be reordered by drag-and-drop.

**How the user sees it:**
- Long-press a task tile in the grid to lift it, then drag to a new position
- Cross-folder drag supported (move a task from one folder to another)

### 11. Prompt Playground

**What it is:** Test a command's prompt against the AI before saving.

**How the user sees it:**
- Available inside `RewriteTaskDetailView` as an "Open Playground" button
- Opens a sheet with a preview of the AI response for the current prompt

---

## Use Cases

### Everyday Scenarios

| Scenario | How it works |
|----------|-------------|
| **Fix a typo-riddled text** | Select text → tap Proofread → Insert |
| **Make an email more professional** | Select text → tap Change Tone → Professional → Replace |
| **Shorten a rambling message** | Select text → tap Shorten → Replace |
| **Translate a message to Spanish** | Select text → tap Translate tab → Spanish → Replace |
| **Paraphrase to avoid repetition** | Select text → tap Paraphrase → Insert |
| **Add hashtags to a social post** | Select text → tap Add Hashtags → Copy |
| **Quickly agree to a plan** | Type nothing → tap Agree Reply → Insert |

### Workflow Examples

**Developer writing a PR description:**
1. Type rough notes in GitHub
2. Select text → tap "Proofread" → grammar is cleaned
3. Select again → tap "Simplify" → technical terms are clarified
4. Select again → tap "Custom: PR Format" → formatted into the team's template

**Customer support agent handling tickets:**
1. Type the factual answer
2. Tap "Polite Reply" → tone softens
3. Select → "Shorten" → cuts fluff
4. Tap Insert → done without ever leaving Zendesk/Intercom

**Non-native English speaker at work:**
1. Write an email in broken English
2. Tap "Proofread" → grammar corrected
3. Tap "Paraphrase" → flows naturally
4. Tap "Professional" → ready to send to the boss

---

## Pricing & Plans

| Plan | Price | Key Restrictions |
|------|-------|-----------------|
| **Free** | — | 1 AI model (GPT-4.1-nano), 100 custom tasks max, no model switching |
| **Monthly** | $5.99–$7.99 | Unlimited tasks, all models, iCloud sync |
| **Annual** | $49.99 | Same as Monthly, ~2 months free |
| **BYOK** | — | Bring your own API key |
| **Lifetime** | One-time | Same as annual, never subscribe again |

**RevenueCat** powers all subscription management. App Store prices vary by region.

---

## Competitive Landscape

### Direct Competitors

| App | Differentiator vs RewriteMate |
|-----|------------------------------|
| **Grammarly Keyboard** | More established, but requires full-access for free; RewriteMate's custom commands and tone switching are more flexible |
| **iGrammar** | Similar feature set; RewriteMate's custom commands + folders + multi-model gives more control |
| **ClarifierAI** | Fewer built-in commands, no folder organization |
| **AnyWrite Type AI** | More limited AI model selection, no custom commands |
| **CleverType** | Focused on auto-complete rather than explicit rewrite commands |
| **AI Keyboard Pro** | Less polished UI, fewer integration points |

### RewriteMate's Advantages

1. **Custom commands** — users can create their own with any prompt, icon, and color. No other keyboard offers this depth of customization.
2. **Multi-model** — supports OpenAI, Claude, and Gemini. User chooses.
3. **Folder organization** — commands grouped into folders with filter chips in the keyboard.
4. **Privacy-first** — zero data collection, text processed only on demand, never stored.
5. **Works in every app** — true iOS keyboard extension, not a standalone editor.
6. **Prompt Playground** — test prompts before saving.
7. **macOS support** — same extension model on Mac with Apple Silicon.

---

## SEO Keywords

### High-Volume

- AI keyboard iOS
- AI writing assistant
- rewrite text AI
- paraphrase tool
- grammar checker keyboard
- AI keyboard iPhone
- text rewriter
- AI keyboard extension
- improve writing AI
- rewrite sentences

### Mid-Volume

- custom AI commands keyboard
- AI keyboard for messages
- rewrite text in any app
- AI writing keyboard iOS
- tone changer AI
- translate keyboard AI
- paraphrase keyboard
- AI proofread keyboard
- email writing AI keyboard
- AI keyboard for students

### Long-Tail

- AI keyboard that rewrites text automatically
- best AI keyboard for iPhone 2026
- rewrite emails with AI keyboard
- AI writing assistant for non-native English speakers
- custom rewrite prompts keyboard
- AI keyboard with GPT-4 Claude Gemini
- improve grammar while typing iPhone
- paraphrase text without leaving the app
- AI keyboard for social media captions
- rewriteMate vs grammarly keyboard

### Product-Specific

- rewritemate AI keyboard
- rewritemate app
- rewritemate iOS
- rewritemate macos
- rewritemate pricing
- rewritemate custom commands
- rewritemate proofread
- rewritemate translate
- rewritemate tone change

---

## Key Messaging

### Hero Message
> Write With Confidence Everywhere.

### Value Propositions

| Message | Target |
|---------|--------|
| "Instantly improve, rephrase, and refine any text" | General users |
| "Works in your favorite apps — no switching screens" | Productivity users |
| "Create your own writing rules to keep your tone and structure consistent" | Power users, teams |
| "Your text is processed only when you choose to rewrite. Zero data collection." | Privacy-conscious users |
| "Choose your AI model: OpenAI, Claude, or Gemini" | Tech-savvy users |
| "The better writing tool, built for iOS and macOS" | Platform loyalty |

### App Store Description Hook
> "RewriteMate is the AI assistant keyboard that rewrites, paraphrases, refines tone, fixes grammar, and translates text right inside any app. No more switching between apps or copy-pasting."

### Social Proof (Badges on Website)
- Featured on Twelve Tools
- Featured on Sidehunt
- Featured on startuups
- Listed on Sell With boost
- Featured on PostYourStartup

---

## Screens & Visuals Reference

The following screens exist in the app. Marketing materials should reference them by name:

### Main App Screens

| Screen | Description | Best for |
|--------|-------------|----------|
| `OnboardingWelcomeView` | App icon + "Welcome to RewriteMate" | First-impression hero |
| `OnboardingFeatureView` | Grid of 6 built-in task icons | Feature showcase |
| `OnboardingKeyboardView` | 4-slide enable-keyboard tutorial | How-to guides |
| `LoginView` | Email field + Apple Sign In | Auth flow demos |
| `LibraryView` | Folder list with task counts | "Manage your commands" |
| `TaskRepoGridView` | 2-column grid of colorful task tiles | Feature hero image |
| `RewriteTaskDetailView` | Edit form with icon picker, prompt, playground | Custom commands demo |
| `UserProfileSheet` | Plan, usage, account, model picker | Subscription page |
| `ModelSelectionView` | Checkmarked model list (GPT, Claude, Gemini) | Multi-model marketing |
| `PayWallSheet` | Plan picker + feature list | Pricing page |

### Keyboard Extension Screens

| Screen | Description | Best for |
|--------|-------------|----------|
| `RewriteKeyboardView` — Commands tab | Top bar with command chips + folder filter | Main product image |
| `RewriteKeyboardView` — Response section | Streaming AI result with Copy/Insert/Replace | "How it works" |
| `AIInput` | Custom text field with animated border | Compose feature |
| `ActionsHistoryView` | Recent commands chip grid | "Never lose a command" |
| `ActionsTranslateView` | Language chips row | Translation feature |
| Keyboard rows (Alpha/Num/Symbols/Emoji) | Full keyboard layout | Keyboard visual |

### Visual Style Notes

- Icons: SF Symbols, colorful gradients on task cards
- Keyboard top bar: Dark/light adaptive, glass morphism effects (GlassCardModifier)
- Response section: Streaming text, animated loading lines
- AI Input: Rotating rainbow gradient border, blinking caret
- Profile: Clean InsetGrouped list style
- Onboarding: Slide-based with device screenshots

---

## FAQ (from Website)

| Question | Answer |
|----------|--------|
| **What is RewriteMate?** | AI-powered keyboard that rewrites, rephrases, and refines text inside any app. |
| **Are my text or data stored?** | No. Text is processed on demand and never retained. Zero data collection. |
| **What is the BYOK plan?** | Bring Your Own Key — use your own AI API key instead of subscribing. |
| **Does RewriteMate work offline?** | No, it requires an internet connection to call AI APIs. |
| **What are Custom Instructions?** | User-created commands with custom prompts, icons, and colors. |
| **Is there a free plan?** | Yes, with limited tasks (100) and 1 AI model. |

---

## App Store Info

| Field | Value |
|-------|-------|
| **App Name** | RewriteMate: AI Keyboard |
| **Subtitle** | AI Typing, Translate, Grammar |
| **Category** | Productivity |
| **Age Rating** | 9+ |
| **Size** | 54.3 MB |
| **Minimum OS** | iOS 17.6 / iPadOS 17.6 / macOS 14.6 |
| **In-App Purchases** | Monthly ($7.99), Annual ($49.99) |
| **Developer** | Felix Tran |
| **Copyright** | © 2025 RewriteMate |
| **Privacy** | No data collected |
