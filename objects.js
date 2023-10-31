const harsh = {
  firstname: "Harshwardhan",
  lastname: "Verma",
  birthYear: 2001,
  friends: ["chintu", "pintu", "mintu"],
  age: function () {
    return 2023 - this.birthYear;
  },

  getSummary: function () {
    return `\tFirst Name : ${this.firstname}  
        Last Name : ${this.lastname} 
        Year Of Birth : ${this.birthYear}
        Age : ${this.age()}
        City : ${this.city} 
        State : ${this.state}
        Friends : ${this.friends}`;
  }
};

// console.log(harsh);
// console.log(harsh.firstname);
// console.log(harsh.friends);


// console.log(harsh['firstname']);
// console.log(harsh['friends']);


// console.log(harsh.age());
// console.log(harsh['age']());


harsh.city = "Indore";
harsh["state"] = "MP";


// console.log(harsh);


// console.log(`${harsh.firstname} has ${harsh.friends.length}, and his best friend name is ${harsh.friends[1]} .`)


// console.log(harsh.getSummary());


//Section-3 Challenge-3
const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height :1.69,
    calcBMI: function(){
        this.bmi =  this.mass/(this.height * this.height );
        return this.bmi;
    }
};

const john = {
    fullName : 'John Smith',
    mass : 92,
    height :1.95,
    calcBMI: function(){
        this.bmi =  this.mass/(this.height * this.height );
        return this.bmi;
    }
};

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ${john.bmi}!".`);
}
else if(mark.bmi < john.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}!".`);
}