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

    if (!event) {
        return (
            <div className="flex items-center justify-center h-screen bg-blue-50">
                <p className="text-lg font-semibold text-blue-600">Événement introuvable.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-blue-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-3xl font-bold text-blue-800 mb-6">
                    Admin : {event.title}
                </h1>

                <div className="space-y-4">
                    {event.questions.map((q) => (
                        <div
                            key={q.id}
                            className="bg-blue-100 border border-blue-300 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Question
                                eventId={event.id}
                                question={q}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminEventPage
