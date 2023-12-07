import { useEffect, useState } from "react";
import PauseButton from "./PauseButton";
import TimerClock from "./TimerClock";
import AlarmPlayer from "./AlarmPlayer";



const FinishedTimer = () => {
    return (
        <div className="FinishedTimer">
            FINISHED
            <AlarmPlayer/>
        </div>
    )
}

const UnfinishedTimer = ({timeLeft ,pauseCallBack, isPaused}) => {

    return(
        <div className="UnfinishedTimer">
            <TimerClock timeLeft={timeLeft} />
            <PauseButton clickHandler={pauseCallBack} isPaused={isPaused}/>
        </div>
    )
    
}

const DeleteButton = ({id,deleteCallback}) => {
    const onClickHandler = () => {
        deleteCallback(id);
    }
    return (
        <div className="DeleteButtonWrapper">
            <button onClick={onClickHandler}>X</button>
        </div>
    )
   
}

function Timer({id, name, duration, deleteTimer}){
    const date = new Date();
    const [referenceTime, setReferenceTime] = useState(date.getTime());
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isPaused, setIsPaused] = useState(true);
    

    const pauseCallBack = () => {
        const currentTime = date.getTime();
        setIsPaused(!isPaused);
        if(isPaused) {
        }
        else{
        }
        
    }

    useEffect(() => {
        if(!isPaused && timeLeft > 0){
            const timerId = setTimeout(()=>{
                setTimeLeft(prevTimeLeft => prevTimeLeft-1);
            }, 1000);

            return () => clearTimeout(timerId);
        }

    },[isPaused, timeLeft])


    return(
        <div className="Timer">
            <div className="TimerBody">
                <h3 className="TimerTitle">{name}</h3>
                {timeLeft <= 0 ?
                    <FinishedTimer />
                :
                    <UnfinishedTimer timeLeft={timeLeft} pauseCallBack={pauseCallBack} isPaused={isPaused}/>}

            </div>
            <DeleteButton id={id} deleteCallback={deleteTimer}/>
                
        </div>
    )
}


export default Timer;


// if its paused: 

// stop the timer: look at current duration between current time and last time, subtract it from time left
// start the timer: set new reference time 