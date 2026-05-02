import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import RouterContextProvider from './context/RouterContextProvider'
import App from './App'

createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={{algorithm: theme.lightAlgorithm}}>
    <RouterContextProvider>
      <App />
    </RouterContextProvider>
  </ConfigProvider>
)