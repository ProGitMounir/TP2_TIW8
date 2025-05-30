import type { PublicEvent } from "../models"; // import du model class PublicEvent (c'est l'evenement)

// fichier de données static pour les événements
export const eventsMock: PublicEvent[] = [
  {
    id: 1,
    title: "Événement Alpha",
    questions: [
      {
        id: 1,
        content: "Question A1",
        color: "green",
        author: "Alice",
        votes: 0,
      },
      {
        id: 2,
        content: "Question A2",
        color: "yellow",
        author: "Bob",
        votes: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Événement Beta",
    questions: [
      {
        id: 1,
        content: "Question B1",
        color: "orange",
        author: "Charlie",
        votes: 0,
      },
    ],
  },
];
