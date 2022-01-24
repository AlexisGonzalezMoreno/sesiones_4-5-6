import logo from './logo.svg';
import './App.css';
import Clock from './container/clock';
import Clockfuncional from './container/clockFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<Clock></Clock>*/}
        <Clockfuncional></Clockfuncional>
      </header>
    </div>
  );
}

export default App;
