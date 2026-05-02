import { appContext } from './appContext'
import { useState } from 'react'
import { message } from 'antd'
import React from 'react'

const ContextProvider = ({children}) => {

	const [userData, setUserData] = useState('')
	const [searchText, setSearchText] = useState('')
	const [titleSection, setTitleSection] = useState('')
	const [logged, setLogged] = useState(false)
	const [theme, setTheme] = useState('dark') // Estado para el tema, por defecto oscuro
	const [messageApi, contextHolder] = message.useMessage()

	return(
		<appContext.Provider value={{
			userData,
			setUserData,
			logged,
			setLogged,
			theme,
			setTheme,
			searchText,
			setSearchText,
			titleSection,
			setTitleSection,
			messageApi,
			contextHolder
		}} >
			{children}
		</appContext.Provider>
	)
}

export default ContextProvider