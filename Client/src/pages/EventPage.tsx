import React from 'react'
import { useParams } from 'react-router-dom'
import AppToolbar from '../components/AppToolBar'
import EventPanel from '../components/EventPanel'
import { eventsMock } from '../data/mockEvents'
import type { PublicEvent } from '../models'

interface Props {
  isAdmin: boolean
}

const EventPage: React.FC<Props> = ({ isAdmin }) => {
  const { eventId } = useParams<{ eventId: string }>()
  const event: PublicEvent | undefined = eventsMock.find(e => e.id === parseInt(eventId || ''))

  if (!event) {
    return <div>Événement introuvable</div>
  }

  return (
    <div>
      <AppToolbar events={eventsMock} currentEventId={event.id} />
      <h2>{isAdmin ? '[ADMIN]' : '[PARTICIPANT]'} Événement #{event.id}</h2>
      <EventPanel questions={event.questions} />
    </div>
  )
}

export default EventPage
