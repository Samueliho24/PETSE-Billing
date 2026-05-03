import React, {useContext} from 'react'
import { routerContext } from '../context/routerContext'
import { appContext} from '../context/appContext'
import Login from '../pages/Login'
import BillingPanel from '../pages/BillingPanel'
import Student from '../pages/Student'

const Router = () => {
    const {view} = useContext(routerContext)
    const {setTitleSection} = useContext(appContext)

    try {
        switch (view) {
            case "Login": return <Login />
            case 'Home': {setTitleSection('HOME'); return <div>Home</div>}
            case 'BillingPanel': {setTitleSection('GENERACION DE FACTURAS'); return <BillingPanel />}
            case 'Students': {setTitleSection('ESTUDIANTES'); return <Student />}
            case 'Reports': {setTitleSection('REPORTES'); return <div>Reports</div>}
            case 'Settings': {setTitleSection('CONFIGURACIÓN'); return <div>Settings</div>}
            default: return <div>View not found: {view}</div>
        }
    }
    catch (error) {
        return <div>View not found: {view}</div>        
    }

}

export default Router;