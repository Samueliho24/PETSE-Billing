const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { spawn } = require('child_process');

let mainWindow;
let pythonProcess = null;

function createWindow() {

    // 1. Lanzar el Backend de Python
    const pythonPath = isDev 
        ? path.join(__dirname, 'BackEnd', 'venv', 'Scripts', 'python.exe') // Ajusta según tu OS
        : path.join(process.resourcesPath, 'BackEnd', 'dist', 'main.exe');

    const scriptPath = path.join(__dirname, 'BackEnd', 'app', 'main.py');

    // Ejecutamos uvicorn desde el proceso hijo
    pythonProcess = spawn(pythonPath, ['-m', 'uvicorn', 'BackEnd.main:app', '--host', '127.0.0.1', '--port', '8000']);

    // 2. Crear la ventana principal
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
        nodeIntegration: false,
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true
        },
        icon: path.join(__dirname, 'assets', 'icon.ico')
    });

    // 3. Cargar el Frontend
    // En desarrollo carga el servidor de Vite, en producción el archivo index.html
    const startURL = isDev 
        ? 'http://localhost:5173' 
        : `file://${path.join(__dirname, 'FrontEnd/dist/index.html')}`;

    mainWindow.loadURL(startURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

// Cerrar Python cuando se cierre Electron para que no quede huérfano
app.on('will-quit', () => {
    if (pythonProcess) {
        pythonProcess.kill();
    }
});
