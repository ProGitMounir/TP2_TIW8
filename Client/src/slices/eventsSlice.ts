// slices/eventsSlice.ts
/* import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Question {
  id: string;
  text: string;
  votes: number;
}

interface Event {
  id: number;
  name: string;
  questions: Question[];
}

interface EventsState {
  events: Event[];
  currentEvent: number | null;
}

const initialState: EventsState = {
  events: [
    {
      id: 1,
      name: "Event 1",
      questions: [
        { id: "q1", text: "Question 1", votes: 0 },
        { id: "q2", text: "Question 2", votes: 0 },
      ],
    },
    // Ajoute d’autres events si tu veux
  ],
  currentEvent: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setCurrentEvent: (state, action: PayloadAction<number>) => {
      state.currentEvent = action.payload;
    },
    upvoteQuestion: (
      state,
      action: PayloadAction<{ eventId: number; questionId: string }>
    ) => {
      const event = state.events.find((e) => e.id === action.payload.eventId);
      if (event) {
        const question = event.questions.find(
          (q) => q.id === action.payload.questionId
        );
        if (question) {
          question.votes += 1;
        }
      }
    },
    createQuestion: (
      state,
      action: PayloadAction<{ eventId: number; question: Question }>
    ) => {
      const { eventId, question } = action.payload;
      const event = state.events.find((e) => e.id === eventId);
      if (event) {
        event.questions.push(question);
      }
    },
  },
});

export const { setCurrentEvent, upvoteQuestion, createQuestion } =
  eventsSlice.actions;
export default eventsSlice.reducer; */

// slices/eventsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { PublicEvent, Question } from "../models";
import { eventsMock } from "../data/mockEvents";

interface EventsState {
  events: PublicEvent[];
}

const initialState: EventsState = {
  events: eventsMock,
};

interface AddQuestionPayload {
  eventId: number;
  question: Omit<Question, "id">; // on générera l'id automatiquement
}

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    upvoteQuestion: (
      state,
      action: PayloadAction<{ eventId: number; questionId: number }>
    ) => {
      const { eventId, questionId } = action.payload;
      const event = state.events.find((e) => e.id === eventId);
      const question = event?.questions.find((q) => q.id === questionId);
      if (question) {
        question.votes += 1;
      }
    },

    addQuestion: (state, action: PayloadAction<AddQuestionPayload>) => {
      const { eventId, question } = action.payload;
      const event = state.events.find((e) => e.id === eventId);
      if (event) {
        const newId =
          event.questions.length > 0
            ? Math.max(...event.questions.map((q) => q.id)) + 1
            : 1;
        event.questions.push({ ...question, id: newId });
      }
    },
  },
});

export const { upvoteQuestion, addQuestion } = eventsSlice.actions;
export default eventsSlice.reducer;
