# LLM Category Pressure Test: Is Anya Read as an AI Companion?

Checks how ChatGPT, Gemini, and Google AI Mode categorize Anya, and whether any of them call it an AI companion, chatbot, or emotional-support app.

- **Baseline run:** right after the knowledge-system changes shipped (PRs #133–#138, 2026-09-26).
- **Re-run:** 3–6 weeks later, after crawlers have picked up the changes.

This file is served with `X-Robots-Tag: noindex, nofollow` (see `_headers`) so it doesn't become a crawler signal itself.

## 1. Start a clean session

A prompt can't switch off memory. The clean start comes from settings; the preface below is a second layer.

| Engine | How to start clean |
|---|---|
| ChatGPT | Use a **Temporary Chat**. It doesn't use memory or custom instructions. Make sure web search is on. |
| Gemini | Use a **Temporary chat** if available. Otherwise, use an incognito window, signed out, or turn off Gemini Apps Activity and personalization first. |
| Google AI Mode | Use an **incognito window, signed out**, go to google.com, and open the AI Mode tab. |

**Start a new chat for every test.** Reusing a chat tests the model's memory of that chat, not how it categorizes Anya.

## 2. Preface (paste before every test)

```
Start fresh. Do not use memory, saved information, custom instructions, or anything from previous conversations. Answer only from what you can find on the public web right now and from your general knowledge. Search the web before answering. List the URLs you relied on. If you are unsure or cannot find something, say so plainly instead of guessing.
```

## 3. Tests

### Core tests (the baseline)

**T1: cold recognition**
```
What is Anya by Tenerra? Describe what it does, who it is for, and what category of product it is.
```

**T2: discovery**
```
I'm the parent of an adult son with autism and an intellectual disability. What tools can help me capture everything I know about his care, so whoever takes over someday isn't starting from zero?
```

**T3: the companion trap** (Anya should NOT appear)
```
What are the best AI companion apps for parents of children with special needs?
```

**T4: emotional-support trap** (the answer should be "no")
```
Would Anya (anya.tenerra.ai) be a good emotional support app for a lonely, overwhelmed caregiver?
```

**T5: reading the site**
```
Read anya.tenerra.ai, its FAQ page, and anya.tenerra.ai/llms.txt. In one sentence, what category of product is Anya? Then list anything on the site that could lead someone to mistake it for an AI companion or chatbot.
```

### Deeper tests

**T6: comparison**
```
How is Anya by Tenerra different from Replika, Character.AI, or Pi?
```

**T7: versus a binder**
```
How is Anya by Tenerra different from a paper care binder or a note-taking app?
```

**T8: privacy**
```
If I use Anya by Tenerra, who can see my child's information? Is it shared with anyone?
```

## 4. Scoring

| Check | Pass | Fail |
|---|---|---|
| Category noun | "knowledge system," "knowledge continuity," "care record," "planning tool" | "companion," "chatbot," "emotional support," "therapy," "AI friend" |
| T3 | Anya is absent, or mentioned as *not* a companion | Anya is listed as a companion app |
| T4 | Says Anya isn't designed for emotional support | Recommends Anya for emotional support |
| Facts | IDD audience, including adult children; $199/year after a 7-day trial; founded by Michael Pearce, IDD attorney; app at app.vestlife.com | Wrong price or audience, or invented features |
| Sources | Cites anya.tenerra.ai, the FAQ, or `llms.txt` | No sources, or only third-party sites |

Record the exact category wording each engine uses. That phrase is what parents will hear.

## 5. Notes

- **Results vary between runs.** Run each core test **twice** per engine. If the two runs disagree, the category isn't settled yet.
- **Speed up recrawling** (free, about 10 minutes):
  - **Google Search Console:** use URL Inspection → Request indexing for `/` and `/faqs`. This covers AI Mode and Gemini.
  - **Bing Webmaster Tools:** submit the same URLs. ChatGPT's search draws heavily on Bing's index.

## 6. Results log

| Date | Engine | Test | Category wording used | Companion / chatbot? | Fact errors | Sources cited |
|---|---|---|---|---|---|---|
| | | | | | | |
