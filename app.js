// nokhali btn done 
let mainMoney = getNumberByText("main-money");
const timeNow = new Date();
document.getElementById("noakhali-donate-btn").addEventListener("click", () => {
    // get all data 
    let noakhaliManey = getNumberByText("noakhali-donate-money");
    let noakhaliAmont = getNumberByValue("noakhali-donate-box");
    let noakhaliAmontIntager = makeValueIntager(noakhaliAmont);
    // cheak validation
    if (AmountValidition(noakhaliAmont) && 0 < noakhaliAmontIntager && noakhaliAmontIntager < mainMoney) {
        //   Calaction 
        let sumDonate = noakhaliManey + noakhaliAmontIntager;
        let subMainMoney = mainMoney - noakhaliAmontIntager;
        // set value in Html
        satValue("noakhali-donate-money", sumDonate);
        satValue("main-money", subMainMoney);
        // input box empty 
        emptybox("noakhali-donate-box");
        // money add alart 
        alert(`${noakhaliAmontIntager} Donate Flood at Noakhali`);
        // add History in html 
        history(noakhaliAmont, "Flood at Noakhali", timeNow);
    } else {
        alert("Wrong Amount");
        return;
    }

})
// set modal in noakhali btn 
let modal = document.getElementById("noakhali-donate-btn");
modal.setAttribute("onclick", "my_modal_1.showModal()");


// feni donate 

document.getElementById("feni-donate-btn").addEventListener("click", () => {
    let feniMoney = getNumberByText("feni-donate-money")
    let feniAmount = getNumberByValue("feni-donate-box")
    let feniAmontIntager = makeValueIntager(feniAmount);

    if (AmountValidition(feniAmount) && 0 < feniAmontIntager && feniAmontIntager < mainMoney) {
        let sumDonate = feniMoney + feniAmontIntager;
        let subMainMoney = mainMoney - feniAmontIntager;
        satValue("feni-donate-money", sumDonate);
        satValue("main-money", subMainMoney);
        emptybox("feni-donate-box");
        alert(`${feniAmontIntager} Donate Flood Relief in Feni`);
        history(feniAmontIntager, "Flood Relief in Feni", timeNow);

    } else {
        alert("Wrong Amount ");
        return;
    }
})
// set modal in feni btn 
let modal2 = document.getElementById("feni-donate-btn");
modal2.setAttribute("onclick", "my_modal_1.showModal()");

// quota  movement 

document.getElementById("movement-help-btn").addEventListener("click", () => {
    let movementMoney = getNumberByText("movement-help-money");
    let movementAmount = getNumberByValue("movement-help-box");
    let movementAmountIntager = makeValueIntager(movementAmount);

    if (AmountValidition(movementAmount) && 0 < movementAmountIntager && movementAmountIntager < mainMoney) {
        let sumDonate = movementMoney + movementAmountIntager;
        let subMainMoney = mainMoney - movementAmountIntager;
        satValue("movement-help-money", sumDonate);
        satValue("main-money", subMainMoney);
         alert(`${movementAmountIntager} Donate Quota Movement `);
        emptybox("movement-help-box");
        history(movementAmount,"Injured in the Quota Movement",timeNow);
    } else {
        alert("Wrong Amount ");
        return;
    }
})

// set modal in quota  movement
let modal3 = document.getElementById("movement-help-btn");
modal3.setAttribute("onclick", "my_modal_1.showModal()");