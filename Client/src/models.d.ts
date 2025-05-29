export interface Question {
  id: number;
  content: string;
  color: string;
  author: string;
  votes: number;
}

export interface PublicEvent {
  id: number;
  title: string;
  questions: Question[];
}
