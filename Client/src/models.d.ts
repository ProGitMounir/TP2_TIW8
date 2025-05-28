export interface Question {
  id: string;
  content: string;
  color?: string;
  author?: string;
}

export interface PublicEvent {
  id: number;
  title: string;
  questions: Question[];
}
