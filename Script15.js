function sortArray() {
    let inputValues = document.getElementById("sortArray").value.split(",").map(Number);
    let sortedArray = inputValues.sort((a, b) => a - b);
    document.getElementById("output1").innerText = "Sorted Array: " + sortedArray.join(", ");
}

function concatArrays() {
    let array1 = document.getElementById("array1").value.split(",").map(Number);
    let array2 = document.getElementById("array2").value.split(",").map(Number);
    let newArray = array1.concat(array2);
    document.getElementById("output2").innerText = "Concatenated Array: " + newArray.join(", ");
}

function removeFirstElement() {
    let inputArray = document.getElementById("removeArray").value.split(",").map(Number);
    inputArray.shift(); 
    document.getElementById("output3").innerText = "Updated Array: " + inputArray.join(", ");
}