import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../slices/eventsSlice'
import type { AppDispatch } from '../store'

interface NewQuestionFormProps {
  eventId: number
}

const NewQuestionForm: React.FC<NewQuestionFormProps> = ({ eventId }) => {
  const dispatch = useDispatch<AppDispatch>()

  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [color, setColor] = useState('#000000')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim() === '' || author.trim() === '') return

    dispatch(
      addQuestion({
        eventId,
        question: {
          content,
          author,
          color,
          votes: 0,
        },
      })
    )

    // Réinitialiser les champs
    setContent('')
    setAuthor('')
    setColor('#000000')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-4 max-w-md mx-auto">
  <input
    type="text"
    placeholder="Votre question"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    required
    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="text"
    placeholder="Votre nom"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    required
    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <div className="flex items-center gap-2">
    <label htmlFor="colorInput" className="text-sm text-gray-700">Choisir une couleur :</label>
    <input
      id="colorInput"
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      className="w-8 h-8 p-0 border-0"
    />
  </div>
  <button
    type="submit"
    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
  >
    Poser la question
  </button>
</form>

  )
}

export default NewQuestionForm
