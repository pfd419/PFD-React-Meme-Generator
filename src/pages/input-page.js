import React from "react";

import ThemeTogglerButton from '../components/theme-toggler-button';
import UserInput from '../components/user-input';

function handleOnSubmit(event) {
    event.preventDefault();
}

export default function InputPage() {
    return (
        <form onSubmit={handleOnSubmit}>
            <UserInput />
            <br />
            <ThemeTogglerButton />
        </form>
    )

}

