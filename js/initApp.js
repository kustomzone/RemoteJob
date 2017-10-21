const remote = require('electron').remote;
const {ipcRenderer} = require('electron');
const autosave = require('./js/autosave/autosave');
const manageProcess = require('./js/process/manageProcess');
const manageScreenshot = require('./js/screenshot/manageScreenshot');


function init(config) {
  renderUI();
  //renderProcess();
  //renderScreenshot(20000);
}

function renderProcess() {
  autosave.readSavedData(manageProcess.addInterruptedProcess);
  manageProcess.addProcess();
  manageProcess.addActiveProcess();
}

function renderScreenshot(delay) {
  function contineousShot(delay){
    manageScreenshot.addScreenshot();
    setTimeout(contineousShot, delay);
  }
  contineousShot(delay);
}

function renderUI() {
  document.getElementById("minimize").addEventListener("click", function(e) {
    const window = remote.getCurrentWindow();
    window.minimize();
  });

  document.getElementById("close").addEventListener("click", function(e) {
    const window = remote.getCurrentWindow();
    window.hide();
  });
}

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    init();
  }
};
