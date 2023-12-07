import alarm from "../assets/alarm.wav";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function AlarmPlayer(){
    const [isActive, setIsActive]  = useState(true);
    const [alarmSound, setAlarmSound] = useState(new Audio(alarm));
    

    useEffect(() => {
        const handleCanPlayThrough = () =>{
            if(isActive){
                alarmSound.loop = true;
                alarmSound.play();
            }
        }
        
        alarmSound.addEventListener('canplaythrough', handleCanPlayThrough);

        return () => {
            alarmSound.pause();
            alarmSound.currentTime = 0;
            alarmSound.removeEventListener('canplaythrough', handleCanPlayThrough);
          };
    },[]);

    const handleClick = () => {
        setIsActive(false);
        alarmSound.pause();
    }


    return(
        
        <div>
            {isActive && <button onClick={handleClick}>END</button> }
        </div>
    )
}


export default AlarmPlayer;