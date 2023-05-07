import './App.css';
import { Counter } from './components/Counter';
import { UserCard } from './components/UserCard';
import { UserList } from './components/UserList';
import { USERS } from './components/users';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello React!</h1>
      </header>

      <UserList users={USERS} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
