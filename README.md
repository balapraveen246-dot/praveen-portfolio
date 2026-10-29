# Praveen — MERN Stack & Freelance Web Developer Portfolio

A modern, high-converting developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Featuring an aesthetic dark theme with refined gold accents, responsive navigation, verified project showcases, and a seamless WhatsApp inquiry flow.

---

## 🎨 Theme & Palette

- **Main Background**: `#09090B`
- **Card Background**: `#111114`
- **Primary Gold**: `#D4AF37`
- **Gold Hover**: `#E5C76B`
- **Main Text**: `#F5F5F5`
- **Secondary Text**: `#A1A1AA`
- **Subtle Borders**: `#27272A`

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (Tested on Node v24)
- **npm**: v9.0.0 or higher

### 2. Run Locally
Navigate to the project root and start the development server:

```bash
# Navigate to the project folder
cd C:\Users\balap\.gemini\antigravity\scratch\praveen-portfolio

# Install dependencies (already pre-installed)
npm install

# Start the Vite local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## ⚙️ Configuration & Customization

### 1. Contact Details & WhatsApp Number
Open [`src/data/config.js`](file:///C:/Users/balap/.gemini/antigravity/scratch/praveen-portfolio/src/data/config.js):

```javascript
export const CONTACT_CONFIG = {
  // WhatsApp number in international format
  whatsappNumber: '918610808937',
  displayPhone: '+91 86108 08937',

  // Active contact email address
  email: 'balapraveen246@gmail.com',

  // Socials
  socials: {
    github: 'https://github.com/balapraveen246-dot',
    linkedin: 'https://www.linkedin.com/in/praveenrdsafs',
  },

  
  // Set to false if you are temporarily unavailable for freelance projects
  isAvailableForWork: true,
  statusText: 'Available for Freelance Projects',
};
```

### 2. Updating Your Hero Portrait Photo
Your real uploaded portrait has already been cleanly cropped and saved to:
`public/images/praveen.jpg`

If you ever want to replace it:
1. Copy your new JPEG photo to `public/images/praveen.jpg`.
2. Keep the name `praveen.jpg` to preserve existing references.
3. The component uses responsive CSS (`object-fit: cover` and `object-position: top`) with subtle gold border glow.

### 3. Managing Projects
All projects are centralized in [`src/data/projectsData.js`](file:///C:/Users/balap/.gemini/antigravity/scratch/praveen-portfolio/src/data/projectsData.js).
- **Udemy Upgrade Version**: Live GitHub Pages demo
- **Greenden**: Live GitHub Pages demo
- **Nostra**: Frontend fashion store currently marked as *In Progress / Coming Soon*
- **Weather Report**: Live Vercel app
- **BulkMail**: Live Vercel app
- **Grand Horizon**: Verified as *Demo Unavailable (404)* per instructions. When your live URL is active, update `liveUrl` and change `status: 'Live'`.
- **Medical Website**: Live Vercel app

---

## 🚢 Deploying to Vercel

The project includes a ready-to-use [`vercel.json`](file:///C:/Users/balap/.gemini/antigravity/scratch/praveen-portfolio/vercel.json) file.

### Option A: Via GitHub (Recommended)
1. Initialize git in this folder and push to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete praveen developer portfolio"
   git branch -M main
   git remote add origin https://github.com/balapraveen246-dot/praveen-portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import your repository.
4. Framework preset **Vite** will be auto-detected. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠 Project Structure

```
praveen-portfolio/
├── public/
│   └── images/
│       ├── praveen.jpg            # Cropped portrait in hero section
│       └── praveen-original.png   # Original source image backup
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky navigation with mobile menu
│   │   ├── Hero.jsx               # Hero section with portrait & CTAs
│   │   ├── TrustStrip.jsx         # Slim 4-point honest trust strip
│   │   ├── About.jsx              # Bio & developer philosophy card
│   │   ├── Skills.jsx             # 12 authentic skills with brand SVGs
│   │   ├── Projects.jsx           # 7 selected project cards & filters
│   │   ├── Services.jsx           # 4 freelance development service cards
│   │   ├── PricingQuote.jsx       # Free quote CTA & 3-step WhatsApp flow
│   │   ├── Contact.jsx            # Contact details & honest inquiry form
│   │   └── Footer.jsx             # Minimal footer with back-to-top
│   ├── data/
│   │   ├── config.js              # Contact, WhatsApp & social settings
│   │   ├── projectsData.js        # Project definitions & verified URLs
│   │   ├── skillsData.js          # Skills list, SVGs & categories
│   │   └── servicesData.js        # Service descriptions & highlights
│   ├── App.jsx                    # Root layout
│   ├── index.css                  # Tailwind styles & theme variables
│   └── main.jsx                   # React entry point
├── index.html                     # SEO metadata, Plus Jakarta Sans, Favicon
├── tailwind.config.js             # Dark & gold theme palette configuration
├── vite.config.js                 # Vite build settings
└── vercel.json                    # Vercel deployment configuration
```
