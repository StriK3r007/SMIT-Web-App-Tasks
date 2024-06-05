function pattern1(userInput, pyCharacter) {
    let pattern = '';
    for (i = 0; i < userInput; i++) {
        for (j = 0; j <= i; j++) {
            pattern += ' ';
            pattern += pyCharacter;
        }
        pattern += '\n';
    }
    console.log(pattern);
    document.getElementById('pyramid-1').innerHTML = pattern;
}

function pattern2(userInput, pyCharacter) {
    let pattern = '';
    for (i = 0; i < userInput; i++) {
        for (j = 0; j < userInput - i; j++) {
            pattern += ' ';
        }
        for (k = 0; k <= i; k++) {
            pattern += pyCharacter;
        }
        pattern += '\n';
    }
    console.log(pattern);
    document.getElementById('pyramid-2').innerHTML = pattern;
}

function pattern3(userInput, pyCharacter) {
    let pattern = '';
    for (i = 0; i < userInput; i++) {
        for (j = 0; j < userInput - i; j++) {
            pattern += ' ';
        }
        for (k = 0; k <= i; k++) {
            pattern += pyCharacter;
            pattern += ' ';
        }
        pattern += '\n';
    }
    console.log(pattern);
    document.getElementById('pyramid-3').innerHTML = pattern;
}

function pattern4(userInput, pyCharacter) {
    let pattern = '';
    for (i = 0; i < userInput; i++) {
        for (j = 0; j < i; j++) {
            pattern += ' ';
        }
        for (k = 0; k < 2 * (userInput - i) - 1; k++) {
            pattern += pyCharacter;
        }
        pattern += "\n";
    }
    console.log(pattern);
    document.getElementById('pyramid-4').innerHTML = pattern;
}

function pyramidPrint() {
    let pyBlock = Number(document.getElementById('pyBlocks').value);
    let pyCharacter = document.getElementById('pyCharacter').value;
    console.log(pattern1(pyBlock, pyCharacter))
    console.log(pattern2(pyBlock, pyCharacter))
    console.log(pattern3(pyBlock, pyCharacter))
    console.log(pattern4(pyBlock, pyCharacter))
}