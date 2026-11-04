# Pocket Plan

A responsive personal-finance PWA prototype for the GEAP 103 class project. It uses fictional sample figures and stores saved changes in this browser's local storage. It does not connect to a bank, upload statement data, or provide financial advice.

## Run it

Open `index.html` for a quick local preview. To enable install and offline caching, serve this folder from localhost or a secure HTTPS host. For example, from this folder run `python3 -m http.server 8000`, then visit `http://localhost:8000` and reload once while online. Use your browser's install or add-to-home-screen option on a supported device.

## What is included

- Monthly income, budgeted spending, savings capacity, a cash-flow overview, and upcoming credit-card payment reminders.
- Debit cards, credit cards, and credit lines; credit cards show current debt, minimum due, statement balance, and due date.
- Editable transactions with categories, plus CSV and PDF statement upload into a review table. CSV files with date, description, and amount columns are parsed in the browser. PDF statements are previewed locally; enter or correct their transactions in the review table before saving because automatic PDF text extraction is not included.
- A savings allocation calculator with an adjustable percentage.
- English and Spanish interface labels, local storage, and a service worker that caches the app shell for offline use after first load.

## CSV format

Use a header row with `date`, `description` (or `merchant`), and `amount`. Optional `category` values can prefill supported categories. Amounts are treated as expenses; review every row, category, sign, and account before saving.
