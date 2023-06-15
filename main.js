let mainArray = [
    ['sad','quote1', 'quote2'],
    ['happy', 'quote1', 'quote2', 'quote3', 'quote4', 'quote number 5'],
    ['unmotivated', 'quote1', 'quote2', 'quote3']
];

const arraySelector =(mood) => {
    // Select which array set to generate quotes from.
    switch (mood) {
        case "sad":
            return mainArray[0];
            break;
        case "happy":
            return mainArray[1];
            break;
        case "unmotivated":
            return mainArray[2];
            break;
        default:
            console.log('Mood not recognized');
            break;
    }
}

console.log(arraySelector('sad'));

// Will use arraySelector to output the correct arrays
const mixedMessages = (mood) => {

}