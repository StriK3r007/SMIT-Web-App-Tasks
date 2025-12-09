function printTable() {
    let tableInput = prompt('Enter a table name');

    if(isNaN(tableInput) || tableInput <= 0) {
        alert('Please enter a number greater than 0');
        return printTable();
    }

    console.log('Tables Book');
    for (let i = 1; i <= tableInput; i++) {
        console.log(`\n`);
        console.log(`Table of ${i}`);
        console.log(`================================`);

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
            table = (`${i} x ${j} = ${i * j}`);
            // document.getElementById('table').innerHTML = (`${i} x ${j} = ${i * j}`);
        }
    }
}

console.log(printTable())