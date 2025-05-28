import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Question from '../components/Question'
import type { RootState } from '../store'

const AdminEventPage = () => {
    const { eventId } = useParams()
    const event = useSelector((state: RootState) =>
        state.events.events.find((e) => e.id === eventId)
    )

    if (!event) return <p>Événement introuvable.</p>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin : {event.title}</h1>
            {event.questions.map((q) => (
                <Question
                    key={q.id}
                    eventId={event.id}
                    question={q}
                />
            ))}
        </div>
    )
}

export default AdminEventPage
