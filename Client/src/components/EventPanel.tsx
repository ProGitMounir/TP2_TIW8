import React from 'react';
import type { PublicEvent } from '../models/models';
import Question from './Question';

interface Props {
  event: PublicEvent;
}

const EventPanel: React.FC<Props> = ({ event }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
      {event.questions.length === 0 ? (
        <p>Aucune question pour cet événement.</p>
      ) : (
        <div>
          {event.questions.map((q) => (
            <Question key={q.id} eventId={event.id} question={q} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventPanel;
