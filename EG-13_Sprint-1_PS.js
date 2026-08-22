/**
 * 01. Check if a Year is a Leap Year
 *
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}


/**
 * 02. Generate Fibonacci Sequence Up to N Terms
 *
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }

    if (n === 1) {
        return [0];
    }

    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}


/**
 * 03. Calculate the Greatest Common Divisor (GCD)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}


/**
 * 04. Calculate the Least Common Multiple (LCM)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
    return Math.abs(a * b) / findGCD(a, b);
}


/**
 * 05. Check if a Number is Prime
 *
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
    if (num < 2 || !Number.isInteger(num)) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


/**
 * 06. Merge Two Sorted Arrays into One Sorted Array
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}


/**
 * 07. Find the Median of an Unsorted Array
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
    if (nums.length === 0) {
        return null;
    }

    const sortedNums = [...nums].sort((a, b) => a - b);
    const middle = Math.floor(sortedNums.length / 2);

    if (sortedNums.length % 2 === 0) {
        return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
    }

    return sortedNums[middle];
}


/**
 * 08. Find the Second Largest Number in an Array
 *
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
    let largest = null;
    let secondLargest = null;

    for (const num of nums) {
        if (largest === null || num > largest) {
            if (num !== largest) {
                secondLargest = largest;
                largest = num;
            }
        } else if (num < largest && (secondLargest === null || num > secondLargest)) {
            secondLargest = num;
        }
    }

    return secondLargest;
}


/**
 * 09. Find Most Frequent Element (Mode) in an Array
 *
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
    if (arr.length === 0) {
        return null;
    }

    const frequency = new Map();

    let mode = arr[0];
    let maxFrequency = 0;

    for (const item of arr) {
        const count = (frequency.get(item) || 0) + 1;
        frequency.set(item, count);

        if (count > maxFrequency) {
            maxFrequency = count;
            mode = item;
        }
    }

    return mode;
}


/**
 * 10. Natural Sorting of Strings with Embedded Numbers
 *
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr) {
    return [...arr].sort((a, b) => {
        const partsA = a.match(/(\d+|\D+)/g) || [];
        const partsB = b.match(/(\d+|\D+)/g) || [];

        const length = Math.min(partsA.length, partsB.length);

        for (let i = 0; i < length; i++) {
            const partA = partsA[i];
            const partB = partsB[i];

            const numA = /^\d+$/.test(partA);
            const numB = /^\d+$/.test(partB);

            if (numA && numB) {
                const difference = Number(partA) - Number(partB);

                if (difference !== 0) {
                    return difference;
                }
            } else if (partA !== partB) {
                return partA.localeCompare(partB);
            }
        }

        return partsA.length - partsB.length;
    });
}



// Expected outputs

console.log(isLeapYear(2024));
// true

console.log(generateFibonacci(7));
// [0, 1, 1, 2, 3, 5, 8]

console.log(findGCD(48, 18));
// 6

console.log(findLCM(12, 18));
// 36

console.log(isPrime(29));
// true

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(findMedian([7, 1, 3, 4, 9]));
// 4

console.log(findSecondLargest([10, 20, 4, 45, 99, 99]));
// 45

console.log(findMode([1, 3, 3, 2, 1, 3, 4]));
// 3

console.log(naturalSort(["file10.txt", "file2.txt", "file1.txt"]));
// ["file1.txt", "file2.txt", "file10.txt"]