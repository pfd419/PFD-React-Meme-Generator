import React, { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

export default function ProfilePage(props) {
    const themeContext = useContext(ThemeContext);
    const { selectedTheme } = themeContext;
    const userContext = useContext(UserContext);
    const { user } = userContext;
    const { apiData } = props;
    const swCharacter = Object.entries(apiData).length && user.character
        ? apiData.results[user.character].name
        : null;
        
    return (
        <div>
            <section>
                <strong>User Name:</strong> {user.name}
                <br />
                <strong>Star Wars Character:</strong> {swCharacter}
            </section>
            <br />
            <section>
                <strong>Theme:</strong> {selectedTheme.name}
            </section>
        </div>
    )
}

