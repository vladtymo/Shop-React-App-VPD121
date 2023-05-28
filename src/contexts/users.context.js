import { createContext, useState } from "react";
import { USERS } from "../components/users";

export const UsersContext = createContext({
    // properties
    users: [],
    // methods
    sort: () => null,
    add: () => null,
    remove: () => null,
    clear: () => null
});

export const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState(USERS);

    const add = (item) => setUsers([...users, item]);
    const remove = (id) => {
        const index = users.findIndex(u => u.id == id);
        setUsers(users.splice(index, 1));
    };
    const clear = () => setUsers([]);
    const sort = () => {
        users.sort((a, b) => (a.username > b.username) ? 1 : -1);
        setUsers([...users]);
    };

    const value = { users, add, remove, clear, sort };

    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
