import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Water Supply Maintenance',
    description: 'Scheduled water supply maintenance on December 31st from 10 PM to 6 AM in downtown area',
    date: 'Dec 28, 2025',
    priority: 'high',
    category: 'Maintenance',
  },
  {
    id: 2,
    title: 'New Recycling Program Launch',
    description: 'Join our new comprehensive recycling program starting January 1st with better sorting guidelines',
    date: 'Dec 27, 2025',
    priority: 'medium',
    category: 'Environment',
  },
  {
    id: 3,
    title: 'Street Closure Notice',
    description: 'Main Street will be closed from January 5th to January 15th for road repairs',
    date: 'Dec 26, 2025',
    priority: 'high',
    category: 'Transportation',
  },
  {
    id: 4,
    title: 'Community Event: Tree Planting',
    description: 'Join us for a community tree planting event in Central Park. Free saplings for volunteers!',
    date: 'Dec 25, 2025',
    priority: 'low',
    category: 'Community',
  },
  {
    id: 5,
    title: 'New Municipal App Features',
    description: 'We have added real-time service tracking and improved notification system',
    date: 'Dec 24, 2025',
    priority: 'low',
    category: 'Technology',
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'destructive';
    case 'medium':
      return 'default';
    default:
      return 'secondary';
  }
};

export default function AnnouncementsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight flex items-center space-x-2">
          <Bell className="h-8 w-8" />
          <span>Announcements</span>
        </h1>
        <p className="text-muted-foreground mt-2">Stay updated with latest municipal news and updates</p>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant={getPriorityColor(announcement.priority)}>
                      {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)}
                    </Badge>
                    <Badge variant="outline">{announcement.category}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-base">{announcement.description}</CardDescription>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {announcement.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
