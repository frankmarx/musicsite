# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Meta Pixel setup (MusicLink click tracking)

1. In Meta Events Manager, create a new Pixel (or reuse your existing one) and copy its Pixel ID.
2. For local development, create a `.env` or `.env.local` file with:

```bash
VITE_META_PIXEL_ID=YOUR_PIXEL_ID
```

3. For deployments such as AWS Amplify, set the same variable in your build environment so Vite can inject it at build time.

The project now supports these patterns:

- Local development: read the value from `.env`, `.env.local`, or similar Vite env files.
- Production/CI: read `VITE_META_PIXEL_ID` from the environment when you deploy.

Restart the dev server after changing environment variables.

The app now sends:

- `PageView` on page load (Meta base code)
- `MusicLinkClick` (custom event) when a `MusicLink` is clicked
- Platform-specific custom events such as `SpotifyClick`, `YouTubeClick`, `AppleMusicClick`, and `PandoraClick`

Use Events Manager Test Events + Pixel Helper to validate events, then use those events in Ads Manager reporting/custom conversions.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
