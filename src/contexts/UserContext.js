import React from "react";


// Signed-in user context
export const user = {
    name: 'Guest',
    id: 1
}

export const UserContext = React.createContext({
    user: user   //default Value
});
  