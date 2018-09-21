import { app, BrowserWindow, ipcMain, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';


export const WINDOW_MIN_WIDTH = 450;
export const WINDOW_MIN_HEIGHT = 580;
export const WINDOW_MAX_WIDTH = 850;
export const WINDOW_MAX_HEIGHT = 580;
export const CHANNEL_EXPAND_WINDOW = 'expandWindow';
export const CHANNER_REDUCE_WINDOW = 'reduceWindow';


let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

let EXPAND_WINDOW = false;

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'false';

function createWindow() {
  const electronScreen = screen;

  // Create the browser window.
  win = new BrowserWindow({
    width: WINDOW_MIN_WIDTH,
    height: WINDOW_MIN_HEIGHT,
    frame: false,
    webPreferences: { webSecurity: false },
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.webContents.openDevTools();


  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  ipcMain.on(CHANNEL_EXPAND_WINDOW, () => {
    win.setSize(WINDOW_MAX_WIDTH, WINDOW_MAX_HEIGHT);
    EXPAND_WINDOW = true;
  });

  ipcMain.on(CHANNER_REDUCE_WINDOW, () => {
    win.setSize(WINDOW_MIN_WIDTH, WINDOW_MIN_HEIGHT);
    EXPAND_WINDOW = false;
  });
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
