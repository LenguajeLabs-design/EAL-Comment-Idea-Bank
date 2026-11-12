# EAL Conference Comment Builder

A customizable, browser-based comment builder for Grade 4 and Grade 5 parent conferences.

## Use the builder

1. Select an alias: five Grade 4 students and six Grade 5 students are included.
2. Choose Strengths, Growth, or Moving Forward, then select a language focus and a starting point.
3. Choose pronouns for the alias and whether statements start with the alias, “Your child,” or the selected pronoun. Personalize the wording, support level, and classroom example using your observations.
4. Add the draft to the final comment and edit it as needed.
5. Copy comments into a conference form or export all 11 aliases to CSV for a spreadsheet.

The bank includes listening, speaking, vocabulary, word reading, reading comprehension, reasoning, writing organisation, sentence construction, independence, collaboration, summarising, and editing.

## Hosting

This repository is a buildless static website. GitHub Pages can serve the `main` branch from `/ (root)`. There is no package installation or build step. The `.nojekyll` file ensures the files are served directly.

## Draft storage and backups

Student drafts are saved in this browser on this device. They are not sent to GitHub or an AI service and do not sync between teachers, browsers, devices, or site addresses. Use aliases instead of student names. Do not commit backups, exported student comments, or an alias-to-name key to this repository.

Use **Save backup** to download a JSON file and **Restore a backup** to import it on another device. Restore fills empty student slots and preserves existing drafts. Clearing browser data removes browser drafts. CSV exports include all aliases and the three final comment sections.

This repository and the published website are public. The app code and generic comment bank can be viewed by visitors; personal drafts stay in the browser where they were entered. The optional Google Fonts stylesheet requests fonts only and does not receive comment data.

## Editing the tool

- `bank.js`: comment topics, starting points, and school/home suggestions.
- `app.js`: student slots, browser storage, review tracking, copying, and exports.
- `styles.css`: responsive styles.
- `index.html`: page structure and labels.

For a local preview, run `python3 -m http.server 4183` from this folder, then open `http://localhost:4183`. You can also open `index.html` directly, although browser clipboard and storage support can vary for local files.

Only select wording supported by observation. The builder does not infer proficiency, fabricate evidence, or claim improvement. Final comments stay unchanged until you explicitly add a working draft. Editing a final comment clears its reviewed status.

## Pronouns

Each alias can store She / her, He / him, They / them, or Not specified. Nothing is inferred from the alias. Selected pronoun starts new strength and growth comments when chosen under Sentence starts with; They uses plural verb agreement. Existing final comments and classroom examples are never rewritten when settings change. A check flags other pronouns in final text for review; those words may refer to a partner or another person, so the check is advisory. Pronouns are included in local backups and CSV exports. Backups from before this setting default to Not specified.
