function loadPreEMDRTreatment() {
    window.location.href = "./emmy_intro.html";
}

function loadEMDRTreatment() {
    window.location.href = "./emdr.html";
}

function loadPostEMDRTreatment() {
    window.location.href = "./emmy_outro.html";
}

function loadFinal() {
    window.location.href = "./app_final_screen.html";
}

function loadDisclaimer() {
    window.location.href = "./disclaimer.html";
}

function clearLocalData() {
    document.cookie = "";
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