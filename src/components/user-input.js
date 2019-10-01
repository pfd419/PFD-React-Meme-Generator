import React, { useContext, useReducer, useEffect } from "react";
import { UserContext } from '../contexts/UserContext';

function setUserNameReducer(state, value) {
    return {
        id: state.id,
        name: value
    }
}

function useSetUserName({ reducer = (s, a) => a.changes } = {}) {
    const userContext = useContext(UserContext);

    const [signedInUser, dispatch] = useReducer(
        (state, value) => {
            const changes = setUserNameReducer(state, value);
            return reducer(state, { ...value, changes })
        },
        userContext.user
    );

    const setUserName = (value) => dispatch(value);

    return { signedInUser, setUserName }
}

function UserInput() {
    const userContext = useContext(UserContext);
    const { signedInUser, setUserName } = useSetUserName({
        reducer(signedInUser, value) {
            return value.changes;
        }
    });

    // Pass new state via context when selectedTheme has changed
    useEffect(() => {
        if (userContext.user !== signedInUser) {
            userContext.setUser(signedInUser);
        }
    });

    return (
        <section>
            <strong>User Name: </strong>
            <input
                type="text"
                name="name"
                onChange={(x => {setUserName(x.target.value)})}
                value={signedInUser ? signedInUser.name : ''} />
        </section>
    );
}


export default UserInput;