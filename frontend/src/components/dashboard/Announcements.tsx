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
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Megaphone className="h-8 w-8 text-accent" />
        <div>
          <CardTitle>Municipal Announcements</CardTitle>
          <CardDescription>
            Latest news and updates from the city council.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={announcement.id}>
                <div className="mb-2">
                  <h3 className="font-semibold">{announcement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(announcement.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <p className="text-sm">{announcement.content}</p>
                {index < announcements.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
