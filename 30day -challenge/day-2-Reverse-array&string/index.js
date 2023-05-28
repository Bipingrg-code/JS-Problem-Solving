const reverse = (words) => {
    return words.split('').reverse().join(' ');
}
console.log(reverse("Javascript Hello"))

const arr = (arr) => {
return arr.reverse()
}
console.log(arr([1,2,3,4,5]))

//join array

const arr1 = [1,2,3,4]
const arr2 = [12,34,14,78,96,45]

const joinArray = (arr1, arr2) => {
    let newArr = [];
     newArr.push(arr1.concat(arr2))
     return newArr
}
console.log(joinArray(arr1,arr2))