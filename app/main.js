var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')  
    app.quit();
});

app.on('ready', function() {	
  mainWindow = new BrowserWindow({width: 800, height: 600});//, frame: false});  
  mainWindow.loadUrl('file://' + __dirname + '/app.html');
//  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });  
});


