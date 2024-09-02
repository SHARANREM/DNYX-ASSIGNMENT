// Function to filter out even numbers from an array
function filterEvenNumbers(myArray) {
    // Use the filter() method to create a new array with only the even numbers
    const resultArray = myArray.filter((ele)=>{
        return ele % 2 === 0;
    });
    return resultArray;
}

// Sample Input 1
const input1 = [12, 5, 7, 8, 3, 2];
const output1 = filterEvenNumbers(input1);
console.log("Sample Output 1:", output1);