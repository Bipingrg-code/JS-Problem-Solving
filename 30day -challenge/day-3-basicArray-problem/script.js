//solution number of 3
const arr = [1, 2, 4, 6, 2, 4, 8, 95, 344, 234, 213, 4, 5434, 5425, 11, 10, 12, 19, 50, 100, 64, -4, 2, 11, -38, -23, 67, 34, 45, 33, 28]
const myFunc = (arr) => {
    let result;
    //sort array
    const sortArr = arr.sort()
    console.log(sortArr)
    //remove the negative value
    const removeNegativeEl = arr.filter((el) => el >= 0)
    console.log(removeNegativeEl)
    //remove duplicate element
    const removeDuplicateEl = [...new Set(removeNegativeEl)]
    console.log(removeDuplicateEl)
    //accending the el
    const accendingEL = removeDuplicateEl.sort((a, b) => a - b)
    console.log(accendingEL)

    //get the el 50 bellow
    result = accendingEL.filter((el) => el <= 50)
    console.log(result)

    return result
}

myFunc(arr)

const myArray = [1, 2, 3, 4]
//solution number of 1
const myFunction = (array) => {
    return console.log(array.slice(-3))
}
myFunction(myArray)

//solution number of 2
const myFunction2 = (array, n) => {
    return array.filter(item =>
        item !== n
    )
}
console.log(myFunction2(myArray, 3))

//solution 3
const qsNum3 = [1,2,3,4,5]
const qsNum3arr = [3,4,5,6]
const myFunction3 = (...arrays) =>{
    return arrays.flat()
    //return arrays.reduce((a,b)=> a.concat(b))
}
console.log(myFunction3(qsNum3, qsNum3arr))

//solution 4

const problem4Array = [{a:1,b:7},{a:2,b:1}]

const myFunction4 =(array)=>{
    const sort = (a,b) => a.x - b.x
    return array.sort(sort)
}
console.log(myFunction4(problem4Array))

//solution 5
const problem4Array5 = [-10, 22, 333, 42]
const problem4Array5array = [-11, 5, 22, 41, 42]

const myFunction5 =(a,b)=>{
    // const mergeAndremoveDuplicateEl = array.flat()
    // const sorting =  mergeAndremoveDuplicateEl.sort((a,b) => a-b)
    // return new Set(sorting)
    const mergearray = a.concat(b)
     const result =  [...new Set(mergearray)]
    return result.sort((a,b) => a-b)
    }
console.log(myFunction5(problem4Array5, problem4Array5array));