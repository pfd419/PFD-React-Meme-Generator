import React from "react";

import ThemeTogglerButton from '../components/theme-toggler-button';
import UserInput from '../components/user-input';

function handleOnSubmit(event) {
    event.preventDefault();
}

export default function InputPage(props) {
    return (
        <form onSubmit={handleOnSubmit}>
            <UserInput {...props}/>
            <br />
            <ThemeTogglerButton />
        </form>
    )

}

