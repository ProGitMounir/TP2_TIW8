
import { useDispatch } from 'react-redux'
import { upvoteQuestion, deleteQuestion } from '../slices/eventsSlice'
import type { AppDispatch } from '../store'

interface QuestionProps {
  eventId: number
  questionId: number
  text: string

  color: string
  author: string 

  votes: number

  isAdmin?: boolean   // <- ajout optionnel
}

const Question: React.FC<QuestionProps> = ({ eventId, questionId, text, votes, color, author, isAdmin = false }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleUpvote = () => {
    dispatch(upvoteQuestion({ eventId, questionId }))
  }

  const handleDelete = () => {
    if (window.confirm("Voulez-vous vraiment supprimer cette question ?")) {
      dispatch(deleteQuestion({ eventId, questionId }))
    }
  }

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm">
      <p className="text-lg font-medium flex items-center gap-2">
        {text}
        <span 
          className="w-8 h-8 rounded inline-block border border-gray-300" 
          style={{ backgroundColor: color }}
          aria-label={`Couleur: ${color}`}
        />
      </p>
      <p className="text-sm text-gray-600 mb-2">
      • Votes: <span className="font-semibold text-gray-800">{votes}</span><br /> • Auteur: <span className="font-semibold text-gray-800">{author}</span>
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleUpvote}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
        >
          Upvote
        </button>
        {isAdmin && (
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Supprimer
          </button>
        )}
      </div>
    </div>

  )
}

export default Question