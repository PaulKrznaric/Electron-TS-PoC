import {BrowserWindow} from 'electron';

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;

    private static onReady(){
        Main.mainWindow = new Main.BrowserWindow({
            width: 1200,
            height: 800,
            webPreferences: {
                nodeIntegration: true
            }
        });
        Main.mainWindow.loadURL('file://' + __dirname + '/../index.html');
        Main.mainWindow.on('closed', Main.onClose);

        Main.mainWindow.webContents.openDevTools();
    }

    private static onClose(){
        Main.mainWindow = null;
    }
    
    private static onWindowAllClosed() {
        if(process.platform !== 'darwin'){
            Main.application.quit();
        }
    }

    private static activate(){
        if(BrowserWindow.getAllWindows().length === 0){
            this.onReady();
        }
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow){
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}