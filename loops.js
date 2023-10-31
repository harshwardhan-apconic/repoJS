// -------------basic for-loop
// for (let i = 0; i < 10; i++) {
//   console.log("For Loop ♾️");
// }

// -------------backward for-loop
// for (let i = 10; i >= 1; i--) {
//   console.log("For Loop ♾️  : ", i);
// }

// -------------break
// for (let i = 0; i < 10; i++) {
//   if (i == 7) {
//     break;
//   }
//   console.log("For Loop ♾️  : ", i);
// }

// -------------continue
// for (let i = 0; i < 10; i++) {
//   if (i == 7) {
//     continue;
//   }
//   console.log("For Loop ♾️  : ", i);
// }

// -------------nested-for
// for (let i = 0; i < 4; i++) {
//   console.log("-------------------Outer Loop ♾️  " + (i + 1));

//   for (let j = 0; j < 6; j++) {
//     console.log("Inner Loop ♾️  " + (j + 1));
//   }
// }

// -------------while
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

// -------------do-while
// let dice = Math.trunc(Math.random() * 6) + 1;

// do {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// } while (dice !== 6);

//Section-3 Challenge-4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
  console.log(totals[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let val of arr) sum += val;

  return sum / arr.length;
};

console.log(totals);
console.log(calcAverage(totals));
