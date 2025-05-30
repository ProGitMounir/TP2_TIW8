import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { PublicEvent, Question } from "../models";
import { eventsMock } from "../data/mockEvents";

interface EventsState {
  events: PublicEvent[];
  currentEventId: number | null;
}

const initialState: EventsState = {
  events: eventsMock,
  currentEventId: null,
};

interface AddQuestionPayload {
  eventId: number;
  question: Omit<Question, "id">; // on générera l'id automatiquement
}

// Slice pour gérer les événements et les questions
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    // Action pour définir l'événement courant
    setCurrentEventId: (state, action: PayloadAction<number>) => {
      state.currentEventId = action.payload;
    },
    // Actions pour supprimer
    deleteQuestion: (
      state,
      action: PayloadAction<{ eventId: number; questionId: number }>
    ) => {
      const { eventId, questionId } = action.payload;
      const event = state.events.find((e) => e.id === eventId);
      if (event) {
        event.questions = event.questions.filter((q) => q.id !== questionId);
      }
    },
    // Actions pour upvoter une question
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
    // Action pour ajouter une question
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

export const {
  setCurrentEventId,
  upvoteQuestion,
  addQuestion,
  deleteQuestion,
} = eventsSlice.actions;
export default eventsSlice.reducer;
