import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/nudge/time').then(res => res.json()).then(data => {
            console.log('Fetched data:', data);
            setCurrentTime(data.time);
        });
    }, []);

    return (
        <>
            <h1>Houston... we have NUDGING</h1>
            <p className='emph'><strong>(BITCH!)</strong></p>
            <p>
            {currentTime 
                ? `The current time is ${new Date(currentTime * 1000).toLocaleString()}.` 
                : "Loading current time..."}
            </p>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

        </>
    )
}

export default App
