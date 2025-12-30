import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { waterUpdates } from '@/lib/data';
import { Droplets } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function WaterUpdates() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-accent" />
          <CardTitle className="text-lg">Water Updates</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {waterUpdates.map((update, index) => (
          <div key={update.id}>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold">{update.title}</h3>
              <p className="text-xs text-muted-foreground">
                {new Date(update.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <p className="text-xs leading-relaxed">{update.message}</p>
            </div>
            {index < waterUpdates.length - 1 && <Separator className="mt-3" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
