import Announcements from '@/components/dashboard/Announcements';
import GarbageSchedule from '@/components/dashboard/GarbageSchedule';
import Leaderboard from '@/components/dashboard/Leaderboard';
import ReportIssue from '@/components/dashboard/ReportIssue';
import ServiceRequests from '@/components/dashboard/ServiceRequests';
import WaterUpdates from '@/components/dashboard/WaterUpdates';

export default function Dashboard() {
  return (
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
        {/* Left Column - 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          <Announcements />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ServiceRequests />
            <ReportIssue />
          </div>
        </div>

        {/* Right Column - 1 col */}
        <div className="space-y-6">
          <WaterUpdates />
          <GarbageSchedule />
          <Leaderboard />
        </div>
      </div>
    </main>
  );
}
