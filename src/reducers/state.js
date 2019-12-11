import statics from '../statics';

const defaultState = {
    loading: true,
    imageUrl: "",
    imageTextTop: "Paul",
    imageTextBottom: "D'Ambra",
    fontSize: 4,
    fontColor: "white"
};

const stateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case statics.RESET:
            return defaultState;
        case statics.SET:
            return { ...state, ...action.value };
        default:
            return state;
    }
};

export default stateReducer;
