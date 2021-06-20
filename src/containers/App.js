import React,{Fragment} from 'react';

import Home from '../pages/Home';
import GlobalApiContextProvider from '../context/ApiContext';

const App = () => (
 <GlobalApiContextProvider>
    <Fragment>
       <Home/>
    </Fragment>
 </GlobalApiContextProvider>
);

export default App;
