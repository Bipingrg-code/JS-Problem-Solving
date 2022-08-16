// Write a function that takes in an array and sort the arr\
const  sortArray = (array) =>{
    let greatest = [0] ;

    //Loping array
    for (const number of array){
        //console.log(number);
        if(number > greatest){
            greatest = number
        }
    }
    return greatest
}
console.log(sortArray([1,2,3,4,5,6]))