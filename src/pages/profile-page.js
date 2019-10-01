import React, { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

export default function ProfilePage() {
    const themeContext = useContext(ThemeContext);
    const { selectedTheme } = themeContext;
    const userContext = useContext(UserContext);
    const { user } = userContext;

    return (
        <div>
            <section>
                <strong>User Name:</strong> {user.name}
            </section>
            <br />
            <section>
                <strong>Theme:</strong> {selectedTheme.name}
            </section>
        </div>
    )
}

