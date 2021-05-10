import logo from '../logo.json';
import './App.scss';
import Header from './Header/Header';
import PostList from './Post/PostList';
import AuthMain from './Auth/Main';

function App() {
  return (
    <div>
    <Header isAuth = {true}/>
    <PostList />
    </div>
  );
}

export default App;
