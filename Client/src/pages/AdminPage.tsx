import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../store'
import { setCurrentEventId } from "../slices/eventsSlice";
import EventPage from "./EventPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface AdminPageProps {
  isAdmin: boolean;
}

// Page d'administration
const AdminPage: React.FC<AdminPageProps> = ({ isAdmin }) => {
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

        {/* Sélecteur d'événements pour l'admin */}
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

        {currentEventId && (
          <div className="mt-6">
            <EventPage isAdmin={true} overrideEventId={currentEventId} /> {/* on passe isAdmin à true pour l'admin */ }
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;
