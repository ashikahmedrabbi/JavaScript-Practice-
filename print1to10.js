// Coding challenge #1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Coding challenge #2: Print the odd numbers less than 100

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Coding challenge #3: Print the multiplication table with 7

let num = 7;
for (let i = 1; i <= 10; i++) {
    let j = num * i;
    console.log(num + "*" + i + "=" + j);
}

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (let num = 1; num <= 10; num++) {
    console.log("multiplication tables  of " + num + "\n");
    for (let i = 1; i <= 10; i++) {
        let j = num * i;
        console.log(num + "*" + i + "=" + j + "\n");
    }

}

// Coding challenge #5: Calculate the sum of numbers from 1 to 10

var sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(sum);
} console.log("Final sum of 1 to 10 =" + sum);

// Coding challenge #6: Calculate 10!

let fact = 1;
for (let i = 1; i <= 70; i++) {
    fact *= i;

} console.log(fact);

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

var sum = 0;
for (let i = 11; i <= 30; i += 2) {
    sum += i;
} console.log(sum);







