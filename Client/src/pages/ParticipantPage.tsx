import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../store';
import { setCurrentEventId } from "../slices/eventsSlice";
import EventPage from "./EventPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ParticipantPageProps {
  isAdmin: boolean;
}

// Page pour les participants
const ParticipantPage: React.FC<ParticipantPageProps> = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);
  const currentEventId = useSelector(
    (state: RootState) => state.events.currentEventId
  );

  return (
    <>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Sélectionne un événement</h2>

        {/* Sélecteur d'événements pour les participants */}
        <select
          value={currentEventId ?? ""}
          onChange={(e) => dispatch(setCurrentEventId(Number(e.target.value)))}
          className="border border-gray-300 rounded-md px-4 py-2 mb-6"
        >
          <option value="">-- Choisir un événement --</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title}
            </option>
          ))}
        </select>
        <h3 className="bg-blue-100 text-blue-800 border border-blue-300 rounded-md p-4 mb-4 shadow-sm">
          En tant que Participant, vous pouvez visualiser les questions d’un événement, augmenter les votes à l’infini et ajouter des questions.
        </h3>

        {currentEventId && (
          <div className="mt-6">
            <EventPage isAdmin={isAdmin} overrideEventId={currentEventId} />{/* on passe isAdmin pour afficher ou non le formulaire de nouvelle question */ }
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ParticipantPage;
