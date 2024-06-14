function quickTask() {
    let userInput = document.getElementById('userInput').value;
    let newString = '';
    if (userInput === '' || userInput < 0 || userInput > 0) {
        document.getElementById('output').innerHTML = 'Please enter alphabetical string';
        // console.log('Please enter a valid string');
    } else {

        for (let i = 0; i < userInput.length; i++) {
            newString += userInput[i] + (i + 1) + ' ';
        }
    }
    console.log(newString);
    document.getElementById('output').innerHTML = newString;
}