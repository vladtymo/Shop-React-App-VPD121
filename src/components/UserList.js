import { useContext, useState } from "react";
import { UserCard } from "./UserCard";
import { UsersContext } from "../contexts/users.context";

export function UserList(props) {

    //const [users, setUsers] = useState(props.users);

    const { users, clear, sort } = useContext(UsersContext);

    return (
        <>
            <h1>User List</h1>
            <div>
                {users.map(u => <UserCard key={u.id} {...u} />)}
            </div>
            <button onClick={sort}>Sort</button>
            <button onClick={clear}>Clear All</button>
        </>
    );
}