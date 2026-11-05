# Hamro Surprise Website

Responsive Nepali + English gift and surprise delivery website. Pure static HTML, CSS and JavaScript — no build step needed.

## Contact details
- WhatsApp / phone: +977 974-5260730
- Email: hamrosurprise@gmail.com
- Service areas: Jhapa, Kathmandu

## Project structure
```
hamro-surprise-website/
├── index.html    # page content and SEO data
├── style.css     # design, layout, animations
├── script.js     # menu, booking form, scroll effects
├── images/       # your own photos (create this folder)
└── README.md
```

## Features
- Sections: Hero, Trust strip, About, Services, How it works, Packages, Gallery, Booking, FAQ, Contact
- Booking form opens a pre-filled WhatsApp message (phone number is validated)
- Animations: hero entrance, floating particles, scroll reveal, hover effects, scroll progress bar, active menu link, pulsing WhatsApp button
- Reduced-motion support: animations are turned off for visitors who request it
- SEO: page title, meta description, Open Graph tags, LocalBusiness structured data
- Accessible: skip link, keyboard focus styles, ARIA labels

## Run locally
1. Open the folder in VS Code (File → Open Folder).
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

## Add your own photos
1. Create an `images` folder next to `index.html` and copy your photos in (lowercase names, no spaces, under about 300 KB each).
2. In `style.css`, change the gallery lines:
   ```css
   .tile-one   { background-image: url("images/birthday1.jpg"); }
   .tile-two   { background-image: url("images/gift1.jpg"); }
   .tile-three { background-image: url("images/proposal1.jpg"); }
   ```
3. To change the top banner, edit the `url(...)` inside `.hero`.

## Common edits
| What | Where |
|---|---|
| Phone number | `whatsappNumber` in `script.js`, plus `wa.me` / `tel:` links and text in `index.html` (search `9745260730`) |
| Prices and package items | Packages section in `index.html` |
| FAQ answers | FAQ section in `index.html` |
| Facebook / Instagram | Contact section in `index.html` |
| Colors and fonts | `:root` variables at the top of `style.css` |
| Particle count and speed | `initHeroParticles` in `script.js` |
| Turn off an animation | Delete its rule in section 11 of `style.css` |

## Before launch checklist
- [ ] Confirm package names, inclusions and prices (current prices are samples)
- [ ] Replace sample gallery photos with real ones
- [ ] Add official Facebook and Instagram links
- [ ] Review FAQ answers (booking lead time, delivery areas, privacy)
- [ ] Confirm whether you deliver across all of Jhapa and Kathmandu or only selected areas
- [ ] Test the booking form, WhatsApp and call buttons on a phone

## Publish on GitHub Pages
1. Create a GitHub repository, e.g. `hamro-surprise`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md` and the `images` folder to the repository root.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. Wait a minute or two for the public URL to appear.

## Technical notes
- The site is static and free to host on GitHub Pages.
- Google Fonts and the sample photos load from the internet.
- The form does not store data or send messages automatically; the customer must tap Send in WhatsApp.
- Never put passwords or private API keys in frontend JavaScript.
- Online payments, a booking database or automated WhatsApp notifications need a secure backend.
