/* import React from 'react'
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

export default EventPage */

// 2
/* import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import Question from '../components/Question'

interface EventPageProps {
  isAdmin: boolean
}

const EventPage: React.FC<EventPageProps> = ({ isAdmin }) => {
  const { eventId } = useParams()
  const numericEventId = Number(eventId)

  const event = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === numericEventId)
  )

  if (!event) {
    return <div>Événement non trouvé</div>
  }

  return (
    <div>
      <h1>{event.name}</h1>
      {event.questions.map((q) => (
        <Question
          key={q.id}
          eventId={event.id}
          questionId={q.id}
          text={q.text}
          votes={q.votes}
        />
      ))}
    </div>
  )
}

export default EventPage */

//3
/* import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import Question from '../components/Question'
import NewQuestionForm from '../components/NewQuestionForm'

interface EventPageProps {
  isAdmin: boolean
}

const EventPage: React.FC<EventPageProps> = ({ isAdmin }) => {
  const { eventId } = useParams()
  const numericEventId = Number(eventId)

  const event = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === numericEventId)
  )

  if (!event) return <div>Événement introuvable</div>

  return (
    <div>
      <h1>{event.title}</h1>

      {!isAdmin && <NewQuestionForm eventId={event.id} />}

      {event.questions.map((q) => (
        <Question
          key={q.id}
          eventId={event.id}
          questionId={q.id}
          text={q.content}
          votes={q.votes}
        />
      ))}
    </div>
  )
}

export default EventPage */

//4
/* import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import Question from '../components/Question'
import NewQuestionForm from '../components/NewQuestionForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface EventPageProps {
  isAdmin: boolean
}

const EventPage: React.FC<EventPageProps> = ({ isAdmin }) => {
  const { eventId } = useParams()
  const numericEventId = Number(eventId)

  const event = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === numericEventId)
  )

  if (!event) return <div>Événement introuvable</div>

  return (
    <div>
      <Header />
      <h1>{event.title}</h1>

      {!isAdmin && <NewQuestionForm eventId={event.id} />}

      {event.questions.map((q) => (
        <Question
          key={q.id}
          eventId={event.id}
          questionId={q.id}
          text={q.content}
          votes={q.votes}
        />
      ))}
      <Footer/>
    </div>
  )
}

export default EventPage */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import Question from '../components/Question'
import NewQuestionForm from '../components/NewQuestionForm'

interface EventPageProps {
  isAdmin: boolean;
  overrideEventId?: number; // <- Ajouté
}

// Page d'événement et affichage des questions
const EventPage: React.FC<EventPageProps> = ({ isAdmin, overrideEventId }) => {
  const { eventId: eventIdFromUrl } = useParams();
  const numericEventId = overrideEventId ?? Number(eventIdFromUrl);

  const event = useSelector((state: RootState) =>
    state.events.events.find((e) => e.id === numericEventId)
  );

  if (!event) return <div>Événement introuvable</div>;

  return (
    <div>
      <h1>{event.title}</h1>

      {/* Si isAdmin === Fasle on affiche le formulaire de question */}
      {!isAdmin && <NewQuestionForm eventId={event.id} />}

      {/* Affichage des questions selon l'evenement */}
      {event.questions.map((q) => (
        <Question
          key={q.id}
          eventId={event.id}
          questionId={q.id}
          text={q.content}
          votes={q.votes}
          author={q.author}
          color={q.color}
          isAdmin={isAdmin} 
        />
      ))}
    </div>
  );
};

export default EventPage;



