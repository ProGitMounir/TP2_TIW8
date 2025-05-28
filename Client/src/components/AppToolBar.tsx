import React from 'react';
import type { PublicEvent } from '../models';

/* interface Props {
  events: PublicEvent[];
  onSelectEvent: (id: number) => void;
  selectedId: number | null;
}

const AppToolbar: React.FC<Props> = ({ events, onSelectEvent, selectedId }) => {
  return (
    <div>
      <h1>Choisissez un événement</h1>
      <ul>
        {events.map((event) => (
          <li
            key={event.id}
            style={{
              cursor: 'pointer',
              fontWeight: selectedId === event.id ? 'bold' : 'normal',
            }}
            onClick={() => onSelectEvent(event.id)}
          >
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppToolbar; */
interface Props {
    events: PublicEvent[];
    onSelectEvent: (id: string) => void;
  }
  
  const AppToolbar: React.FC<Props> = ({ events, onSelectEvent }) => {
    return (
      <div style={{ background: "#333", color: "#fff", padding: 10 }}>
        <h1 style={{ margin: 0 }}>Choisissez un événement</h1>
        <select onChange={(e) => onSelectEvent(e.target.value)} style={{ marginTop: 10 }}>
          {events.map((ev) => (
            <option key={ev.id} value={ev.id}>
              {ev.title}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default AppToolbar;