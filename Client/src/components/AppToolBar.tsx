
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
