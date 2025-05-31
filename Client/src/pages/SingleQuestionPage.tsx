
import { useParams, useNavigate } from 'react-router-dom'
import { eventsMock } from '../data/mockEvents'
import type { Question } from '../models'

// Page pour afficher une question spécifique d'un événement
const SingleQuestionPage: React.FC = () => {
  const { eventId, questionId } = useParams()
  const navigate = useNavigate()

  const event = eventsMock.find(e => e.id === parseInt(eventId || ''))
  if (!event) return <div className="text-red-500 p-4">Événement introuvable</div>

  const questionIndex = event.questions.findIndex(q => q.id === parseInt(questionId || ''))
  if (questionIndex === -1) return <div className="text-red-500 p-4">Question introuvable</div>

  const question: Question = event.questions[questionIndex]

  const goToQuestion = (index: number) => {
    const q = event.questions[index]
    navigate(`/event/${event.id}/question/${q.id}`)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        Question #{question.id} de l’événement #{event.id}
      </h2>

      <p className={`text-lg font-medium mb-6`} style={{ color: question.color }}>
        {question.content}
      </p>

      {/* Slide entre question */}
      <div className="flex justify-between">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-4 py-2 rounded disabled:opacity-50"
          onClick={() => goToQuestion(questionIndex - 1)}
          disabled={questionIndex === 0}
        >
          ◀ Précédent
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded disabled:opacity-50"
          onClick={() => goToQuestion(questionIndex + 1)}
          disabled={questionIndex === event.questions.length - 1}
        >
          Suivant ▶
        </button>
      </div>
    </div>
  )
}

export default SingleQuestionPage
