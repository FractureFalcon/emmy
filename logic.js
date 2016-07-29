function beginTreatment() {
    window.location.href = "./app_part_one.html";
}

function loadPartTwo() {
    window.location.href = "./app_part_two.html";
}

function loadEMDRTreatment() {
    window.location.href = "./emdr.html";
}

function clearLocalData() {
    // stub
}

function restartApp() {
    window.location.href = "./index.html";
}

function exitApp() {
    close();
}

function addLoadEvent(event) {
    if(window.onload) {
        oldLoad = window.onload;
        window.onload = function() {
            oldLoad();
            event();
        };
    }
    else {
        window.onload = event;
    }
}

// here to be customizable - pass this var to emdrCanvasControl
var emdrTime = 30; // seconds