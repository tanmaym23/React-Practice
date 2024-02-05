import React from 'react'
import { useState } from 'react';

function Countdown() {
    const [workDuration,setWorkDuration]=useState(25);
    const [breakDuration,setBreakDuration]=useState(5);
    const [workSeconds, setWorkSeconds] = useState(1500);
    const [breakSeconds, setBreakSeconds] = useState(300);
    const [type,setType]=useState("Work")
    const [resetFlag,setResetFlag]=useState(true);
    const [startFlag,setStartFlag]=useState(false);

  return (
    <div>
        <div>
            <h1>25:00</h1>
            <h1>work-Time</h1>
        </div>
        <div>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
        <div>
            <input type="number"/>
            <input type="number"/>
            <input type="submit"/>
        </div>
    </div>
  )
}

export default Countdown;