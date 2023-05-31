//Explanation 0

//Problem ---> finde the second largest number [2,3,6,6,5,4]
//Expected output ---> 5

//Given the array, nums = [2,3,6,5,6,4]we see that the largest value in the array is 56 and the second largest value is 5.Thus, we return as our answer.
function getSecondLargest(nums) {
    // Complete the function
    let maxNum = Math.max(...nums)
    nums = nums.filter((arr) => arr != maxNum)
    return Math.max(...nums)

}
console.log(getSecondLargest([2, 3, 6, 6, 5, 4]))