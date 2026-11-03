# Campaign Plan: The AI Agent Factory, 2nd Edition Launch

Folder note: the folder keeps the name `steep-club-launch` because the course steps refer to it by that name. The campaign is for the book, not tea.

Items marked **[TBC]** are placeholders that need a real answer. Nothing here is a confirmed price, launch date or buy link.

## 1. Campaign Overview

- **Name:** Build and Lead with AI Workers
- **Summary:** A four-week, email-only campaign that introduces the 2nd edition of *The AI Agent Factory* (Panaversity) through its "Five Horizons" roadmap and invites our interest list to start reading.
- **Primary goal:** **200 of the roughly 2,000 people on the interest list (10%) start reading the book by Sunday 3 January 2027.** "Started reading" means: signed in on the book site (see section 7).
- **Secondary goals:**
  - Raise awareness of the Five Horizons roadmap.
  - Learn which reader group responds most.
  - Test the studio's email workflow safely (practice mode only; no real sending in this lab).

## 2. Target Audience

About 2,000 people who joined the interest list, in three groups:

| Group | Who they are | What they want |
|---|---|---|
| **learners** | Students and newcomers to AI Workers | A clear starting point and a path to follow |
| **builders** | Working AI professionals and builders | A roadmap for building and managing AI Workers |
| **leaders** | Founders and leaders | How to build and lead companies run by AI Workers |

- **Pain points:** too much noise about AI, unclear next steps, no map of where AI work is heading.
- **Where they are:** inbox, AI communities, LinkedIn, study groups. Only email is used in this campaign.
- **Buying stage:** consideration. They already joined the list.

## 3. Key Messages

- **Core message:** The Five Horizons gives you a clear roadmap to build and lead with AI Workers.
- **Supporting messages:**
  1. **Where we are now:** the book places today in the AI Worker era (Horizon 1). Start from the present, not from hype.
  2. **A path, not a pile of facts:** the human role moves from asking questions, to managing, composing, building and governing.
  3. **Honest about the future:** later horizons are forecasts. The dates are indicative, and the book says so.
  4. **Humans stay accountable:** humans set purpose, define authority and remain accountable.
  5. **Study aids included:** a flashcard deck, roadmaps and cited sources, all on the Five Horizons page.
- **Proof points:** the Five Horizons page itself (https://agentfactory2.panaversity.org/five-horizons/).

## 4. Channel Strategy

| Channel | Why | Format | Effort |
|---|---|---|---|
| **Email** (only channel) | The list already opted in, so it is free and direct | 4 emails, plus a version per reader group | Low-medium |
| Landing page | The Five Horizons page already exists. No new page needed | Existing page | None |

No paid ads and no social posts (budget: small, email only). Budget is mostly time, plus any email-service cost **[TBC]**.

## 5. Content Calendar

Week 1 starts Monday 7 December 2026. All emails go on Tuesdays. Times are **[TBC]**.

| Week | Date | Email | Audience group | Purpose |
|---|---|---|---|---|
| 1 (Mon 7 Dec to Sun 13 Dec) | **Tue 8 Dec 2026** | 01: Meet the Five Horizons | all three groups, version per group | Introduce the roadmap and link to the Five Horizons page |
| 2 (Mon 14 Dec to Sun 20 Dec) | **Tue 15 Dec 2026** | 02: From prompting to governing | all three groups, version per group | Explain the ladder of how the human role changes |
| 3 (Mon 21 Dec to Sun 27 Dec) | **Tue 22 Dec 2026** | 03: Study with the book | all three groups, version per group | Show the study aids: flashcards, roadmaps, cited sources |
| 4 (Mon 28 Dec to Sun 3 Jan) | **Tue 29 Dec 2026** | 04: Start your roadmap | all three groups, version per group | Gentle reminder to start reading, with the link |

Dependencies:
- Emails must be final before `personalize` creates the group versions.
- Dates are written out so a check can verify the weekdays. 8, 15, 22 and 29 December 2026 are all Tuesdays.
- Weeks 3 and 4 fall around the year-end holidays, so open rates may dip (see risks).

## 6. Content Pieces Needed

| Asset | Description | Priority |
|---|---|---|
| Email 01-04 | The main versions, in `emails/` | Must-have |
| Group versions (3 groups x 4 emails) | Same structure, different opening line and one example | Must-have |
| Buy or access link and price | Not known **[TBC]** | Must-have before any real send |

## 7. Success Metrics

- **Primary KPI:** 200 readers (10% of the list) sign in on the book site by Sun 3 Jan 2027.
- **Secondary KPIs:**
  - Open rate (target **[TBC]**).
  - Click rate to the Five Horizons page.
  - Clicks by reader group.
  - Unsubscribes (keep low).
- **Definition of "started reading":** a person from the list signs in on the book site (agentfactory2.panaversity.org) for the first time during the campaign window (Tue 8 Dec 2026 to Sun 3 Jan 2027).
- **Tracking:** the email service's click reports show who clicked through, which is a leading signal. The sign-in count itself must come from the book site's own sign-in data, matched to the list by email address. Who provides that export is **[TBC]**. If it is not available, fall back to unique clicks and say so in the report.
- **Reporting:** a short check after each email, and a summary on Mon 4 Jan 2027.

## 8. Budget

Small. Email only, no paid ads.
- Production: time to write and review the emails.
- Distribution: email service **[TBC]**.
- Contingency: keep about 10% of any budget unspent.

## 9. Risks and Mitigations

1. **Holiday timing:** emails 03 and 04 land near year-end. Mitigation: keep them short and re-check the dates before sending.
2. **Overstating the future:** Horizon 2-4 dates are forecasts. Mitigation: always say forecast or indicative, and check every draft against `brand/voice.md`.
3. **Missing link or price:** the page shows neither. Mitigation: use placeholders and do not send for real until they exist.
4. **Group mismatch:** one message may not fit all readers. Mitigation: the `personalize` skill writes a version per group.

## 10. Next Steps

1. Confirm who can export sign-in data from the book site **[TBC]**, and the sender details **[TBC]**. (Goal and "started reading" are settled: 200 sign-ins.)
2. Write the four emails with `/marketing:email-sequence`.
3. Review them in a fresh session.
4. Create the practice leads, then the group versions.
5. Practice launch to `@resend.dev` addresses only (no real sends).

Sign-off for all emails: Rana Khan - Student of Panaversity
