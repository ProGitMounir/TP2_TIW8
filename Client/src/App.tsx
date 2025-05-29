// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import ParticipantEventPage from './pages/ParticipantEventPage'
import QuestionView from './pages/AddQuestionPage'
import AdminEventPage from './pages/AdminEventPage'
import Navbar from './components/navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/event/:eventId" element={<AdminEventPage />} />
        <Route path="/event/:eventId" element={<ParticipantEventPage />} />
        <Route path="/event/:eventId/question/:questionId" element={<QuestionView />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
