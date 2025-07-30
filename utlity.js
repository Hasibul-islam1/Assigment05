// get data by id inner text and convert number 
function getNumberByText(id) {
    let number = document.getElementById(id).innerText;
    return parseInt(number);
}
// get data by input box in id convert number
function getNumberByValue(id) {
    let numberValue = document.getElementById(id).value;
    return numberValue;
}
// value intager 
function makeValueIntager(value) {
    return parseInt(value);
}
// check number validition 
function AmountValidition(str) {
    return !isNaN(str);
}
// set data by using funcation 
function satValue(id, value) {
    let data = document.getElementById(id);
    data.innerText = value;
}
// input box empty funcation 
function emptybox(id) {
    document.getElementById(id).value = "";
}
// history funcation 
function history(amount, name, time) {
    let historyBox = document.getElementById("history");
    let makeDiv = document.createElement("div");
    makeDiv.setAttribute("class", "bg-base-100 shadow-sm space-y-4 text-xl p-3 rounded-md");
    makeDiv.innerHTML = `
    <p class="text-xl font-bold ">${amount} Taka is Donated for ${name}, Bangladesh</p>
            <p class="text-lg text-slate-500">Date:${time}</p>
    `
    historyBox.appendChild(makeDiv);
}