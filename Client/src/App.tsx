/* import React, { useState } from 'react';
import AppToolbar from './components/AppToolBar';
import EventPanel from './components/EventPanel';
import type { PublicEvent } from './models';

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
  
  export default App; */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import './App.css'

const App = () => {
  return (
    <Routes>
      {/* Redirection vers un événement par défaut */}
      <Route path="/" element={<Navigate to="/admin/event/1" />} />
      
      {/* Vue admin */}
      <Route path="/admin/event/:eventId" element={<EventPage isAdmin={true} />} />

      {/* Vue participant */}
      <Route path="/event/:eventId" element={<EventPage isAdmin={false} />} />

      {/* Page de question unique */}
      <Route path="/event/:eventId/question/:questionId" element={<SingleQuestionPage />} />
    </Routes>
  )
}

export default App
