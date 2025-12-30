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
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Droplets className="h-8 w-8 text-accent" />
        <div>
          <CardTitle>Water Supply Updates</CardTitle>
          <CardDescription>Current notices and supply timings.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {waterUpdates.map((update, index) => (
            <div key={update.id}>
              <div className="mb-2">
                <h3 className="font-semibold">{update.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(update.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <p className="text-sm">{update.message}</p>
              {index < waterUpdates.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
