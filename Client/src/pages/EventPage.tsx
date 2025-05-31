
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



