import './App.css';
import { Counter } from './components/Counter';
import { ProductList } from './components/ProductList';
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
      <ProductList />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
