// Function Declaration
function findAge1(currentyear,yearBirth){
    return currentyear - yearBirth;
}
const age1 = findAge1(2023,2001);
console.log(`Your age is ${age1}`);


//Function Expression
const currentAge1  = function(currentyear,yearBirth){
    return currentyear - yearBirth;
}
const age2 = currentAge1(2023,2001);
console.log(`Your age is ${age2}`);


//Arrow Function 
// const currentAge2 = (currentyear,yearBirth) => {
//     return currentyear-yearBirth;
// }
const currentAge2 = (currentyear,yearBirth) => currentyear-yearBirth; // or we can do like this if there is only one statement in function

const age3 = currentAge2(2023,2001);
console.log(`Your age is ${age3}`);


//Section-3 Challenge-1
const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins > avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if(avgDolphins > avgKoalas * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log(`No team wins...`);
}

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

checkWinner(scoreDolphins,scoreKoalas);

