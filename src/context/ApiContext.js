import React, { useState } from 'react';

const apiContext = React.createContext();


export function GlobalApiContextProvider({children}){
    const data = useState([]);
    return(
         <ApiContext.Provider value={{ data }}>
             {children}  
         </ApiContext.Provider>
    )
}


export default apiContext;