# Maison Àṣà 🌍✨

> *Where African Heritage Meets Modern Elegance*

Maison Àṣà is a fashion house website born from the rich tapestry of African culture. "Àṣà" — the Yoruba word for **style and tradition** — is at the heart of everything we create. The site showcases our collections, upcoming events, and the team behind the brand.

Founded in Lagos, Nigeria, we celebrate the beauty of African textiles — Ankara, Adire, Aso-Oke — reimagined for the global stage.

---

## 🗂 Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage — hero, our story, featured pieces |
| `products.html` | Full collections catalogue |
| `team.html` | Meet the team & brand values |
| `events.html` | Upcoming fashion events |
| `contact.html` | Get in touch |

---

## 👥 Meet the Team

### Adejoke Haastrup — *Founder & Creative Director*
Visionary designer blending African heritage with modern silhouettes. Passionate about empowering African fashion globally.

### Temiloluwa Orekunrin — *Head of Operations*
Ensures the seamless production and delivery of every piece. Brings 10 years of fashion industry logistics expertise.

### Angel Okechukwu — *Lead Designer*
Textile artist specialising in traditional dyeing techniques. Creates the signature prints that define Maison Àṣà.

### Habeeb Ajibola — *Marketing Director*
Digital storyteller connecting Maison Àṣà with fashion lovers worldwide. Champion of African luxury branding.

---

## 🚀 Getting Started (Git Setup)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/maison-asa.git
cd maison-asa
```

> Replace `YOUR_USERNAME` with the actual GitHub username or organisation the repo lives under.

### 2. Create your own branch

Each team member should work on their own branch, named after the page they're responsible for. This keeps everyone's work separate and avoids conflicts.

```bash
# Create and switch to your branch in one step
git checkout -b your-name/page-name

# Examples:
git checkout -b angel/products-page
git checkout -b habeeb/events-page
```

### 3. Make your changes

Open the relevant HTML file in your editor and make your edits. The shared stylesheet lives in `css/styles.css` and shared scripts in `js/main.js`.

### 4. Save and commit your work

```bash
# Stage all your changes
git add .

# Commit with a clear message
git commit -m "Update: describe what you changed here"
```

### 5. Push your branch to GitHub

```bash
git push origin your-name/page-name
```

### 6. Open a Pull Request

Go to the repository on GitHub, click **"Compare & pull request"**, and submit your changes for review before they are merged into `main`.

---

## 🌿 Branch Naming Convention

Please follow this format so branches stay organised:

```
your-name/page-you-are-working-on
```

**Examples:**
- `angel/products-page`
- `habeeb/events-page`
- `temi/contact-page`

---

## ⚠️ Important

- **Never commit directly to `main`.** Always work on your own branch.
- Pull the latest `main` before starting new work to avoid conflicts:

```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

---

© 2026 Maison Àṣà. All rights reserved.
