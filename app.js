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
        alert(`${noakhaliAmontIntager} Donate`);
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

document.getElementById("feni-donate-btn").addEventListener("click",()=>{
    let feniMoney=getNumberByText("feni-donate-money")
    let feniAmount=getNumberByValue("feni-donate-box")
    let feniAmontIntager=makeValueIntager(feniAmount);

    if (AmountValidition(feniAmount)&&0<feniAmontIntager && feniAmontIntager<mainMoney) {
        let sumDonate=feniMoney+feniAmontIntager;
        let subMainMoney=mainMoney-feniAmontIntager;
            satValue("feni-donate-money",sumDonate);
            satValue("main-money",subMainMoney);
            emptybox("feni-donate-box");
            history(feniAmontIntager,"Flood Relief in Feni",timeNow);

    } else {
        alert("Wrong Amount ");
        return;
    }
})
