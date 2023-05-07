import { useState } from "react";
import { UserCard } from "./UserCard";

export function UserList(props) {

    const [users, setUsers] = useState(props.users);

    const sortUsers = () => {
        console.log("Sorting...");

        users.sort((a, b) => (a.username > b.username) ? 1 : -1);
        setUsers([...users]);

        console.log(users);
    }

    const clearUsers = () => {
        setUsers([]);
    }

    return (
        <>
            <h2>User List</h2>
            <div>
                {users.map(u => <UserCard key={u.id} {...u} />)}
            </div>
            <button onClick={sortUsers}>Sort</button>
            <button onClick={clearUsers}>Clear All</button>
        </>
    );
}