import React from 'react';
import type { PublicEvent } from '../models/models';

interface Props {
  events: PublicEvent[];
  currentEventId: string;
  onSelectEvent: (id: string) => void;
}

const AppToolbar: React.FC<Props> = ({ events, currentEventId, onSelectEvent }) => {
  return (
    <div>
      <h1>Événement courant : {currentEventId}</h1>
      <select value={currentEventId} onChange={(e) => onSelectEvent(e.target.value)}>
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppToolbar;
