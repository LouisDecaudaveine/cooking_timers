import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import TimerWrapper from './components/TimerWrapper';

function App() {
  return (
    <div className="App">
      <Title title="Octo Timer" />
        <TimerWrapper />
    </div>
  );
}

export default App;


// APP CONCECPT
// - add a set of timers that all run concurrently 
// - give option to plan and sync timers: 
//    + tell user whent timers will start 
//    + if user changes timing then try shuffle other timers to make then end as close together