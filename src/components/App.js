import logo from '../imgs.json';
import './App.scss';
import Main from './Auth/Main';

function App() {
  console.log(logo.orange);
  return (
  <Main formType = 'login'/>
    /* <div className="App">
      
       <header className="App-header">
        <img src={logo.main} className="App-logo" alt="logo" />
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
        </a>
      </header>
     </div> */
  );
}

export default App;
