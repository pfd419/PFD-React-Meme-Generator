import { initialUser } from '../contexts/UserContext';

let defaultUser = initialUser;

const user = (state = defaultUser, action) => {
    switch (action.type) {
        case 'SET':
            return {...state, [action.name]: action.value};
        default:
            return state;
    }
}

export default user;
  