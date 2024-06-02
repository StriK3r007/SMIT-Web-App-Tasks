function myFunction() {
    const numArray = [1, 2, 3, 4, 5];
    const myNumber = parseInt(document.getElementById("myNumber").value);
    // const myNumber = document.getElementById("myNumber").value;
    // const evens = numArray.filter(num => num % 2 === 0);
    
    // if(isNaN(myNumber) || myNumber <=0 ){
    //     alert("Please enter a valid number");
    //     return;
    // }

    if (isNaN(myNumber) || myNumber <= 0) {
        // alert("Please enter a valid number");
        document.getElementById("myNum").innerHTML ="Please enter a valid number";
        document.getElementById('myNum').style.color = "#f00";
        
    } else {
        numArray.push(myNumber)

        let even = [];
        let odd = [];
        let evenCount = 0
        let oddCount = 0

        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] % 2 === 0) {
                even.push(numArray[i]);
                evenCount++;
            } else {
                odd.push(numArray[i]);
                oddCount++;
            }
        }

        if (myNumber % 2 === 0) {
            document.getElementById("myNum").innerHTML ="The number you entered is even";
            document.getElementById('myNum').style.color = "#000";
        } else {
            document.getElementById("myNum").innerHTML = "The number you entered is odd";
            document.getElementById('myNum').style.color = "#000";
        }

        console.log("Numbers are: " + numArray);
        console.log("Even Numbers are: " + even);
        console.log("Odd Numbers are: " + odd);

        console.log(`Number of Envens ${evenCount}`)
        console.log(`Number of Odds ${oddCount}`)

        document.getElementById("mixNumbers").innerHTML = numArray;
        document.getElementById("evenNumbers").innerHTML = even;
        document.getElementById("oddNumbers").innerHTML = odd;
        document.getElementById("numberCounter").innerHTML = numArray.length;
        document.getElementById("evenCounter").innerHTML = evenCount;
        document.getElementById("oddCounter").innerHTML = oddCount;
    }
}