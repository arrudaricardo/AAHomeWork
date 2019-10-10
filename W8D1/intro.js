const madLib = (verb, adjective, noun) => {
   return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}` 
}



let result = madLib('make', 'best', 'guac')

// console.log(result)


const isSubstring = (seachString, subString) => {

   return seachString.includes(subString) 

}



// console.log(isSubstring("time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))



const fizzBuzz = (arr) => {
    ret = []
    // for each (el in arr) not support by nodejs yet
    // for (let i = 0; i < arr.length; i++) {
    arr.forEach(
        (el) => {
            if (el % 5 == 0 || el % 3 == 0){
                ret.push(el)
            }
        }
    )
    return ret
}

// let res = fizzBuzz([1,2,3,4,5,6,7,8,9])
// console.log(res)

const isPrime = (number) => {
    if (number <= 2) { return true }
    for (let i = 2; i < number; i++ ){
        if (number % i == 0)  {
            return false
        }
    }
    return true
}




// [2,10,15485863, 354856].forEach((el) => {console.log(`Num ${el} prime? ${isPrime(el)}`)})



const firstNPrime = (n) => {
   let primes = [] 
    for (let i = 0;;i++) {
        if ( isPrime(i) ) {
            primes.push(i)
        }

        if (primes.length >= n) { return primes }
    }
}


[0,1,4].forEach( (el) => {console.log(firstNPrime(el))})









