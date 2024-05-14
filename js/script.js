// test 1
let MWI1 = "78";  //in kg
let MHI1 = "1.69"; //in m
let JWI1 = "92";  //in kg
let JHI1 = "1.95"; // in m


// for mark
let markBMI1 = MWI1 / MHI1 ** 2;
console.log (MWI1/(MHI1*MHI1));

// FOR JOHN
johnBMI1 = JWI1 / JHI1 ** 2;
console.log (JWI1/(JHI1*JHI1));



let markHigherBMI1 = markBMI1 > johnBMI1;

console.log ("Mark's BMI1", markBMI1);
console.log ("john's BMI1", johnBMI1);
console.log ("Is Mark's BMI1 higher than John's", markHigherBMI1);

// test 2

let MWI2 = "95";  //in kg
let MHI2 = "1.88"; //in m
let JWI2 = "85";  //in kg
let JHI2 = "1.76"; // in m

// for mark
let markBMI2 = MWI2 / MHI2 ** 2;
console.log (MWI2/(MHI2*MHI2));

// FOR JOHN
johnBMI2 = JWI2 / JHI2 ** 2;
console.log (JWI2/(JHI2*JHI2));

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log ("Mark's BMI2", markBMI2);
console.log ("john's BMI2", johnBMI2);
console.log ("Is Mark's BMI2 higher than John's", markHigherBMI2);