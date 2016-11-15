var introString = "Hi! My name is Emmy, named after EMDR. I'm here to help you with the EMDR Treatment. The EMDR treatment is designed to help you move forward from memories that hold you back. What's your name?";
var textStrings = [
    "Nice to meet you, $user!  Now, I know this can be difficult, but for the treatment to work, I need you to relive the memory you want to move past. Really envision it. So, take a moment, and when you feel up to it, tell me about it. I'll wait here as long as I need to.",
    "How did you feel about that?",
    "That sounds like it was tough, $user... Let's try talking about it a different way. What positive qualities do you think you displayed there?",
    "Good! Now let's try reframing the whole situation. Describe the situation again, but this time only describing yourself positively!",
    "That's great! Now, we can do this again (respond \"Again\") or we can proceed to the EMDR part of the treatment (respond \"I'm ready\"). Either one is okay, take your time deciding, okay?",
    "Okay, when you hit ENTER again, you'll see a big glowy dot moving around the screen. Concentrate on the positive description of the events you've told me about, and follow the dot with your eyes.",
    "Here we go!"
];
var startLoop = 0;

function updateCustomLogic(userText) {
    if(stringIndex === 0) {
        setUserName(userText);
    }
    
    if(stringIndex === 5) {
        if(compareString('Again', userText) > .7) {
            stringIndex = startLoop;
        }
        else if(compareString('I\'m ready', userText) > .7) {
            return;
        }
        else {
            stringIndex -= 1;
        }
    }
    
    if(stringIndex >= textStrings.length - 1) {
            loadEMDRTreatment();
    }
}