import React, {useContext} from 'react'
import { routerContext } from '../context/routerContext'


const Router = () => {
    const {view} = useContext(routerContext)

    try {
        switch (view) {
            case 'Login': return <div>Login</div>
            case 'Home': return <div>Home</div>
            case 'Billing': return <div>Billing</div>
            case 'Settings': return <div>Settings</div>
            default: return <div>View not found: {view}</div>
        }
    }
    catch (error) {
        return <div>View not found: {view}</div>        
    }

}

export default Router;