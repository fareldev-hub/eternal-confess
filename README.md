
# Eternal Confess 💕

An interactive romantic confession website built with modern web technologies. Share your feelings through an engaging 13-page love story journey with beautiful animations, music, and WhatsApp integration.

![Eternal Confess](https://img.shields.io/badge/status-active-pink?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?style=flat-square&logo=vite)

## ✨ Features

- **🎵 Interactive Love Story**: 13 engaging pages with romantic messaging and animations
- **🎨 Beautiful UI**: Stunning gradient backgrounds, floating hearts, and smooth animations
- **⌨️ Typing Effects**: Dynamic text animations that bring the confession to life
- **🎶 Background Music**: Integrated audio player with romantic background music
- **📱 WhatsApp Integration**: Send responses directly to WhatsApp
- **💝 Love Meter**: Interactive slider to express level of affection
- **🎭 Interactive Choices**: Meaningful dialogue choices that affect the story flow
- **📝 Personal Messages**: Custom message input for personal confessions
- **💻 Responsive Design**: Works perfectly on all devices
- **🌙 Dark Theme**: Elegant dark theme with romantic color schemes

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd eternal-confess

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your confession website!

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technologies Used

This project is built with modern web technologies:

- **⚡ Vite** - Lightning-fast build tool and development server
- **⚛️ React 18** - Modern frontend framework with hooks
- **📘 TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn/ui** - Beautiful and accessible UI components
- **🎭 Radix UI** - Low-level UI primitives
- **🎵 Lucide React** - Beautiful icons
- **📱 React Router** - Client-side routing
- **🔄 TanStack Query** - Data fetching and state management
- **🎉 Sonner** - Elegant toast notifications
- **💅 Tailwind Animate** - Smooth CSS animations

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── AnimatedText.tsx # Typing animation component
│   ├── FloatingHearts.tsx # Floating hearts animation
│   ├── LoveSlider.tsx   # Interactive love meter
│   ├── StoryButton.tsx  # Custom story buttons
│   ├── StoryCard.tsx    # Main story container
│   └── TypingText.tsx   # Text typing effects
├── pages/               # Page components
│   ├── Index.tsx        # Main confession flow
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Static assets
    └── bg-hero.jpg      # Hero background image
```

## 🎭 How It Works

The confession website follows a beautiful 13-page journey:

1. **Welcome** - Initial greeting and consent
2. **Checking In** - Asking about the person's day
3. **Acknowledgment** - Responding to their answer
4. **Importance** - Asking if they're important to you
5. **Reciprocity** - Expressing mutual importance
6. **Affection** - Asking if they care about you
7. **Love Meter** - Interactive slider for expressing love level
8. **Gratitude** - Thanking them for their honesty
9. **Unlimited Love** - Expressing unlimited affection
10. **Preparation** - Preparing to share something special
11. **Love Declaration** - Animated confession of love
12. **Gratitude** - Thanking for their time and responses
13. **Personal Message** - Form to send personal message via WhatsApp

## 🌐 Deployment

Deploy this romantic confession website to any static hosting service:

- **🚀 Vercel** - Zero-config deployment
- **🌊 Netlify** - Easy drag-and-drop deployment
- **📄 GitHub Pages** - Free hosting for public repos
- **☁️ Any Static Host** - Works with any CDN or hosting provider

Simply run `npm run build` and deploy the `dist` folder!

## 💝 Features in Detail

### 🎵 Audio Integration
- Background music starts when user begins the journey
- Seamless audio playback with user interaction handling
- Audio can be restarted with the confession flow

### 📱 WhatsApp Integration
- Automatically formats responses into a beautiful message
- Direct link to WhatsApp with pre-filled message
- Includes all user choices and love percentage

### 🎨 Visual Effects
- Beautiful gradient backgrounds with romantic colors
- Floating heart animations
- Smooth page transitions
- Typing text effects
- Responsive design for all screen sizes

### 💌 Personalization
- Tracks user responses throughout the journey
- Displays summary of all answers before sending
- Custom message input for personal touch
- Mobile-optimized interface

## 👨‍💻 Developer

Created with ❤️ by **Farel Alfareza**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**💕 Spread love, one confession at a time! 💕**
