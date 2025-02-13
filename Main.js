// Random utility functions in JavaScript

// Generate a random string
function generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate Fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generate an array of random numbers
function generateRandomNumbers(count = 10, min = 1, max = 100) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Factorial of a number
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// Count vowels in a string
function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}

// Sort an array of numbers
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// Find max number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Find min number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Calculate mean of an array
function calculateMean(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

// Calculate median of an array
function calculateMedian(arr) {
    arr = arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

// Check if a string is a palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Generate an array and perform operations
function main() {
    const randomNumbers = generateRandomNumbers();
    console.log("Random String:", generateRandomString(12));
    console.log("Fibonacci Sequence:", fibonacci(10));
    console.log("Prime Check (17):", isPrime(17));
    console.log("Random Numbers:", randomNumbers);
    console.log("Reversed String:", reverseString("Hello World"));
    console.log("Factorial (5):", factorial(5));
    console.log("Sorted Numbers:", sortNumbers(randomNumbers));
    console.log("Max Number:", findMax(randomNumbers));
    console.log("Min Number:", findMin(randomNumbers));
    console.log("Mean:", calculateMean(randomNumbers));
    console.log("Median:", calculateMedian(randomNumbers));
    console.log("Vowel Count in 'Cryptography':", countVowels("Cryptography"));
    console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));
}

main();
