import React from 'react'
import type { Question } from '../models'

interface Props {
  questions: Question[]
}

const EventPanel: React.FC<Props> = ({ questions }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Liste des Questions</h3>
      <ul className="space-y-4">
        {questions.map(q => (
          <li key={q.id} style={{ color: q.color }}  className="bg-white shadow-md p-4 rounded-lg border">
            <p className="text-base">{q.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventPanel
