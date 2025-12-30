export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface GarbageSchedule {
  id: string;
  day: string;
  area: string;
  time: string;
}

export interface WaterUpdate {
  id: string;
  title: string;
  message: string;
  date: string;
}

export type IssueStatus = 'Pending' | 'In Progress' | 'Resolved';

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  status: IssueStatus;
  imageUrl?: string;
  submittedAt: Date;
}

export type ServiceRequestStatus = 'Submitted' | 'In Review' | 'Approved' | 'Rejected';

export interface ServiceRequest {
  id: string;
  type: string;
  name: string;
  status: ServiceRequestStatus;
  date: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatarUrl: string;
}
