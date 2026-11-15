# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is not a code project. It is the "Email Studio Lab", a 15-step Claude Code course (exam prep for CCAR-F). `ASSIGNMENT.md` is the source of truth and the steps are followed in order. Each step has a **Build** prompt, then a **Check** prompt that must be run in a fresh session (`/exit`, then `claude`) so the checker did not write the work. Don't skip ahead or merge steps.

The repo is built up step by step, so most of the folders in ASSIGNMENT.md ("Your studio at the end") do not exist yet. Create them only when the step asks for them. When a step's prompt names exact file contents (front matter, `.mcp.json`, footer text, CSV columns), use them exactly.

## Project decisions that differ from ASSIGNMENT.md

- **Main pin point:** the certification preparation strategy at https://agentfactory2.panaversity.org/certification-and-portfolio-roadmaps/ (motivating tone, with honest warnings). Every email uses that page as its one main link.
- **Brand:** the campaign markets the 2nd edition of *The AI Agent Factory* (Panaversity), starting from https://agentfactory2.panaversity.org/five-horizons/ ("The Five Horizons: From Agent to Autonomous Economy"). Use it instead of the Kettlebird Tea / Steep Club sample, wherever ASSIGNMENT.md's prompts mention the sample. That includes the link `https://kettlebird.example/steep-club` and the email footer text.
- **Brand rule to carry into `brand/voice.md`:** the Horizon 2-4 dates are forecasts. Always call them forecasts or indicative and never state them as fact. The page shows no price, buy link or launch date, so don't invent any. Use clearly marked placeholders.
- **Lead groups:** replace the tea groups with reader segments. Keep exactly 3 groups of 8 and keep the CSV columns from Step 5.
- **Nothing real is ever sent.** This course only tests the platform. Sending goes through the local Resend emulator (`npx emulate@0.12.3 start --service resend`, http://localhost:4000, run in a second terminal), only to `@resend.dev` addresses or the user's own. All lead emails are `@example.com`.

## Commands

- Skills search (Step 1): `npx skills find <query>`, and GitHub stars via `gh api repos/<owner>/<repo> --jq .stargazers_count`
- Plugin (Step 2): `claude plugin marketplace add anthropics/knowledge-work-plugins --scope project`, then `claude plugin install marketing@knowledge-work-plugins --scope project`, and `claude plugin list`
- Headless review (Step 13): `node scripts/review.mjs <campaign folder>` (exit 1 on any high-severity finding)
- Plugin kit (Step 14): `claude plugin validate studio-kit` and `claude --plugin-dir ../studio-kit`

There is no build, lint or test setup. Verification is done by the Check prompts, which measure things with commands (character counts, link counts, `git check-ignore`, Grep) rather than by reading.

## Working rules for this repo

- Windows with Git Bash. Use Unix paths and syntax in Bash, and commit when a step says to.
- Ask before deleting anything. Files under `.claude/` and `.mcp.json` need permission to write, which is expected.
- Never commit an API key. Keys use `${VAR:-default}` expansion. `.claude/settings.local.json` (which will hold `MY_EMAIL`) is gitignored.
- Suggest edits to this file when the user's project decisions change. Step 2 asks for a studio `CLAUDE.md`, so extend this file rather than replacing it, and keep the decisions above.

## Studio rules

This studio plans and writes email campaigns for a small business (here: the 2nd edition of *The AI Agent Factory*).

Folders:
- `brand/`: the brand voice guide (how we sound, words to use and avoid, claims never to make)
- `leads/`: the practice customer list, made-up people only
- `campaigns/`: one folder per campaign, with its plan and emails
- `notes/`: working notes and research

Rules:
- Write in plain English.
- Never send email to real people. The only exception: sending through Resend is allowed to Resend's test addresses (ending in `@resend.dev`) and to my own email address (`MY_EMAIL`). A guard (a hook, added in the next step) will enforce this.
- Ask me before deleting anything.

## Brand voice

@brand/voice.md
