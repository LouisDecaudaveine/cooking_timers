
function TimerClock({timeLeft}) {
    const hours = Math.floor(timeLeft/3600);
    const minutes = Math.floor(( timeLeft - hours*3600 ) / 60);
    const seconds = Math.floor(timeLeft - hours*3600 - minutes*60);


    return(
        <div className="TimerClock">
            {`${String(hours).padStart(2,'0')} : ${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`}
        </div>
    )
}

export default TimerClock;