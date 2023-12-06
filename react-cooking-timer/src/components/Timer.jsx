import { useEffect, useState } from "react";
import PauseButton from "./PauseButton";


const FinishedTimer = () => {
    return (
        <div>
            FINISHED
        </div>
    )
}

const UnfinishedTimer = ({timeLeft ,pauseCallBack, isPaused}) => {

    return(
        <div>
            <p className="TimerClock">{timeLeft}</p>
            <PauseButton clickHandler={pauseCallBack} isPaused={isPaused}/>
        </div>
    )
    
}

const DeleteButton = ({id,deleteCallback}) => {
    const onClickHandler = () => {
        deleteCallback(id);
    }
    return (
        <button onClick={onClickHandler}>X</button>
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
            setTimeout(()=>{
                setTimeLeft(timeLeft-1000);
            }, 1000);
        }

    },[isPaused, timeLeft])


    return(
        <div className="Timer">
            <span> <DeleteButton id={id} deleteCallback={deleteTimer}/> </span>
            <div className="TimerBody">
                <h3 className="TimerTitle">{name}</h3>
                {timeLeft <= 0 ?
                    <FinishedTimer />
                :
                    <UnfinishedTimer timeLeft={timeLeft} pauseCallBack={pauseCallBack} isPaused={isPaused}/>}

            </div>
                
        </div>
    )
}


export default Timer;


// if its paused: 

// stop the timer: look at current duration between current time and last time, subtract it from time left
// start the timer: set new reference time 