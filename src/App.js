import React from 'react';
import AgeCalculator from './AgeCalculator'; // Import the AgeCalculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Remove or comment out the default content */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        {/* Include the AgeCalculator component */}
        <AgeCalculator />
      </header>
    </div>
  );
}

export default App;
