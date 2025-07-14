let inputBox = document.getElementById("inputBox");
let prev = 0;
function append(val){
    inputBox.value += val;
}
function clearBtn(){
    inputBox.value = " ";
}
function calculate(){
    try {
        prev = inputBox.value;
        inputBox.value =eval(inputBox.value);
    } catch (error) {   
        inputBox.value = "Error";
    }
}
function Back(){
    inputBox.value = inputBox.value.slice(0, -1);
}
let result = document.getElementById("result");
inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault(); // Prevent the default action of the Enter key
        calculate(); // Call the calculate function when Enter is pressed
    }
    else if(event.key === "Backspace") {
        event.preventDefault(); // Prevent the default action of the Backspace key
        Back(); // Call the Back function when Backspace is pressed
    }
    else if(event.key === "c" || event.key === "C") {
        event.preventDefault(); // Prevent the default action of the 'c' key
        clearBtn(); // Call the clear function when 'c' is pressed
    }
    else if(event.key === "shift" || event.key === "Shift") {
        event.preventDefault(); // Prevent the default action of the Shift key
        // Do nothing, as Shift is not used for any operation in this calculator
    }
    else if('0123456789+-*/.()%'.includes(event.key)){
        event.preventDefault(); // Prevent the default action of the key
        append(event.key); // Append the pressed key to the input box'{

    }
    else{
        inputBox.value = "Invalid Key";
    }
}
);
let save = document.getElementById("save");
save.addEventListener("click", function() {
    addToHistory(prev, eval(inputBox.value));
    inputBox.value = ""; // Clear the input box after saving
    displayHistory(); // Update the history display
});
let calculationHistory = [];
function addToHistory(expression, result) {
    calculationHistory.push({ expression, result });
    if (calculationHistory.length > 10) {
        calculationHistory.shift(); // Remove the oldest entry if history exceeds 10 items
    }
}
function displayHistory() {
    let historyContainer = document.getElementById("calculationsList");
    historyContainer.innerHTML = ""; // Clear the current history display
    let historyItem = document.createElement("li");
    historyItem.textContent = "Calculation History";
    historyContainer.appendChild(historyItem);
    for(let i of calculationHistory){
        historyItem = document.createElement("li");
        historyItem.textContent = `${i.expression} = ${i.result}`;
        historyContainer.appendChild(historyItem);
    }
}