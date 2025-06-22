# Dogecoin EV Website 🐕⚡

A modern, responsive website for Dogecoin Electric Vehicle initiatives built with Next.js 15, featuring PWA capabilities and mobile-first design.

## 🚀 Features

- **Progressive Web App (PWA)** - Installable on mobile and desktop
- **Responsive Design** - Optimized for all screen sizes
- **Mobile Touch Gestures** - Enhanced mobile experience
- **Contact Form** - Email integration for inquiries
- **Resource Hub** - Comprehensive information center
- **Modern UI** - Built with Tailwind CSS and shadcn/ui
- **SEO Optimized** - Structured data, meta tags, and sitemap
- **Dark/Light Mode** - Theme toggle with system preference detection
- **QR Code Donations** - Easy mobile wallet integration
- **Copy-to-Clipboard** - One-click address copying
- **Breadcrumb Navigation** - Enhanced site navigation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/DogecoinEVSite-n7.git
cd DogecoinEVSite-n7
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Setup

Create a `.env.local` file in the root directory:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your environment variables:

\`\`\`env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Site Configuration (Required)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Alternative Analytics (Optional)
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
# NEXT_PUBLIC_FATHOM_SITE_ID=XXXXXXXX
\`\`\`

## 🔒 Security & Environment Variables

### Important Security Notes:
- **Never commit `.env.local` or `.env` files** to version control
- **Use `.env.example`** as a template for required environment variables
- **Rotate API keys and passwords** regularly
- **Use strong, unique passwords** for email accounts

### Environment Variable Types:
- **`NEXT_PUBLIC_*`** - Exposed to the browser (use for non-sensitive config)
- **Regular env vars** - Server-side only (use for sensitive data like API keys)

### Required Variables:
- `EMAIL_USER` & `EMAIL_PASS` - For contact form functionality
- `NEXT_PUBLIC_SITE_URL` - For proper SEO and PWA functionality

### Optional Variables:
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking
- Analytics alternatives (Plausible, Fathom, etc.)

### 4. Run Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📧 Email Setup (Contact Form)

To enable the contact form functionality:

1. **Gmail Setup:**
   - Enable 2-factor authentication
   - Generate an App Password
   - Use your Gmail and App Password in `.env.local`

2. **Alternative Email Providers:**
   - Update the email configuration in the contact API route
   - Modify SMTP settings as needed

## 🏗️ Build & Deploy

### Local Build

\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel

1. **Connect to Vercel:**
   \`\`\`bash
   npm i -g vercel
   vercel login
   vercel
   \`\`\`

2. **Environment Variables:**
   - Add your environment variables in Vercel dashboard
   - Ensure `EMAIL_USER` and `EMAIL_PASS` are configured

3. **Automatic Deployment:**
   - Push to main branch for automatic deployment
   - Or deploy manually with `vercel --prod`

## 📱 PWA Installation

The website can be installed as a Progressive Web App:

1. **Mobile (Chrome/Safari):**
   - Visit the website
   - Tap "Add to Home Screen" when prompted
   - Or use browser menu → "Install App"

2. **Desktop (Chrome/Edge):**
   - Click the install icon in the address bar
   - Or use browser menu → "Install [App Name]"

## 🗂️ Project Structure

\`\`\`
├── app/                    # Next.js 15 App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── resources/         # Resources hub
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── mobile-navigation.tsx
│   ├── mobile-touch-handler.tsx
│   └── pwa-install-prompt.tsx
├── public/               # Static assets
│   ├── sw.js            # Service worker
│   └── favicon.png      # App icon
└── README.md            # This file
\`\`\`

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **PWA:** Custom service worker
- **Email:** Nodemailer
- **Deployment:** Vercel
- **Theme Management:** next-themes
- **Analytics:** Google Analytics (configurable)
- **SEO:** Structured data (JSON-LD)
- **QR Codes:** QR Server API integration

## 🔧 Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
\`\`\`

## 🎯 SEO & Analytics Features

### Search Engine Optimization
- **Structured Data:** JSON-LD markup for better search results
- **Meta Tags:** Comprehensive Open Graph and Twitter cards
- **Sitemap:** Auto-generated XML sitemap at `/sitemap.xml`
- **Canonical URLs:** Proper URL canonicalization
- **Breadcrumbs:** Enhanced navigation structure

### Analytics Setup
1. **Google Analytics:**
   - Get your GA4 Measurement ID
   - Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local`
   - Privacy-focused alternatives: Plausible, Fathom Analytics

2. **Privacy Considerations:**
   - GDPR compliant setup available
   - Cookie consent integration ready
   - Analytics can be disabled via environment variables

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues:

1. **Email not sending:**
   - Check environment variables
   - Verify Gmail App Password
   - Ensure 2FA is enabled

2. **PWA not installing:**
   - Check HTTPS (required for PWA)
   - Verify manifest.json is accessible
   - Check service worker registration

3. **Build errors:**
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

4. **Theme toggle not working:**
   - Ensure next-themes is properly configured
   - Check if system theme detection is enabled
   - Verify theme provider wraps the application

5. **QR codes not loading:**
   - Check internet connection for QR Server API
   - Verify donation addresses are properly formatted
   - Ensure CORS is not blocking external QR generation

6. **Sitemap not accessible:**
   - Navigate to `/sitemap.xml` to test generation
   - Check NEXT_PUBLIC_SITE_URL environment variable
   - Verify all routes are included in sitemap configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:
- Create an issue on GitHub
- Contact via the website contact form
- Email: your-email@example.com

---

**Built with ❤️ for the Dogecoin community**
