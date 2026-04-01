const { contextBridge, ipcRenderer } = require('electron');

// Exponemos una API segura llamada "electronAPI" al objeto 'window' de React
contextBridge.exposeInMainWorld('electronAPI', {
    // Ejemplo: Función para cerrar la aplicación desde un botón de React
    closeApp: () => ipcRenderer.send('app:close'),
    
    // Ejemplo: Minimizar la ventana
    minimizeApp: () => ipcRenderer.send('app:minimize'),

    // Ejemplo: Obtener la versión de la app
    getAppVersion: () => ipcRenderer.invoke('app:version'),

    // Escuchar eventos que vienen desde Electron (ej: actualizaciones)
    onUpdateStatus: (callback) => ipcRenderer.on('update-status', (event, status) => callback(status))
});
