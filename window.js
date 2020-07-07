const { ipcRenderer } = require("electron");

// Update reel with value from touchbar
ipcRenderer.on("reel", (event, arg) => {
  document.getElementById("reel" + arg.id).innerHTML = arg.label;
});

// Update result with value from touchbar
ipcRenderer.on("result", (event, arg) => {
  document.getElementById("result").innerHTML = arg.label;
});
