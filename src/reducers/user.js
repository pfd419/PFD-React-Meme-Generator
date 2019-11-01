import { initialUser } from '../contexts/UserContext';

let defaultUser = initialUser;

const user = (state = defaultUser, action) => {
    switch (action.type) {
        case 'SETUSERVALUE':
            return { ...state, [action.name]: action.value };
        case 'SETUSER':
            return action.user;
        default:
            return state;
    }
}

export default user;
