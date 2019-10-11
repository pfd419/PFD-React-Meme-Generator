const apiData = (state = {}, action) => {
    switch (action.type) {
        case 'SETAPIDATA':
            return {...state, [action.apiName]: action.data};
        default:
            return state;
    }
}

export default apiData;
  