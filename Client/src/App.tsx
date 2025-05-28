// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import ParticipantEventPage from './pages/ParticipantEventPage'
import QuestionView from './pages/QuestionView'
import AdminEventPage from './pages/AdminEventPage'

function App() {
  return (
    <Routes>
      <Route path="/admin/event/:eventId" element={<AdminEventPage />} />
      <Route path="/event/:eventId" element={<ParticipantEventPage />} />
      <Route path="/event/:eventId/question/:questionId" element={<QuestionView />} />
      {/* Route de fallback au cas où */}
      <Route path="*" element={<p>Page non trouvée</p>} />
    </Routes>
  )
}

export default App
