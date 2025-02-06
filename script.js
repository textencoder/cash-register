let price = 2;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const changeDueDisplay = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");

//submit click and enter buttons
purchaseBtn.addEventListener("click", () => {
  processTransaction(cashInput.value);
  cashInput.value = "";
});

cashInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter" || e.key == 13) {
    processTransaction(cashInput.value);
    cashInput.value = "";
  }
});

function processTransaction(cash) {
  let changeDue = Number(Math.abs(price - cash).toFixed(2));
  console.log("change due", changeDue);

  //total cash in drawer
  let totalCashInDrawer = 0;
  drawerSum: for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }
  console.log("Cash in drawer:", Number(totalCashInDrawer.toFixed(2)));

  

  //initial checks
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (changeDue > totalCashInDrawer) {
    changeDueDisplay.innerText = "Status: INSUFFICIENT_FUNDS";
    console.log("Status: INSUFFICIENT_FUNDS");
  } else if (changeDue == 0) {
    changeDueDisplay.innerText =
      "No change due - customer paid with exact cash";
    console.log("No change due - customer paid with exact cash");
  } else if (changeDue == totalCashInDrawer) {
    changeDueDisplay.innerText = "Status: CLOSED";
    console.log("Status: CLOSED");
  } else {
    let changeSummary = '';

    

    //subtract each denomination from changeDue
    for (let i = cid.length - 1; i >= 0; i--) {
      if (cid[i][1] > 0.0) {
        if (cid[i][0] == "ONE HUNDRED") {
          let count = 0;
          while (changeDue >= 100 && cid[i][1] >= 100) {
            count += 100;
            count = Number(count.toFixed(2))
            cid[i][1] -= 100;
            changeDue -= 100;
            
            changeDue = Number(changeDue.toFixed(2));
            console.log("$100 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += `${cid[i][0]}: $${count}`;
          }
          
        } else if (cid[i][0] == "TWENTY") {
          let count = 0;
          while (changeDue >= 20 && cid[i][1] >= 20) {
            count += 20;
            count = Number(count.toFixed(2))
            cid[i][1] -= 20;
            changeDue -= 20;
            
            changeDue = Number(changeDue.toFixed(2));
            console.log("$20 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
          
        } else if (cid[i][0] == "TEN") {
          let count = 0;
          while (changeDue >= 10 && cid[i][1] >= 10) {
            count += 10;
            count = Number(count.toFixed(2))
            cid[i][1] -= 10;
            changeDue -= 10;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$10 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        } else if (cid[i][0] == "FIVE") {
          let count = 0;
          while (changeDue >= 5 && cid[i][1] >= 5) {
            count += 5;
            count = Number(count.toFixed(2))
            cid[i][1] -= 5;
            changeDue -= 5;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$5 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        } else if (cid[i][0] == "ONE") {
          let count = 0;
          while (changeDue >= 1 && cid[i][1] >= 1) {
            count += 1;
            count = Number(count.toFixed(2))
            cid[i][1] -= 1;
            changeDue -= 1;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$1 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        } else if (cid[i][0] == "QUARTER") {
          let count = 0;
          while (changeDue >= 0.25 && cid[i][1] >= 0.25) {
            count += 0.25;
            count = Number(count.toFixed(2))
            cid[i][1] -= 0.25;
            changeDue -= 0.25;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$0.25 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        } else if (cid[i][0] == "DIME") {
          let count = 0;
          while (changeDue >= 0.1 && cid[i][1] >= 0.1) {
            count += 0.1;
            count = Number(count.toFixed(2))
            cid[i][1] -= 0.1;
            changeDue -= 0.1;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$0.1 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        } else if (cid[i][0] == "NICKEL") {
          let count = 0;
          while (changeDue >= 0.05 && cid[i][1] >= 0.05) {
            count += 0.05;
            count = Number(count.toFixed(2))
            cid[i][1] -= 0.05;
            changeDue -= 0.05;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$0.05 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        } else if (cid[i][0] == "PENNY") {
          let count = 0;
          while (changeDue >= 0.01 && cid[i][1] >= 0.01) {
            count += 0.01;
            count = Number(count.toFixed(2))
            cid[i][1] -= 0.01;
            changeDue -= 0.01;
            changeDue = Number(changeDue.toFixed(2));
            console.log("$0.01 taken from register");
            console.log(changeDue);
          }
          if (count > 0) {
            changeSummary += ` ${cid[i][0]}: $${count}`;
          }
        }
      }
    }
  
    totalCashInDrawer = 0;
    drawerSum: for (let i = 0; i < cid.length; i++) {
      totalCashInDrawer += cid[i][1];
    }
  
    if (totalCashInDrawer == 0) {
      changeDueDisplay.innerText = "Status: CLOSED " + changeSummary;
      console.log("Status: CLOSED");
    }
    else if (totalCashInDrawer > 0) {
      changeDueDisplay.innerText = "Status: OPEN " + changeSummary;
      console.log("Status: OPEN");
    }
  }

  


  if (changeDue) {
    changeDueDisplay.innerText = "Status: INSUFFICIENT_FUNDS";
    console.log("Status: INSUFFICIENT_FUNDS")
  }
}
