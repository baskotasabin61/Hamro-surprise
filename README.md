# Hamro Surprise Website

Responsive Nepali + English gift and surprise delivery website starter.

## Brand details already added
- Name: Hamro Surprise
- Services: Birthday Surprise, Anniversary, Proposal, Gift Delivery
- Service areas: Jhapa and Kathmandu
- WhatsApp: +977 976-7799863
- Email: hamrosurprise@gmail.com
- Design: Premium / Luxury

## Open in VS Code
1. Extract this ZIP.
2. VS Code → File → Open Folder → select `hamro-surprise-website`.
3. Install the **Live Server** extension (optional).
4. Right-click `index.html` → Open with Live Server.

## Important edits before launch
1. Confirm package names, inclusions and prices in `index.html`. Current prices are sample starting prices only.
2. Replace the sample gallery backgrounds in `style.css` with your real product/delivery photos.
3. Replace Facebook and Instagram links in `index.html` with your official profile URLs.
4. Confirm whether you deliver throughout Jhapa and Kathmandu or only selected areas.
5. Check all contact details and test the booking form on a phone.

## WhatsApp booking
`script.js` uses the provided number `9779767799863`. The booking form creates a pre-filled WhatsApp message and opens WhatsApp. The customer must review and tap **Send**. This static website does not save submissions to a database or send messages automatically in the background.

## Publish using GitHub Pages
1. Create a GitHub repository, e.g. `hamro-surprise`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open repository **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to show the public website URL.

## Technical notes
- This is a static website; GitHub Pages can host it free.
- Google Fonts and gallery background photos load from external services, so internet is needed for those visuals/fonts.
- Do not add private API keys or passwords to frontend JavaScript.
- For online payment, booking database/admin dashboard, or automated WhatsApp Business notifications, a secure backend and the relevant provider integration will be needed.
