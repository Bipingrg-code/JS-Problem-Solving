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

const letterFrequency = (phrase) => {
  // letterFrequency('haha') 👉 {'h': 2, 'a': 2}
  console.log(phrase)
  // make a `frequency` object {}
  let frequency = {}
  for (const letter of phrase) {
    // check if letter exists in frequency
    if (letter in frequency) {
      // increment the value by +1
      frequency[letter] += 1
      // otherwise, set the value to 1
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}

// console.log(letterFrequency('lol, what are you doing later tonight lol, haha!'))

// wordFrequency('lol what lol') 👉 {'lol': 2, 'what': 1}
const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}

// sum up all numbers in array

const max = (numbers) => {
  let result = numbers[0]

  // loop
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }

  return { result }
}

//  console.log(max([1, 2, 3, 4, 5]))

// filter([1,2,3,4,5,6], 3) 👉 [4, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

// console.log(filter([1, 2, 3, 4, 5, 6], 2))
// const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(num => num > 4 || num < 2))
