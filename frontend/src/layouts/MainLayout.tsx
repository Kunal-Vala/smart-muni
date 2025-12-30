import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Leaf, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MainLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Add logout logic
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="rounded-lg bg-primary p-2 shadow-md">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">MuniConnect</h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/announcements" className="text-sm font-medium hover:text-primary transition-colors">
                Announcements
              </Link>
              <Link to="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
                Leaderboard
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </nav>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
