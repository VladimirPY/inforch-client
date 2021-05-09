import logo from '../logo.json';
import './App.scss';
import Header from './Header/Header';

function App() {
  console.log(logo.orange);
  return (
    <Header isAuth = {true}/>
  );
}

export default App;
