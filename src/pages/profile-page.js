import React, { useContext } from "react";
import { connect } from 'react-redux';
import { ThemeContext } from '../contexts/ThemeContext';

function ProfilePage(props) {
    const themeContext = useContext(ThemeContext);
    const { selectedTheme } = themeContext;
    const { user, apiData } = props;
    const swCharacter = apiData.characters && Object.entries(apiData.characters).length && user.character
        ? apiData.characters[user.character].name
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
    );
}

const mapStateToProps = state => ({
    user: state.user,
    apiData: state.apiData
});

export default connect(mapStateToProps)(ProfilePage);

