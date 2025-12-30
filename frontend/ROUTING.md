# Smart Muni Routing Guide

## Routes Setup

The application now uses React Router v7 for client-side routing. Below are all available routes:

### Public Routes
- **`/login`** - User login page
  - Email and password authentication
  - Redirects to `/dashboard` after successful login

### Protected Routes (requires authentication)
All these routes use the `MainLayout` which includes header navigation and logout functionality.

- **`/` (root)** - Redirects to `/dashboard`
- **`/dashboard`** - Main dashboard with all widgets
  - Displays announcements, water updates, service requests, reports, garbage schedule, and leaderboard
  
- **`/services`** - Municipal services page
  - Browse all available city services
  - Water Management
  - Waste Management
  - Infrastructure
  - Emergency Services
  
- **`/announcements`** - Announcements feed
  - View all city announcements
  - Filtered by priority and category
  - Includes maintenance notices, events, and updates
  
- **`/leaderboard`** - Community leaderboard
  - Top community contributors ranked by points
  - View contribution counts
  - Medal system for top 3 contributors

### Error Routes
- **`*` (any unknown route)** - 404 Not Found page
  - Shows when user navigates to non-existent routes
  - Button to return to dashboard

## Layout Structure

### MainLayout
All protected routes are wrapped in `MainLayout` which includes:
- **Header**: Logo, navigation links, and logout button
- **Outlet**: Where page content is rendered
- Responsive design with hidden mobile menu navigation

Navigation Links:
- Dashboard
- Services
- Announcements
- Leaderboard
- Logout

## File Structure

```
src/
├── pages/
│   ├── Login.tsx          # Login page
│   ├── Dashboard.tsx      # Dashboard page
│   ├── Services.tsx       # Services listing page
│   ├── Announcements.tsx  # Announcements feed page
│   ├── Leaderboard.tsx    # Leaderboard page
│   └── NotFound.tsx       # 404 page
├── layouts/
│   └── MainLayout.tsx     # Main layout with header navigation
└── App.tsx                # Route configuration
```

## Navigation Examples

```typescript
// Using the router for navigation
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard');      // Go to dashboard
navigate('/services');       // Go to services
navigate('/login');          // Go to login
```

## TODO: Authentication

The login system currently is a placeholder. You need to implement:
1. Authentication logic in the Login component
2. Protected route wrapper to check if user is authenticated
3. Token storage and management
4. Logout functionality that clears stored tokens

## Dependencies Added

- `react-router-dom@^7.0.0` - Client-side routing library
