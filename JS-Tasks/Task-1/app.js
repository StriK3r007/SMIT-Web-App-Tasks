function myFunction() {
    const numArray = [1, 2, 3, 4, 5 ];
    const myNumber = document.getElementById("myNumber").value;
    // const evens = numArray.filter(num => num % 2 === 0);
    
    if (myNumber.length == 0) {
        alert("Please enter a number");
    } else {
        numArray.push(myNumber)

        let even = [];
        let odd = [];

        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] % 2 === 0) {
                even.push(numArray[i]);
            } else {
                odd.push(numArray[i]);
            }
        }

        console.log("Numbers are: " + numArray);
        console.log("Even Numbers are: " + even);
        console.log("Odd Numbers are: " + odd);

        document.getElementById("mixNumbers").innerHTML = numArray;
        document.getElementById("evenNumbers").innerHTML = even;
        document.getElementById("oddNumbers").innerHTML = odd;
    }
}