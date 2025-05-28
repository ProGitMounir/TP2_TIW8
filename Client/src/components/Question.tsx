import React from 'react'
import { useDispatch } from 'react-redux'
import { upvoteQuestion } from '../slices/eventsSlice'
import type { AppDispatch } from '../store'
import type { Question as QuestionType } from '../models/models'

interface Props {
  eventId: string
  question: QuestionType
}

const Question: React.FC<Props> = ({ eventId, question }) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="border p-4 my-2 rounded shadow">
      <p className="text-lg">{question.content}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => dispatch(upvoteQuestion({ eventId, questionId: question.id }))}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          👍 Upvote
        </button>
        <span className="ml-3 text-sm text-gray-700">{question.upvotes || 0} votes</span>
      </div>
    </div>
  )
}

export default Question
