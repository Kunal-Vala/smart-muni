import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { announcements } from '@/lib/data';
import { Megaphone } from 'lucide-react';

export default function Announcements() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-accent" />
          <CardTitle className="text-lg">Announcements</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {announcements.slice(0, 3).map((announcement, index) => (
          <div key={announcement.id}>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">{announcement.title}</h3>
              <p className="text-xs text-muted-foreground">
                {new Date(announcement.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <p className="text-xs leading-relaxed line-clamp-2">{announcement.content}</p>
            </div>
            {index < 2 && <Separator className="mt-3" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
