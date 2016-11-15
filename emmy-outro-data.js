var introString = "Welcome back, $user. How're you feeling?";
var textStrings = [
    "I hope you're hanging in there alright. Don't be afraid to talk about your feelings, $user.",
    "I want you to know you're making great progress, $user. Please keep talking to me for as long as you'd like to. Just say \"I'm done with treatment\" to end the treatment.",
    "I hope I've helped you today, $user. Feel free to come back anytime. I'll always be here"
];
var startLoopIndex = 0;

function updateCustomLogic(userText) {
    if(stringIndex === textStrings.length - 1) {
        if(compareString('I\'m done with treatment', userText) <= .7) {
            stringIndex = 0;
        }
    }
    
    if(stringIndex > textStrings.length - 1) {
        loadFinal();
    }
}