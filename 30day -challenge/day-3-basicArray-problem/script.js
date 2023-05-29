const myArray = [1,2,3,4]
//solution 1
const myFunction = (array) => {
    return console.log(array.slice(-3))
}
myFunction(myArray)

//solution 2
const myFunction2 = (array,n) => {
   return console.log(array.filter(item => {
    return item !== n
   }))
}
myFunction2(myArray, 3)

//solution 3