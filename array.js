// //1st way to createarray
// const num = [10, 20, 30, 40, 50];

// num[3] = 55;
// num[5] = 69;

// console.log(num);

// //2nd way to create Array
// const no = new Array(1, 2, 3, 4, 5, 6, 7, 8);

// no[2] = 88;
// no[8] = 99;

// console.log(no);

// const newArr = [num, no];
// console.log(newArr);

//Sectio-3 Challenge-2
const bills = [125, 555, 44];

const calcTip = (bills) => {
  if (bills > 50 && bills < 300) {
    return bills * 0.15;
  }
  return bills * 0.2;
};

const tips = [calcTip(125), calcTip(555), calcTip(44)];

const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totalBill);