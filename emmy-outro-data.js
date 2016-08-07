var introString = "Welcome back, $user. How're you feeling?";
var textStrings = [
    "I hope you're hanging in there alright. Don't be afraid to talk out your feelings, now.",
    "I want you to know you've done great thus far. You're making great progress. Please keep talking to me for as long as you'd like to. I apologize in advance if I get a little reptitive. Just say \"I'm done with treatment\" to end the treatment.",
    "I hope I've helped you today. Feel free to come back anytime. I'll always be here"
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