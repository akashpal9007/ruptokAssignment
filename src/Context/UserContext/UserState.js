import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const [users, setUsers] = useState([]);
    return (
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;