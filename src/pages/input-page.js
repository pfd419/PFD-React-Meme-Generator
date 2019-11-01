import React from "react";

import ThemeTogglerButton from '../components/theme-toggler-button';
import UserInput from '../components/user-input';

export default function InputPage(props) {
    return (
        <div>
            <UserInput {...props}/>
            <br />
            <ThemeTogglerButton />
        </div>
    );
}

