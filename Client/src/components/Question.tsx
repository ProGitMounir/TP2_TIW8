// components/Question.tsx
import React from 'react'

interface QuestionProps {
  eventId: string
  question: {
    id: string
    content: string
    upvotes: number
  }
}

const Question: React.FC<QuestionProps> = ({ eventId, question }) => {
  // logiques etc.
  return (
    <div>
      <p>{question.content}</p>
      <button>👍 Upvote</button>
      <span>{question.upvotes} votes</span>
    </div>
  )
}

export default Question
