import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  rank: number;
  name: string;
  points: number;
  contributions: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: 1, rank: 1, name: 'Alex Johnson', points: 2450, contributions: 45 },
  { id: 2, rank: 2, name: 'Maria Garcia', points: 2180, contributions: 38 },
  { id: 3, rank: 3, name: 'James Chen', points: 1920, contributions: 32 },
  { id: 4, rank: 4, name: 'Sarah Williams', points: 1750, contributions: 28 },
  { id: 5, rank: 5, name: 'Michael Brown', points: 1620, contributions: 25 },
  { id: 6, rank: 6, name: 'Emma Davis', points: 1480, contributions: 22 },
  { id: 7, rank: 7, name: 'David Miller', points: 1320, contributions: 19 },
  { id: 8, rank: 8, name: 'Lisa Anderson', points: 1150, contributions: 16 },
];

export default function LeaderboardPage() {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-orange-600" />;
    return null;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Community Leaderboard</CardTitle>
          <CardDescription>Top contributors to municipal services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center justify-center w-10 h-10">
                    {getRankIcon(entry.rank) || (
                      <span className="text-lg font-bold text-muted-foreground">{entry.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{entry.name}</p>
                    <p className="text-sm text-muted-foreground">{entry.contributions} contributions</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-lg">
                  {entry.points} pts
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
