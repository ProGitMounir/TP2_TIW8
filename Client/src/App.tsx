import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import ParticipantPage from './pages/ParticipantPage'
import { isMobile } from 'react-device-detect' // <-- Import pour détecter si l'appareil est mobile
import './App.css' // <-- Import du fichier CSS

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Redirection mobile pour la page admin */}
      <Route
        path="/admin"
        element={
          isMobile ? (
            <Navigate to="/participant" replace />
          ) : (
            <AdminPage isAdmin={true} />
          )
        }
      />

      <Route path="/participant" element={<ParticipantPage isAdmin={false} />} />

      {/* Admin page événement protégée également */}
      <Route
        path="/admin/event/:eventId"
        element={
          isMobile ? (
            <Navigate to="/participant" replace />
          ) : (
            <EventPage isAdmin={true} />
          )
        }
      />

      {/* Page événement selon l'id */}
      <Route path="/event/:eventId" element={<EventPage isAdmin={false} />} />

      {/* Page pour afficher une question spécifique d'un événement selon leur id */}
      <Route path="/event/:eventId/question/:questionId" element={<SingleQuestionPage />} />
    </Routes>
  )
}

export default App