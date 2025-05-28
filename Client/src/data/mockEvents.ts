import type { PublicEvent } from "../models";

export const eventsMock: PublicEvent[] = [
  {
    id: 1,
    title: "Événement Alpha",
    questions: [
      { id: 1, content: "Question A1", color: "red", author: "Alice" },
      { id: 2, content: "Question A2", color: "blue", author: "Bob" },
    ],
  },
  {
    id: 2,
    title: "Événement Beta",
    questions: [
      { id: 1, content: "Question B1", color: "green", author: "Charlie" },
    ],
  },
];
