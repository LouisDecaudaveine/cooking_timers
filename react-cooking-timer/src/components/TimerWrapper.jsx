import Timer from "./Timer";
import TimerSetter from "./TimerSetter";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TimerSyncer from "./TimerSyncer";



function TimerWrapper() {
    const [timersState, setTimersState] = useState(new Map());
    const [syncedEndTime, setSyncedEndTime] = useState(0);

    const addTimer = (timerData) => {
        const newTimerKey = uuidv4();

        const updatedMap = new Map(timersState);
        updatedMap.set(newTimerKey, {
            id: newTimerKey, 
            title: timerData.title, 
            duration: timerData.duration,
            isSynced: false,
            syncStartTime: undefined,

        });
        setTimersState(updatedMap);
    }

    const removeTimer = (id) => {
        const updatedMap = new Map(timersState);
        updatedMap.delete(id);
        setTimersState(updatedMap);
    }

    const syncTimer = (id) => {
        const d = new Date()
        timersState.get(id).isSynced = true;
        timersState.get(id).syncStartTime = d.getTime();
    }


    return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        <div className="TimerWrapper">
            <ul className="TimerList">
                {
                    Array.from(timersState.entries()).map(([key,value]) =>{
                        return <li key={key}> <Timer 
                                    id={value.id} 
                                    name={value.title} 
                                    duration={value.duration} 
                                    deleteTimer={removeTimer}/></li>;
                            
                    })
                }
            </ul>

            <TimerSetter setNewTimer={addTimer}/>
        </div>

        <TimerSyncer />
    </div>
        
    )
}

export default TimerWrapper;