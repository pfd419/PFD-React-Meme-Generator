import React, {useContext, useReducer} from "react";

import apiDataContextReducer from '../reducers/apiDataContext';

import statics from '../statics';

let apiContext = React.createContext({
  imageLibrary: []
});

function useApiContext({ reducer = (s, a) => a.changes } = {}) {
  const apiDataContext = useContext(apiContext);
  const [apiData, dispatch] = useReducer((state, action) => {
    const changes = apiDataContextReducer(state, action);
    return reducer(state, { ...action, changes });
  }, apiDataContext);
  const setImageUrls = data =>
    dispatch({ type: statics.SETIMAGEURLS, values: data });

  return { apiData, setImageUrls };
}


export default useApiContext;
