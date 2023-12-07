import TimeDropDown from "./TimeDropdown";

function TimerSetter({setNewTimer}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson)

        const timerData = {
            title: formJson.title == "" ? "UNTITLED" : formJson.title.toUpperCase(),
            duration: parseInt(formJson.hours) * 3600 + parseInt(formJson.minutes) * 60 + parseInt(formJson.seconds),
        }

        setNewTimer(timerData);
    }


    return(
        <div className="TimerSetter">
            <h3 className="TimerTitle">Set new timer:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input name="title" placeholder="timer title" />
                </label>
                <div className="TimeDropDownContainer">
                    <TimeDropDown rangeStart={0} rangeEnd={24} title="hr:"  name="hours"/>
                    <TimeDropDown rangeStart={0} rangeEnd={60} title="min:" name="minutes"/>
                    <TimeDropDown rangeStart={0} rangeEnd={60} title="sec:" name="seconds"/>
                </div>
                
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default TimerSetter;