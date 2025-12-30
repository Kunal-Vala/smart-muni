import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { garbageSchedule } from '@/lib/data';
import { Trash2 } from 'lucide-react';

export default function GarbageSchedule() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Trash2 className="h-8 w-8 text-accent" />
        <div>
          <CardTitle>Garbage Collection</CardTitle>
          <CardDescription>Weekly collection schedule.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Area</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {garbageSchedule.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.day}</TableCell>
                <TableCell>{item.area}</TableCell>
                <TableCell className="text-right">{item.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
