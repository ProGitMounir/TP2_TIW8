import { useState } from 'react'

function Content() {
    const [count, setCount] = useState(0)
    return (
        <>
        <div className='content'>
            <p>
                le contenue se trouve ici: <code>components/content.tsx</code>. Merci de le modifier et de <br />sauvegarder pour tester HMR (Hot Module Replacement).
            </p>
            <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>
            
        </div>
        </>
    )
}

export default Content