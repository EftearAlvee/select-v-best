let selectedPlayer = 0;
let playerExpense = 0;

function addPlayer(name, btnId) {
    const item = document.createElement("li");
    const textItem = document.createTextNode(name);
    item.appendChild(textItem);
    const ol = document.getElementById("playerList");

    const element = document.getElementById(btnId);

    if (ol.childElementCount < 5) {
        ol.appendChild(item);
        element.classList.add("bg-gray-400");
        element.classList.remove("bg-sky-600");
        selectedPlayer++;
    } else {
        alert('nope');
        element.classList.add("bg-red-400");
        element.classList.remove("bg-sky-600");
    }
}

function calculateBtn() {
    const price = document.getElementById("playerPrice").value;
    const calculatedPrice = price * selectedPlayer;
    playerExpense = calculatedPrice;
    document.getElementById("playerExpense").innerHTML = calculatedPrice;
}

function calculateTotalBtn() {
    const managerPrice = document.getElementById("managerPrice").value;
    const coachPrice = document.getElementById("coachPrice").value;
    const calculatedTotalPrice = parseInt(playerExpense) + parseInt(managerPrice) + parseInt(coachPrice);
    document.getElementById("totalExpense").innerHTML = calculatedTotalPrice;
}