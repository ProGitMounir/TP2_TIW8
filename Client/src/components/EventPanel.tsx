/* import React from 'react';
import type{ PublicEvent } from '../models';

interface Props {
    currentEvent: PublicEvent | undefined;
  }
  
  const EventPanel: React.FC<Props> = ({ currentEvent }) => {
    if (!currentEvent) {
      return <div style={{ padding: 20 }}>Aucun événement sélectionné.</div>;
    }
  
    return (
      <div style={{ padding: 20 }}>
        <h2>{currentEvent.title}</h2>
        <h3>Questions :</h3>
        {currentEvent.questions.length === 0 ? (
          <p>Aucune question pour cet événement.</p>
        ) : (
          <ul>
            {currentEvent.questions.map((q) => (
              <li key={q.id} style={{ backgroundColor: q.color ?? "#f0f0f0", margin: "10px 0", padding: "10px" }}>
                <strong>{q.content}</strong>
                {q.author && <div><small>Par : {q.author}</small></div>}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default EventPanel; */

  import React from 'react'
import type { Question } from '../models'

interface Props {
  questions: Question[]
}

const EventPanel: React.FC<Props> = ({ questions }) => {
  return (
    <div>
      <h3>Liste des Questions</h3>
      <ul>
        {questions.map(q => (
          <li key={q.id} style={{ color: q.color }}>
            {q.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventPanel
