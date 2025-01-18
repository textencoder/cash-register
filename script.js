let price = 1.87;
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
})

cashInput.addEventListener('keydown', e => {
  if (e.key == "Enter" || e.key == 13) {
    processTransaction(cashInput.value);
  }
})

function processTransaction(cash) {
  let changeDue = Number(Math.abs(price - cash).toFixed(2));
  console.log('original change due', changeDue);

//subtract each denomination from changeDue
  for (let i=cid.length - 1; i > 0; i--) {
    if (cid[i][1] > 0.00 && cid[i][1] < changeDue) {
        changeDue -= cid[i][1];
        console.log('money taken from', cid[i][1]);
        console.log('remaining change due', Number(changeDue.toFixed(2)));
    }
  }


  if (changeDue > totalCashInDrawer) {
    changeDueDisplay.innerText = "Status: INSUFFICIENT_FUNDS";
  }

  if (changeDue == 0) {
    changeDueDisplay.innerText = "No change due - customer paid with exact cash";
  }

  if (changeDue == totalCashInDrawer) {
    changeDueDisplay.innerText = "Status: CLOSED";
  }
}