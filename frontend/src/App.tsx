import Announcements from '@/components/dashboard/Announcements';
import GarbageSchedule from '@/components/dashboard/GarbageSchedule';
import Leaderboard from '@/components/dashboard/Leaderboard';
import ReportIssue from '@/components/dashboard/ReportIssue';
import ServiceRequests from '@/components/dashboard/ServiceRequests';
import WaterUpdates from '@/components/dashboard/WaterUpdates';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-primary p-2 shadow-md">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                MuniConnect
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="relative mb-8 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-card p-4 text-center md:h-80">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=400&fit=crop"
            alt="City skyline"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-white">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Smart Municipal Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg md:text-xl">
              Your one-stop portal for all city services and updates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Announcements />
          </div>
          <WaterUpdates />
          <div className="lg:col-span-2">
            <ReportIssue />
          </div>
          <GarbageSchedule />
          <div className="lg:col-span-2">
            <ServiceRequests />
          </div>
          <Leaderboard />
        </div>
      </main>

      <footer className="mt-12 border-t border-border bg-background/80 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} MuniConnect. All rights reserved.</p>
          <p className="mt-1">
            City Administration Building, 123 Main St, Anytown
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App
