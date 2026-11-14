---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize campaign emails by lead group

Campaign folder: $ARGUMENTS

## Step 1: Check the argument

If no campaign folder was given, stop. Do not write anything. Use Glob on `campaigns/*/` and reply with the list of campaign folders that exist, and ask the user to run the skill again with one of them.

If the folder does not exist, say so and list the folders that do.

## Step 2: Gather inputs

1. Read `leads/leads.csv`. Take the distinct values in the `group` column (skip the header). These are the groups. Do not assume any group names.
2. Read `brand/voice.md` and follow it (plain English, words to use and avoid, claims never to make).
3. Use Glob to find every `*.md` file in `<campaign folder>/emails/`. Read each one. Also read `<campaign folder>/plan.md` for context.

## Step 3: Write one version per email per group

For each email and each group, write a new file at `<campaign folder>/groups/<group>/emails/<same file name>`.

Keep identical to the original:
- structure (same sections, same order, same length roughly)
- front matter and subject line
- the link
- the footer

Change only:
- the opening line, so it speaks to that group
- one example, so it fits that group

Rules:
- Use what leads.csv and the plan tell you about each group. Do not invent facts about the groups.
- Do not add claims, prices, dates, links or promises that the original does not have.
- Never write to or change the original emails.
- Nothing is ever sent. Only write files.

## Step 4: Reply with a short summary only

Reply with:
- how many files you wrote
- one example opening line per group

No other output.
