# Smart Muni

A modern municipal services dashboard for managing and tracking city-wide utilities, requests, and announcements.

**Live Demo:** [https://smart-muni.vercel.app/](https://smart-muni.vercel.app/)

## Features

- 📢 **Announcements** - Stay updated with city announcements
- 🗑️ **Garbage Schedule** - View and manage garbage collection schedules
- 🏆 **Leaderboard** - Community engagement and contribution tracking
- 🔧 **Service Requests** - Submit and track service requests
- 💧 **Water Updates** - Real-time water management information
- 📋 **Report Issues** - Report municipal issues directly

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with PostCSS
- **UI Components:** Shadcn/ui
- **Code Quality:** ESLint

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kunal-Vala/smart-muni.git
cd smart-muni/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── dashboard/    # Dashboard feature components
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and types
│   └── App.tsx          # Main application component
├── public/              # Static assets
└── vite.config.ts       # Vite configuration
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Any push to the `main` branch automatically triggers a new deployment.

## License

This project is open source and available under the MIT License.
