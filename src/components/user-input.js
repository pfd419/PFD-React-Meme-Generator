import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { saveProfileData } from '../actions';

function UserInput(props) {
    const { apiData, user } = props;
    const [userForm, setUserForm] = useState(user);
    const characters = apiData.characters && Object.entries(apiData.characters).length ? apiData.characters : [];
    let optionItems = characters.map((character, x) =>
        <option key={x} value={x}>{character.name}</option>
    );

    const handleUserFormChanges = (event) => {
        event.preventDefault();     // prevent form submit on carriage return

        const { name, value } = event.target;
        setUserForm({ ...userForm, [name]: value });
    }

    function handleOnSubmit(event) {
        event.preventDefault();

        saveProfileData({...props, userForm: userForm});
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <section>
                <label><span>User Name: </span></label>
                <input
                    type="text"
                    name="name"
                    onChange={handleUserFormChanges}
                    value={userForm.name} />
            </section>
            <section>
                <label><span>Star Wars Character: </span></label>
                <select
                    name="character"
                    onChange={handleUserFormChanges}
                    value={userForm.character}
                >
                    <option value="">Please select...</option>
                    {optionItems}
                </select>
            </section>
            <section>
                <label><span></span></label>
                <Button type="submit" onClick={handleOnSubmit}>Submit User Data</Button>
            </section>
        </form>
    );
}

const mapStateToProps = state => ({
    user: state.user,
    apiData: state.apiData
});

export default connect(mapStateToProps)(UserInput);