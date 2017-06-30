const { app, BrowserWindow } = require('electron')

let mainWindow

const createWindow = () => {
	
	mainWindow = new BrowserWindow({
		width: 1400,
		height: 900,
	})

	mainWindow.loadURL(`file://${__dirname}/views/index.html`);

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})