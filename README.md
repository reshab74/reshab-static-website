# Reshab — IT Student Portfolio

A clean, high-performance static portfolio site built with pure **HTML5, CSS3, and JavaScript** — deployed on **Cloudflare Pages**.

## 🗂 File Structure

```
/
├── index.html          ← Home / Hero
├── about.html          ← About & Skills
├── projects.html       ← Projects
├── contact.html        ← Contact
├── 404.html            ← Custom 404
├── _headers            ← Cloudflare security & cache headers
├── _redirects          ← Cloudflare redirect rules
├── css/
│   └── style.css       ← Full design system (single stylesheet)
├── js/
│   └── components.js   ← Shared Navbar & Footer injector
└── assets/
    └── favicon.svg     ← SVG favicon
```

## 🎨 Design

| Token | Value |
|---|---|
| Primary Blue | `#1D4ED8` |
| Accent Red | `#DC2626` |
| Text Black | `#0F172A` |
| Background | `#FFFFFF` |
| Font | Inter (Google Fonts) |

## 🚀 Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → **Create a project**
3. Connect your GitHub repo (`reshab74/reshab-static-website`)
4. Set **Build command**: *(none — static site)*
5. Set **Output directory**: `/` (root)
6. Click **Deploy** ✅

## 📬 Contact Form

The contact form currently uses client-side validation only (no backend). To enable email delivery, sign up at [Formspree](https://formspree.io), get your form endpoint, and update the `<form>` action in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🛠 Local Development

```powershell
npx -y serve . -p 5500
# → Open http://localhost:5500
```
