var emmy;
var text;
var username = "You: ";
var introString = "Hi! My name is Emmy, named after EMDR. I'm here to help you with the EMDR Treatment. What's your name?";
var textStrings = [
    "Nice to meet you! The EMDR treatment is designed to help you move forward from memories that hold you back. I know this is hard, but for this to work, you'll have to relive that experience and tell me about it. Tell me what happened when you're ready.",
    "How did you feel about that?",
    "That sounds tough... Let's talk about it another way. What positive traits do you think you displayed in that situation?",
    "You're doing great! Why don't you reframe the whole situation? Describe yourself positively! No negative thoughts now. :)",
    "Great! Now focus on that positive description. After you hit ENTER again, you'll see a black screen with a bright dot. Focus on the dot while thinking about that positive description, okay?",
    "Here we go!"
];
var stringIndex = 0;

function addEmmyText(string) {
    emmy = document.getElementById("emmy");
    emmy.innerHTML += "<span class='emmy-talk'>Emmy: </span>"; 
    emmy.innerHTML += string;
    emmy.innerHTML += "<br>";
    
    setScroll();
}

function addUserText(string) {
    emmy = document.getElementById("emmy");
    emmy.innerHTML += "<span class='user-talk'>" + username + "</span>";
    emmy.innerHTML += string;
    emmy.innerHTML += "<br>";
    
    setScroll();
}

function setScroll() {
    emmy.scrollTop = emmy.scrollHeight;
}

function submitText(event) {
    //alert(event.keyCode);
    if(event === null || event.keyCode === 13) {
        text = document.getElementById("text-input");
        
        if(stringIndex === 0) {
            setUserName(text.value);
        }
        
        addUserText(text.value);
        text.value = "";
        
        addEmmyText(textStrings[stringIndex]);
        stringIndex += 1;
        
        if(stringIndex > textStrings.length - 1) {
            loadEMDRTreatment();
        }
    }
};

function setUserName(name) {
    username = name + ": ";
}

addLoadEvent(function () {
    addEmmyText(introString);
});