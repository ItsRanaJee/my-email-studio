---
paths:
  - "campaigns/**/emails/*.md"
---

# Rules for every email file

Each email file must:

- Start with a line `Subject: ...` of 50 characters or fewer, then a line `Preview: ...` of 90 characters or fewer.
- Greet the reader with `{{first_name}}`.
- Have exactly one main link, written as `[Button text](https://agentfactory2.panaversity.org/certification-and-portfolio-roadmaps/)`. No other links.
- End with our sign-off from `brand/voice.md` (Rana Khan - Student of Panaversity), then this two-line footer as plain text, not inside a code block:

You're getting this because you joined the AI Agent Factory interest list.
The AI Agent Factory by Panaversity, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Also follow `brand/voice.md`: use "AI Worker", no banned words, no job guarantees, no future dates stated as fact, no invented price or launch date.
