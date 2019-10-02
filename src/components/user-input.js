import React, { useContext, useReducer, useEffect } from "react";
import { UserContext } from '../contexts/UserContext';

function setUserReducer(state, value) {
    const newState = Object.assign({}, state);
    newState[value.type] = value.value;

    return newState;
}

function useSetUser({ reducer = (s, a) => a.changes } = {}) {
    const userContext = useContext(UserContext);

    const [signedInUser, dispatch] = useReducer(
        (state, value) => {
            const changes = setUserReducer(state, value);
            return reducer(state, { ...value, changes })
        },
        userContext.user
    );

    const setUserName = (value) => dispatch({ type: 'name', value: value });
    const setUserCharacter = (value) => dispatch({ type: 'character', value: value });

    return { signedInUser, setUserName, setUserCharacter }
}

function UserInput(props) {
    const userContext = useContext(UserContext);
    const { signedInUser, setUserName, setUserCharacter } = useSetUser({
        reducer(signedInUser, value) {
            return value.changes;
        }
    });
    const { apiData } = props;
    const characters = apiData && Object.entries(apiData).length ? apiData.results : [];

    let optionItems = characters.map((character, x) =>
        <option key={x} value={x}>{character.name}</option>
    );

    // Pass new state via context when selectedTheme has changed
    useEffect(() => {
        if (userContext.user !== signedInUser) {
            userContext.setUser(signedInUser);
        }
    });

    return (
        <div>
            <section>
                <strong>User Name: </strong>
                <input
                    type="text"
                    name="name"
                    onChange={(x => { setUserName(x.target.value) })}
                    value={signedInUser ? signedInUser.name : ''} />
            </section>
            <section>
                <strong>Star Wars Character: </strong>
                <select
                    onChange={(x => { setUserCharacter(x.target.value) })}
                    value={signedInUser ? signedInUser.character : ''}
                >
                    <option value="">Please select...</option>
                    {optionItems}
                </select>
            </section>
        </div>
    );
}


export default UserInput;