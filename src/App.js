import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter';
import { ProductList } from './components/ProductList';
import { UserCard } from './components/UserCard';
import { UserList } from './components/UserList';
import { USERS } from './components/users';
import { Menu } from './components/Menu';
import { CreateUser } from './components/CreateUser';
import { useContext } from 'react';
import { CounterContext } from './contexts/counter.context';

function App() {

  const { count } = useContext(CounterContext);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Our Logo! {count > 0 ? '+' : ''}{count}</h1>
          <Menu />
        </header>

        <Routes>
          <Route path="/" element={<h1>Main Page</h1>} />
          <Route path="users" element={<UserList users={USERS} />} />
          <Route path="add-user" element={<CreateUser />} />
          <Route path="counter" element={<Counter />} />
          <Route path="products" element={<ProductList />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
