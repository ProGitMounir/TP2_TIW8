/* import React from 'react';
import type { PublicEvent } from '../models';

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
  
  export default AppToolbar; */
import React from 'react'
import type { PublicEvent } from '../models'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  events: Array<PublicEvent>
  currentEventId: number
}

const AppToolbar: React.FC<Props> = ({ events, currentEventId }) => {
  const location = useLocation()
  const isAdmin = location.pathname.includes('/admin')

  return (
    <div style={{ background: '#ddd', padding: '10px' }}>
      <h1>Événement #{currentEventId}</h1>
      <nav>
        {events.map(event => (
          <Link
            key={event.id}
            to={`${isAdmin ? '/admin' : ''}/event/${event.id}`}
            style={{ marginRight: '10px' }}
          >
            {event.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default AppToolbar
