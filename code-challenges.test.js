// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.
describe("when makeItFabonacci is called", () => {
    it("returns [1, 1, 2, 3, 5, 8] when called with 6", () => {
        //Arrange 
        const num1 = 6;

        //Act
        const actualFabonacci = makeItFibonacci(num1);

        //Assert
        expect(actualFabonacci).toEqual([1, 1, 2, 3, 5, 8]);
    })
    it("returns [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] when called with 10", () => {
        //Arrange 
        const num2 = 10;
    
        //Act
        const actualFabonacci = makeItFibonacci(num2);
    
        //Assert
        expect(actualFabonacci).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    })
})

num1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

num2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

//create a function called makeitFibonacci that will be designated as a variable
//that takes in a number as an argument
var makeItFibonacci = (num) => {
    //these are conditionals that will push the return below into the array once the condition is met
    if (num === 1){
        return [1]
    //same with ths conditional, as the first two numbers are pushed into the array
    }else if (num === 2){
        return [1, 1]
    //else the way that recursion works is typically a count down from the number given
    }else{ 
    //a new variable is made to store the recursion to make it easy to call in the following lines num will be 6 or 10 then it subtracts one each time that it is recursively run
    var fibArr = makeItFibonacci(num - 1),
        //a new variable is created to help dig into the array
        fibLength = fibArr.length                    
        //fibArr will then push the fibArr with the value before added to the current value.
        fibArr.push(fibArr[fibLength - 1] + fibArr[fibLength - 2])
    //return the variable fibArr which was run the total times that the argument specifies
    return fibArr
    }
}

//recursion was mentioned on how to go about at Fibonacci with a google search. I watched a few videos on recursion, and it took me a hot minute to wrap my brain around it. Turns out to be a powerful tool for looping down back to zero and accomplishing tasks along the way down to 1





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("when findOddOnly is called", () => {
    it("returns [-9, 7, 9, 199] when called with fullArr1", () => {
        //Arrange 
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];

        //Act
        const actualOdd = findOddOnly(fullArr1);

        //Assert
        expect(actualOdd).toEqual([-9, 7, 9, 199]);
    })
    it("returns [-823, 7, 23] when called withfullArr2", () => {
        //Arrange 
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
    
        //Act
        const actualOdd = findOddOnly(fullArr2);
    
        //Assert
        expect(actualOdd).toEqual([-823, 7, 23]);
    })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]




// b) Create the function that makes the test pass.

//This code is a refractor of the code from last weeks challenge where we were supposed to return only numbers and sort them.
//create a function called findOddOnly
//Takes in an array as an argument
const findOddOnly = (array) => {
    //creates a variable that stores the array and filters through it
    var sortedNumArray = array.filter(value => {
        // the filter will create a new array with only odd numbers
        return typeof value === "number" && value%2 !==0
    })
// return the mapped array then sort it by using sort. Sort alone typically sorts strings but adding the function a,b allows numbers to sort
    return sortedNumArray.sort(function(a, b) {
    //return numbers in ascending order (point a - point b)
        return a - b
    });  
}



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.
describe("when findMiddleOfWord is called", () => {
    it("returns 'p' when called with 'alpha'", () => {
        //Arrange 
        const middleLetters1 = "alpha";

        //Act
        const actualMiddle = findMiddleOfWord(middleLetters1);

        //Assert
        expect(actualMiddle).toEqual("p");
    })
    it("returns 'oc' is Middle by three' when called with 'rhinoceros'", () => {
        //Arrange 
        const middleLetters2 = "rhinoceros";
    
        //Act
        const actualMiddle = findMiddleOfWord(middleLetters2);
    
        //Assert
        expect(actualMiddle).toEqual("oc");
    })
    
})
var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”





// b) Create the function that makes the test pass.
//create a function called findMiddleOfWord
//takes in a string as an argument
//the function will determine weather the number of character in the string are odd or even
//if the number is even the function will return the middle two numbers
//else the number would have to be odd therefore it would return the middle character

const findMiddleOfWord = (str) => {
    //substring is used to to return the two middle letters by using math ceiling which rounds up to the next letter then subtracts one
    return str.substr(Math.ceil(str.length / 2 - 1), //<---- if true half rounded up minus one will be returned
    //a ternary operator is then used to determine if there are odd or even letters. If true return 2 if false return 1 letter
    str.length % 2 === 0 ? 2 : 1); //<----- if false one letter will be returned and it was that of which was rounded up to
}





// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("when addNumbersArr is called", () => {
    it("returns [2, 6, 51, 60] when called with [2, 4, 45, 9]", () => {
        //Arrange 
        const numbersToAdd1 = [2, 4, 45, 9];

        //Act
        const actualAdd = addNumbersArr(numbersToAdd1);

        //Assert
        expect(actualAdd).toEqual([2, 6, 51, 60]);
    })
    it("returns [0, 7, -1, 11] when called with [0, 7, -8, 12]", () => {
        //Arrange 
        const numbersToAdd2 = [0, 7, -8, 12];
    
        //Act
        const actualAdd = addNumbersArr(numbersToAdd2);
    
        //Assert
        expect(actualAdd).toEqual([0, 7, -1, 11]);
    })
    it("returns [] when called with []", () => {
        //Arrange 
        const numbersToAdd3 = [];
        
        //Act
        const actualAdd = addNumbersArr(numbersToAdd3);
        
        //Assert
        expect(actualAdd).toEqual([]);
    })
})
var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
//crate a function called addNumbersArr
//takes in an array as an argument
//the function will iterate through each item and adds the two numbers before 
// I have tried many different combinations for this challenge.
// UPDATE so in my tinkering I had been putting empty braces on line 242 when it should have been a 0 just like how Sarah showed it in the run through low key upset that I was that close but happy I was on the right track

const addNumbersArr = (arr) =>{
    let sumStore = 0
    sumArr = arr.map(value => {
        return sumStore += value
    })
   return sumArr
}
console.log(addNumbersArr(numbersToAdd1))
