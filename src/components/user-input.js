import React from "react";
import { connect } from 'react-redux';

function UserInput(props) {
    const setUser = (name, value) => {
        props.dispatch({ type: 'SETUSER', name: name, value: value });
    };

    const { apiData } = props;
    const characters = apiData.characters && Object.entries(apiData.characters).length ? apiData.characters : [];

    let optionItems = characters.map((character, x) =>
        <option key={x} value={x}>{character.name}</option>
    );

    return (
        <div>
            <section>
                <strong>User Name: </strong>
                <input
                    type="text"
                    name="name"
                    onChange={(x => setUser(x.target.name, x.target.value))}
                    value={props.user.name} />
            </section>
            <section>
                <strong>Star Wars Character: </strong>
                <select
                    name="character"
                    onChange={(x => setUser(x.target.name, x.target.value))}
                    value={props.user.character}
                >
                    <option value="">Please select...</option>
                    {optionItems}
                </select>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    apiData: state.apiData
});

export default connect(mapStateToProps)(UserInput);