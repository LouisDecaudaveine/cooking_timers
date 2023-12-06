import Timer from "./Timer";
import TimerSetter from "./TimerSetter";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function TimerWrapper() {
    const [timersState, setTimersState] = useState(new Map());

    const addTimer = (timerData) => {
        const newTimerKey = uuidv4();

        const updatedMap = new Map(timersState);
        updatedMap.set(newTimerKey, {
            id: newTimerKey, 
            title: timerData.title, 
            duration: parseInt(timerData.duration, 10)
        });
        setTimersState(updatedMap);
    }

    const removeTimer = (key) => {
        const updatedMap = new Map(timersState);
        updatedMap.delete(key);
        setTimersState(updatedMap);
    }

    


    let d = new Date();
    let time = d.getTime();

    return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        <div className="TimerWrapper">
            <ul className="TimerList">
                {
                    Array.from(timersState.entries()).map(([key,value]) =>{
                        return <li key={key}><Timer id={value.id} name={value.title} duration={value.duration} deleteTimer={removeTimer}/></li>;
                    })
                }
            </ul>

            <TimerSetter setNewTimer={addTimer}/>
        </div>
    </div>
        
    )
}

export default TimerWrapper;