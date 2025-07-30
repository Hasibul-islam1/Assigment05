// nokhali btn done 
let mainMoney = getNumberByText("main-money");
const timeNow = new Date();
document.getElementById("noakhali-donate-btn").addEventListener("click", () => {
    let noakhaliManey = getNumberByText("noakhali-donate-money");
    let noakhaliAmont = getNumberByValue("noakhali-donate-box");
    let noakhaliAmontIntager = makeValueIntager(noakhaliAmont);

    if (AmountValidition(noakhaliAmont) && 0 < noakhaliAmontIntager && noakhaliAmontIntager < mainMoney) {
        let sumDonate = noakhaliManey + noakhaliAmontIntager;
        let subMainMoney = mainMoney - noakhaliAmontIntager;
        satValue("noakhali-donate-money", sumDonate);
        satValue("main-money", subMainMoney);
        emptybox("noakhali-donate-box");
        alert(`${noakhaliAmontIntager} Donate`);
        history(noakhaliAmont, "Flood at Noakhali", timeNow);
    } else {
        alert("Wrong Amount");
        return;
    }

})
let modal = document.getElementById("noakhali-donate-btn");
modal.setAttribute("onclick", "my_modal_1.showModal()");
