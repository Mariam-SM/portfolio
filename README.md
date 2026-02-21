# 🚀 Mariam Sayed | Portfolio

A fully responsive personal portfolio built with pure **HTML, CSS, JavaScript & Bootstrap 5**.
No frameworks, no build tools — just open `index.html` and it works!

## 📁 File Structure

```
mariam-portfolio/
├── index.html        ← Main page (all sections here)
├── css/
│   └── style.css     ← All custom styles
├── js/
│   └── main.js       ← All logic + DATA in one file
└── assets/           ← Put your images/CV here
```

## ✨ Features

- 🌍 English & Arabic with full RTL support
- 🌑 Dark elegant theme with purple accent
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Scroll-triggered animations
- ⚙️ All content in one `DATA` object in `main.js` — easy to update!
- 📬 Contact form (connect EmailJS for real emails)

## 🔧 How to Update Content

Open `js/main.js` and find the `DATA` object at the top.
Update the English content in `DATA.en` and Arabic in `DATA.ar`.

That's it — no build step needed!

## 📧 Connect Contact Form (EmailJS)

1. Create account at https://emailjs.com
2. Create a service + email template
3. In `js/main.js`, find the comment `// 👉 To connect EmailJS`
4. Uncomment and fill in your Service ID, Template ID, and Public Key

## 🌐 Deploy

Just upload the folder to any static host:
- **GitHub Pages** — free and easy
- **Netlify** — drag & drop the folder
- **Vercel** — connect GitHub repo

---
Made with ❤️ by Mariam Sayed
