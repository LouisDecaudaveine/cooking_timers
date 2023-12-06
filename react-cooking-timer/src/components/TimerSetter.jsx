function TimerSetter({setNewTimer}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        setNewTimer(formJson);
    }


    return(
        <div className="TimerSetter">
            <h3 className="TimerTitle">Set new timer:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input name="title" placeholder="timer title"/>
                </label>
                <label>
                    <input name="duration" type="number" placeholder="duration in seconds"/>
                </label>
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default TimerSetter;