// components/Question.tsx
import React from 'react'
import { useDispatch } from 'react-redux'
import { upvoteQuestion } from '../slices/eventsSlice'
import type { AppDispatch } from '../store'

interface QuestionProps {
  eventId: number
  questionId: string
  text: string
  votes: number
}

const Question: React.FC<QuestionProps> = ({ eventId, questionId, text, votes }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleUpvote = () => {
    dispatch(upvoteQuestion({ eventId, questionId }))
  }

  return (
    <div style={{ border: '1px solid gray', marginBottom: '8px', padding: '8px' }}>
      <p>{text}</p>
      <p>Votes: {votes}</p>
      <button onClick={handleUpvote}>Upvote</button>
    </div>
  )
}

export default Question
