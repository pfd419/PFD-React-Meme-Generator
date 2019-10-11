import React from "react";


// Signed-in user context
export const initialUser = {
    name: 'Guest',
    id: 1
}

export const UserContext = React.createContext({
    user: initialUser   //default Value
});
  