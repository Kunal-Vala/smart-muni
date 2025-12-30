import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { leaderboard } from '@/lib/data';
import { Trophy } from 'lucide-react';

export default function Leaderboard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Trophy className="h-8 w-8 text-accent" />
        <div>
          <CardTitle>Citizen Leaderboard</CardTitle>
          <CardDescription>Top contributors to our community.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {leaderboard.map((user) => (
            <li key={user.rank} className="flex items-center space-x-4">
              <span className="w-6 text-center text-lg font-bold text-muted-foreground">
                {user.rank}
              </span>
              <Avatar>
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold">{user.name}</p>
              </div>
              <div className="font-bold text-primary">
                {user.points.toLocaleString()} pts
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
