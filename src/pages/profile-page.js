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
                {user.name && <label><span>User Name: </span></label>} {user.name}
                <br />
                {swCharacter && <label><span>Star Wars Character:</span></label>} {swCharacter}
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

