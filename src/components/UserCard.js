import './UserCard.css';

// create React function component

// props - input parameters
export function UserCard(props) {
    // component must return it's markup
    return (
        <div className="UserCard">
            <h3>{props.admin ? "Admin" : "User"} Card</h3>
            <p>Username: {props.username}</p>
            <p>Address: {props.address}</p>
        </div>
    );
}
