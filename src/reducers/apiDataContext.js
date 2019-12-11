import statics from '../statics';

const apiDataContextReducer = (state, action) => {
    switch (action.type) {
        case statics.SETIMAGEURLS: {
            return { ...state, imageLibrary: action.values };
        }
        default: {
            throw new Error("Unhandled type: {action.type}");
        }
    }
}


export default apiDataContextReducer;
