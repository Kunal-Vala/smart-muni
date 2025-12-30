import type {
  Announcement,
  GarbageSchedule,
  WaterUpdate,
  LeaderboardEntry,
} from './types';

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Public Park Renovation',
    content:
      'The central park will be closed for renovation from July 1st to August 15th.',
    date: '2024-06-20',
  },
  {
    id: '2',
    title: 'New Recycling Program Launch',
    content:
      'A new city-wide recycling program will start next month. Bins will be distributed door-to-door.',
    date: '2024-06-18',
  },
  {
    id: '3',
    title: 'Annual Town Hall Meeting',
    content:
      'The annual town hall meeting is scheduled for July 5th at 6 PM. All citizens are invited.',
    date: '2024-06-15',
  },
];

export const garbageSchedule: GarbageSchedule[] = [
  { id: '1', day: 'Monday', area: 'North District', time: '7:00 AM - 9:00 AM' },
  { id: '2', day: 'Tuesday', area: 'South District', time: '7:00 AM - 9:00 AM' },
  { id: '3', day: 'Wednesday', area: 'East District', time: '7:00 AM - 9:00 AM' },
  { id: '4', day: 'Thursday', area: 'West District', time: '7:00 AM - 9:00 AM' },
  {
    id: '5',
    day: 'Friday',
    area: 'Central Business District',
    time: '6:00 AM - 8:00 AM',
  },
];

export const waterUpdates: WaterUpdate[] = [
  {
    id: '1',
    title: 'Scheduled Maintenance',
    message:
      'Water supply will be interrupted in the West District on June 25th from 10 AM to 2 PM for scheduled maintenance.',
    date: '2024-06-22',
  },
  {
    id: '2',
    title: 'Water Quality Report',
    message:
      'The latest water quality report is available on the city website. All parameters are within safe limits.',
    date: '2024-06-21',
  },
];

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Aarav Sharma',
    points: 1250,
    avatarUrl: 'https://picsum.photos/seed/avatar1/40/40',
  },
  {
    rank: 2,
    name: 'Vihan Pathak',
    points: 1100,
    avatarUrl: 'https://picsum.photos/seed/avatar2/40/40',
  },
  {
    rank: 3,
    name: 'Diya ',
    points: 980,
    avatarUrl: 'https://picsum.photos/seed/avatar3/40/40',
  },
  {
    rank: 4,
    name: 'Monica',
    points: 950,
    avatarUrl: 'https://picsum.photos/seed/avatar4/40/40',
  },
  {
    rank: 5,
    name: 'Myra',
    points: 820,
    avatarUrl: 'https://picsum.photos/seed/avatar5/40/40',
  },
];

export const issueCategories = [
  'Roads',
  'Streetlights',
  'Waste Management',
  'Water Supply',
  'Public Parks',
  'Other',
];

export const serviceRequestTypes = [
  'Birth Certificate',
  'Property Tax Payment',
  'Building Permit',
  'Business License',
];
