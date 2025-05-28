export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  timeZone: string;
  status: string;
  settings: EventSettings;
  questions: Question[];
  participants: Participant[];
  moderators: Moderator[];
}

export interface EventSettings {
  moderationEnabled: boolean;
  allowAnonymousQuestions: boolean;
  allowQuestionUpvoting: boolean;
  allowResponses: boolean;
  maxQuestionsPerUser: number;
  profanityFilter: boolean;
  requireApproval: boolean;
}

export interface Question {
  id: string;
  type: 'question';
  content: string;
  author: string;
  metadata: QuestionMetadata;
  isAnonymous: boolean;
  upvotes: number;
  downvotes: number;
}

export interface QuestionMetadata {
  createdAt: string;
  updatedAt: string;
  status: string;
  position: number;
  highlighted: boolean;
  answered: boolean;
}

export interface Poll {
  id: string;
  type: 'poll';
  content: string;
  options: PollOption[];
  metadata: QuestionMetadata;
  upvotes: number;
  downvotes: number;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Participant {
  id: string;
  name?: string;
  email?: string;
  role: 'participant';
  questionsAsked: number;
  votesGiven: number;
}

export type Permission =
  | 'approve'
  | 'reject'
  | 'highlight'
  | 'delete'
  | 'ban_users'
  | 'edit_questions';

export type ModeratorRole = 'moderator' | 'senior_moderator';

export interface Moderator {
  id: string;
  name: string;
  email: string;
  role: ModeratorRole;
  permissions: Permission[];
}

export const defaultPermissionsByRole: Record<ModeratorRole, Permission[]> = {
  moderator: ['approve', 'reject', 'highlight', 'delete'],
  senior_moderator: ['approve', 'reject', 'highlight', 'delete', 'ban_users', 'edit_questions'],
};







