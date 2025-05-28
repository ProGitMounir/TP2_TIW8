// src/pages/QuestionView.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import QuestionCard from '../components/Question';

const QuestionView: React.FC = () => {
  const { eventId, questionId } = useParams<{ eventId: string; questionId: string }>();

  const question = useSelector((state: RootState) =>
    state.events.events
      .find((event) => event.id === eventId)
      ?.questions.find((q) => q.id === questionId)
  );

  if (!question) return <p>Question introuvable.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Vue de la question</h1>
      <QuestionCard eventId={eventId!} question={question} />
    </div>
  );
};

export default QuestionView;
