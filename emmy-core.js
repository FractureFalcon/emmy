var emmy;
var text;
var username = "You";
var stringIndex = 0;

function emmyInit() {
    getUserName();
    emmy = document.getElementById("emmy");
    text = document.getElementById("text-input");
}

function addEmmyText(string) {
    emmy.innerHTML += "<span class='emmy-talk'>Emmy: </span>"; 
    
    let parsedString = parseString(string);
    
    emmy.innerHTML += parsedString;
    emmy.innerHTML += "<br>";
    
    setScroll();
}

function parseString(string) {
    let newString = string.replace('$user', username);
    
    return newString;
}

function addUserText(string) {
    emmy.innerHTML += "<span class='user-talk'>" + username + ": </span>";
    emmy.innerHTML += string;
    emmy.innerHTML += "<br>";
    
    setScroll();
}

function setScroll() {
    emmy.scrollTop = emmy.scrollHeight;
}

function submitText(event) {
    if(event === null || event.keyCode === 13) {
        updateCustomLogic(text.value);
        
        addUserText(text.value);
        text.value = "";
        
        addEmmyText(textStrings[stringIndex]);
        stringIndex += 1;
    }
};

function getUserName() {
    let cookie = document.cookie;
    let cookieLabel = 'username=';
    let usernameIndex = cookie.indexOf(cookieLabel); 
    if(usernameIndex >= 0) {
        usernameIndex += cookieLabel.length;
        let usernameEnd = cookie.indexOf(';', usernameIndex);
        username = cookie.substr(usernameIndex, usernameEnd - usernameIndex);
    }
}

function setUserName(name) {
    username = name;
    document.cookie = 'username=' + name + ';';
}

// A function that returns how similar string1 is to string2
// for things like typos, extra spaces, etc...
function compareString(string1, string2) {
    //Right now it's just going to strcmp tho
    if(string1.toLowerCase() === string2.toLowerCase()) {
        return 1.0;
    }
    else {
        return 0.0;
    }
}

addLoadEvent(function () {
    emmyInit();
    addEmmyText(introString);
});