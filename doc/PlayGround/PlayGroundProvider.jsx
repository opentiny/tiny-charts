import React, { useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';

const initialState = {
  code: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'CODE_CHANGE':
      return { ...state };
    default:
      return { ...state };
  }
}

const PlayGroundContext = React.createContext(null);

const PlayGroundProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <PlayGroundContext.Provider value={contextValue}>
      {children}
    </PlayGroundContext.Provider>
  );
};

export default PlayGroundProvider;
export { PlayGroundContext };
