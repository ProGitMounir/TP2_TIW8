// components/NewQuestionForm.tsx
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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Votre question"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Votre nom"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Poser la question</button>
    </form>
  )
}

export default NewQuestionForm
