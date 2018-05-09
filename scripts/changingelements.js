"use strict";
var divMain = document.getElementById("main");
// divMain.innerHTML = "<span> take from me my guitar and it'll only exist a deep and dark emptiness </span>"
// divMain.textContent = "take from me my guitar and it'll only exist a deep and dark emptiness"
var newDiv = document.createElement("div");
newDiv.textContent = "So, please, don't take from me my guitar.";
// divMain.appendChild(newDiv);
divMain.insertBefore(newDiv, divMain.firstChild);
