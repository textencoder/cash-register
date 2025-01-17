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

const changeDue = document.getElementById('change-due');
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');

purchaseBtn.addEventListener('click', () => {
  processTransaction(cashInput.value);

})

function processTransaction(cash) {
  let changeOwed = Math.abs(price - cash);
  console.log(changeOwed);

  if (changeOwed > totalCashInDrawer) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
  }

  if (changeOwed == 0) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  }

  if (changeOwed == totalCashInDrawer) {
    changeDue.innerText = "Status: CLOSED";
  }
}