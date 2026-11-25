# CreditPulse

CreditPulse is a class demo for the GEAP 103 project. It starts with no accounts and no transactions. All totals start at $0. Add your own account, then enter your own transactions. The app does not add made-up example information.

## Important

This is a public class demo, not a private finance app. The app saves information in the browser on the device. It does not send information to a bank or to a server. Do not enter real private financial information. If you show the app on your own device, other people using that same browser may see the information you entered.

## Open the app

Open `index.html` for a quick preview. To use the install and offline features, serve this folder from localhost or a secure website. For example, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`. Load it once while online to save the app for offline use.

## What you can show

- Add debit cards, credit cards, and credit lines.
- Add, edit, and delete transactions.
- Import a CSV or PDF statement and review rows before saving.
- Change the savings percentage.
- Switch between English and Spanish.

CSV files need a header row with `date`, `description` (or `merchant`), and `amount`. PDF statements can be previewed, but you must enter their transactions in the review table yourself.
