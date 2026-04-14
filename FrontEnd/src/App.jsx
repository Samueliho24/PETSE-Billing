import React, { useContext } from 'react'
import { routerContext } from './context/routerContext';
import Router from './components/Router';
import ContextProvider from './context/ContextProvider'

const App = () => {

    const {view} = useContext(routerContext)

    return(
        <ContextProvider>
            <div className="Root">
                <Router />
            </div>
        </ContextProvider>
    )
}

export default App;