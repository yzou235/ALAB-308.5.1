////// Part 1: Thinking Functionally //////

// Take an array of numbers and return the sum.
let numArray = [1,2,3]


function addArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
};

console.log(addArray(numArray));

// Take an array of numbers and return the average.
function avgArray(array){
    let sum = addArray(array);
    let avg = sum / array.length;
    return avg;
}

console.log(avgArray(numArray));

// Take an array of strings and return the longest string.
let stringArray = ["hi", "hello", "goodbye", "seven", "looping"];

function longString(array) {
    let longest = "";
    let maxlength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= maxlength) {
            maxlength = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

console.log(longString(stringArray));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(array, n) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > n) {
            output.push(array[i]);
        }
    }
    return output;

}
console.log(stringsLongerThan(stringArray, 5));

// BONUS: Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n) {
    if (n>=1) {
        printNumbers(n-1);
        console.log(n);
    }
}

printNumbers(6);

////// Part 2: Thinking Methodically //////

let peopleArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
peopleArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log(peopleArray);

// Filter the array to remove entries with an age greater than 50.
console.log(peopleArray.filter(person => parseInt(person.age) <= 50));

// Map the array to change the “occupation” key to “job” and increment every age by 1.
console.log('Using map() method:')
console.log(
    peopleArray.map(person => ({
        id: person.id,
        name: person.name,
        job: person.occupation,
        age: parseInt(person.age) + 1
    }))
)

// Use the reduce method to calculate the sum of the ages.
// .reduce(accumulator, currentValue) has two argument, the first is the call back function, the second is the initial value of the accumulator
console.log('The sum of the ages is:')

const ageSum = Math.round(
    peopleArray.reduce((accumulator, person) => {
    return accumulator + parseInt(person.age);
}, 0)
)

console.log(ageSum)

// Then use the result to calculate the average age.
console.log('The average age is:')

const ageAvg = Math.round(
    ageSum/peopleArray.length
);

console.log(ageAvg);