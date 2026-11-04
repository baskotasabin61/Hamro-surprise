# Hamro Surprise Website

Responsive Nepali + English gift and surprise delivery website (static HTML/CSS/JS).

## Contact details in the site
- WhatsApp / phone: +977 974-5260730 (`9779745260730` in `script.js` and the links in `index.html`)
- Email: hamrosurprise@gmail.com
- Service areas: Jhapa, Kathmandu

## Run locally
Open the folder in VS Code → right-click `index.html` → **Open with Live Server**.

## Before launch
1. Confirm package names, inclusions and prices (samples only).
2. Replace gallery photos in `style.css` (`.tile-one/two/three`) with your own.
3. Replace Facebook and Instagram links in `index.html`.
4. Test the booking form and WhatsApp/call buttons on a phone.

## Changing the phone number later
Update `whatsappNumber` in `script.js`, plus the `wa.me` / `tel:` links and visible text in `index.html` (search for `9745260730`).

## Publish on GitHub Pages
Upload `index.html`, `style.css`, `script.js`, `README.md` → Settings → Pages → Deploy from branch `main` / root.

## Notes
- The form opens a pre-filled WhatsApp message; the customer must tap Send. Nothing is stored on a server.
- Payments or automated notifications need a secure backend.
