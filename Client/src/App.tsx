import React, { useState } from 'react';
import AppToolbar from './components/AppToolBar';
import EventPanel from './components/EventPanel';
import type { PublicEvent } from './models';

/* const mockEvents: PublicEvent[] = [
  { id: 1, title: 'Événement React' },
  { id: 2, title: 'Événement Redux' },
];

const App: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const handleSelectEvent = (id: number) => {
    setSelectedEventId(id);
  };

  return (
    <div>
      <AppToolbar events={mockEvents} onSelectEvent={handleSelectEvent} selectedId={selectedEventId} />
      <EventPanel selectedId={selectedEventId} />
    </div>
  );
};

export default App; */
const mockEvents: PublicEvent[] = [
    {
      id: "1",
      title: "Conférence React",
      questions: [
        { id: "q1", content: "Qu'est-ce qu'un hook ?", color: "#cde", author: "Alice" },
        { id: "q2", content: "Comment gérer le state global ?", author: "Bob" }
      ]
    },
    {
      id: "2",
      title: "Atelier Node.js",
      questions: [
        { id: "q3", content: "Différence entre require et import ?", color: "#fec", author: "Charlie" }
      ]
    }
  ];
  
  const App: React.FC = () => {
    const [currentEventId, setCurrentEventId] = useState<string>("1");
  
    const currentEvent = mockEvents.find((e) => e.id === currentEventId);
  
    return (
      <div>
        <AppToolbar events={mockEvents} onSelectEvent={setCurrentEventId} />
        <EventPanel currentEvent={currentEvent} />
      </div>
    );
  };
  
  export default App;