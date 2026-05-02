import React, { useContext } from 'react'
import { routerContext } from './context/routerContext';
import Router from './components/Router';
import ContextProvider from './context/ContextProvider'
import SideBar from './components/SideBar';
import Header from './components/Header';

const App = () => {

    const {view} = useContext(routerContext)

    return(
        <ContextProvider>
            <div className="Root">
                {view != "Login" && <SideBar/> }
                <div style={{width: '100%'}}>
                    {view != "Login" && <Header/> }
                    <Router />
                </div>
            </div>
        </ContextProvider>
    )
}

export default App;