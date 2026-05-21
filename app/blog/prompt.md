follow instruction and output 3 blog post ideas

## Step 1 — Extract SEO Angles

Using the product description, positioning doc, and SEO strategy below as context, extract **8 SEO angles** by crossing:

- **Audience**: non-native English professionals, social media managers & content creators, customer support & sales reps, students, heavy texters (20+ messages/day), power users who want prompt control
- **Pain point**: copy-paste friction to AI apps, broken writing flow, sounding awkward in work messages, no tone control, fixed AI presets with no customization, slow writing on mobile
- **Context**: typing in Messages / Mail / Slack / Instagram / Notes, sending important emails, crafting captions, responding to clients, writing on the go
- **Entry awareness layer**: problem-aware | solution-aware | product-aware

For each angle, output:
- `angle`: short label (e.g. "copy-paste frustration")
- `audience`: who this targets
- `pain_point`: the specific friction being solved
- `context`: where/when this moment happens
- `entry_awareness_layer`: problem-aware | solution-aware | product-aware

**Reference product positioning when writing angles:**
- RewriteMate is not an AI chat app — it lives *inside the keyboard*, inside every text field
- Core differentiator: zero copy-paste friction, works in every app, fully customizable AI prompts
- Key competitors: Grammarly (error-only), Apple Intelligence (closed/limited), ChatGPT (separate app)
- Sacred principle: the AI enhances the user's voice — it never replaces it

---

## Step 1.5 — Fetch Existing Blog Posts & Deduplicate

Send a GET request to:
```
https://rewritemate.app/api/blogs
```

Expected response:
```json
[
  {
    "title": "...",
    "summary": "...",
    "publishedAt": "...",
    "keywords": ["..."]
  }
]
```

**Deduplicate your 8 angles against this list:**

For each angle, compare against every existing post by checking:
- Topic/theme overlap with `title` or `summary`
- Keyword overlap with `keywords`

Score similarity on a 0–100% scale. **Discard any angle that is 95%+ similar to an existing post.**

After filtering, you should have a reduced list of **fresh angles** — topics not yet meaningfully covered.

If fewer than 3 angles survive, generate additional angles from the product description until you have at least 3 fresh ones.

Show the user a brief summary:
> "Checked [N] existing posts. Removed [X] overlapping angles. Proceeding with [Y] fresh angles."

---

## Step 2 — Keyword Discovery & Filtering

For each surviving angle, construct **2–3 realistic Google search queries** a user would type when experiencing that pain point.

Run web searches for each query. From results, extract keyword phrases appearing in:
- Page titles and meta descriptions
- "People also ask" questions
- Competitor blog headlines

**Discard keywords that are:**
- Too broad ("AI writing tool", "keyboard app", "writing assistant")
- Competitor brand names (Grammarly, Gboard, SwiftKey, etc.)
- Purely transactional / app-store purchase intent
- Not mobile, iOS, or iPhone-specific

**Keep keywords that are:**
- Informational or how-to intent
- Long-tail and specific to a real friction moment
- Clearly matched to a pain point RewriteMate solves (friction, tone, customization, voice, in-app writing)
- iOS / iPhone / mobile context

Extract a shortlist of **5–8 keywords**, each with:
- `keyword`: exact phrase
- `intent`: how-to | listicle | comparison | problem-aware | informational
- `audience`: who is searching this
- `relevance`: which RewriteMate feature or benefit solves this

---

## Step 3 — Generate 3 Blog Post Ideas

From the filtered keyword shortlist:

1. Cluster keywords by shared intent and topic
2. Pick the **strongest cluster** — most specific, clearest pain point, most obvious content format
3. Generate **exactly 3 blog post ideas** from that cluster

Each idea must include:
- `title`: working blog post title (punchy, human, curiosity-driven — under 60 characters for Medium feed cards)
- `keyword`: target keyword phrase
- `intent`: search intent type
- `format`: how-to | listicle | comparison | opinion | problem-aware
- `hook`: what makes this angle interesting or shareable
- `word_count_range`: target length (e.g. "1200–1500")
- `medium_tags`: 5 suggested Medium tags drawn from: `Productivity`, `Writing`, `iPhone`, `Technology`, `Artificial Intelligence`, `iOS`, `Self Improvement`, `Mobile`, `Communication`, `Email Writing`, `AI Tools`, `Writing Tips`, `Remote Work`, `Apps`, `Content Creation`

**Guardrails when generating ideas:**
- The post must be about the *user's problem first* — RewriteMate is the solution, not the subject
- No posts primarily about the app itself ("What is RewriteMate?")
- No pricing, benchmark claims, or accuracy comparisons
- Avoid thin listicles — Medium curators deprioritize them
- Each post must be completable in 1200–1800 words with a genuine takeaway
- RewriteMate should not appear until section 2 or later in the article structure

---

## Context: RewriteMate Product Reference

**What RewriteMate is:**
An iOS system keyboard extension that brings AI writing assistance directly into any text field — Messages, Mail, Instagram, Slack, Notes, and every other app — without ever leaving the current app.

**Core features (only mention what exists):**

| Feature | Natural description |
|---|---|
| Inline rewriting | "right inside whatever app you're typing in" |
| Tone adjustment | "switch to professional, casual, or friendly in one tap" |
| Grammar & clarity | "catch errors and clean up the flow" |
| Paraphrase / Rewrite | "reword it so it actually sounds the way you meant" |
| Shorten / Expand | "trim it down" / "flesh it out" |
| Translate | "translate while keeping the original meaning intact" |
| Custom AI commands | "create your own commands for the things you do every day" |
| Works everywhere | "works in Messages, Mail, Instagram, anywhere you type on iOS" |

**Primary personas:**
- Non-native English professionals writing work emails and messages
- Content creators and social media managers drafting captions from their phone
- Customer support and sales reps who need every reply to land well
- Students writing essays or assignments on iPhone
- Heavy texters who send 20+ messages/day and care how they sound

**Key differentiators:**
- Zero copy-paste friction — the AI lives inside the keyboard, not a separate app
- Fully editable AI prompts ("glass box") — users can see and modify every command
- Custom command library with folders, icons, and personal prompts
- Voice preservation — the AI enhances the user's writing, never replaces it
- Privacy by design — only selected text is processed, nothing is stored

**App Store:** https://apps.apple.com/app/rewritemate-ai-keyboard/id6755306532
**Homepage:** https://www.rewritemate.app
-----


##  Write the Full Blog Post

Write the complete blog post in Markdown using the winning idea.

**Structure rules:**
- H1: must contain the target keyword
- Intro (first 100 words): must naturally include the target keyword
- 4–6 H2 sections
- CTA toward App Store at the end (and optionally once mid-post)
- Word count: hit the range from the winning idea

**Writing rules:**
- Reference RewriteMate features naturally — never forced or salesy
- Write for the specific audience identified in the winning idea
- Use short paragraphs, active voice, conversational but professional tone

**Self-check before saving:**
- [ ] Keyword in H1
- [ ] Keyword in first 100 words
- [ ] Keyword in at least 2 H2s
- [ ] App Store CTA present
- [ ] Word count is within range
- [ ] No invented features

- Include frontmatter at the top:

```
---
title: "..."
publishedAt: "YYYY-MM-DD"
summary: "..."
keywords: ["..."]
image: ""
---
```
