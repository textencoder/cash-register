let price = 2;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let totalCashInDrawer = 0;
drawerSum: for (let i=0; i<cid.length; i++) {
  totalCashInDrawer += cid[i][1];
}

console.log('Cash in drawer:', Number(totalCashInDrawer.toFixed(2)))

const changeDueDisplay = document.getElementById('change-due');
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');

//submit click and enter buttons
purchaseBtn.addEventListener('click', () => {
  processTransaction(cashInput.value);
  cashInput.value = '';
})

cashInput.addEventListener('keydown', e => {
  if (e.key == "Enter" || e.key == 13) {
    processTransaction(cashInput.value);
    cashInput.value = '';
  }
})

function processTransaction(cash) {
  let changeDue = Number(Math.abs(price - cash).toFixed(2));
  console.log('change due', changeDue);

  //initial checks
  if (changeDue > totalCashInDrawer) {
    changeDueDisplay.innerText = "Status: INSUFFICIENT_FUNDS";
  }

  if (changeDue == 0) {
    changeDueDisplay.innerText = "No change due - customer paid with exact cash";
  }

  if (changeDue == totalCashInDrawer) {
    changeDueDisplay.innerText = "Status: CLOSED";
  }

//subtract each denomination from changeDue
  for (let i=cid.length - 1; i >= 0; i--) {
    if (cid[i][1] > 0.00) {
      if (cid[i][0] == 'ONE HUNDRED') {
        while (changeDue >= 100 && cid[i][1] >= 100) {
          cid[i][1] -= 100;
          changeDue -= 100;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$100 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'TWENTY') {
        while (changeDue >= 20 && cid[i][1] >= 20) {
          cid[i][1] -= 20;
          changeDue -= 20;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$20 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'TEN') {
        while (changeDue >= 10 && cid[i][1] >= 10) {
          cid[i][1] -= 10;
          changeDue -= 10;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$10 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'FIVE') {
        while (changeDue >= 5 && cid[i][1] >= 5) {
          cid[i][1] -= 5;
          changeDue -= 5;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$5 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'ONE') {
        while (changeDue >= 1 && cid[i][1] >= 1) {
          cid[i][1] -= 1;
          changeDue -= 1;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$1 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'QUARTER') {
        while (changeDue >= 0.25 && cid[i][1] >= 0.25) {
          cid[i][1] -= 0.25; 
          changeDue -= 0.25;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$0.25 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'DIME') {
        while (changeDue >= 0.1 && cid[i][1] >= 0.1) {
          cid[i][1] -= 0.1;
          changeDue -= 0.1;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$0.1 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'NICKEL') {
        while (changeDue >= 0.05 && cid[i][1] >= 0.05) {
          cid[i][1] -= 0.05;
          changeDue -= 0.05;
          changeDue = Number(changeDue.toFixed(2))
          console.log('$0.05 taken from register');
          console.log(changeDue);
        }
      } else if (cid[i][0] == 'PENNY') {
        while (changeDue >= 0.01 && cid[i][1] >= 0.01) {
          cid[i][1] -= 0.01;
          changeDue -= 0.01;
          changeDue = Number(changeDue.toFixed(2));
          console.log('$0.01 taken from register');
          console.log(changeDue);
        }
      }
    }
  }


  
    
}