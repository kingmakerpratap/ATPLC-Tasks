function filterNegativeNumbers() {
    let inputValues = document.getElementById("numList").value.split(",").map(Number);
    let filtered = inputValues.filter(num => num >= 0);
    document.getElementById("output1").innerText = "Filtered Array: " + filtered.join(", ");
}

function calculateDifference() {
    let num = parseFloat(document.getElementById("diffNum").value);
    let diff = (num > 13) ? (Math.abs(num - 13) * 2) : (13 - num);
    document.getElementById("output2").innerText = "Difference: " + diff;
}

function generateFibonacci() {
    let n = parseInt(document.getElementById("fibNum").value);
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    document.getElementById("output3").innerText = "Fibonacci Series: " + fib.join(", ");
}

function sumMultiples() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    document.getElementById("output4").innerText = "Sum: " + sum;
}

function calculateCube() {
    let num = parseFloat(document.getElementById("cubeNum").value);
    let cube = Math.pow(num, 3);
    document.getElementById("output5").innerText = "Cube: " + cube;
}