export interface Question {
  id: number;
  content: string;
  color: string;
  author: string;
}

export interface PublicEvent {
  id: number;
  title: string;
  questions: Question[];
}
