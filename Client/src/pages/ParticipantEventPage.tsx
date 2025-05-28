// src/pages/ParticipantEventPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EventPanel from '../components/EventPanel';
import type { RootState } from '../store';

const ParticipantEventPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const event = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === eventId)
  );

  if (!event) return <p>Événement introuvable.</p>;

  return (
    <div className="p-4">
      <EventPanel event={event} />
    </div>
  );
};

export default ParticipantEventPage;
