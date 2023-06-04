import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter';
import { ProductList } from './components/ProductList';
import { UserList } from './components/UserList';
import { USERS } from './components/users';
import { CreateUser } from './components/CreateUser';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<h1>Main Page</h1>} />
        <Route path="users" element={<UserList users={USERS} />} />
        <Route path="add-user" element={<CreateUser />} />
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<ProductList />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
