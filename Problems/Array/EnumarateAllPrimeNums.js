//Trial division method


/*

Pseduo Code

FindPrimes(n){
    A <- Empty List
    for i <- 2 to n
        if IsPrime(i)
            Add i to the list A
}

IsPrime(x){

}

*/
var findAllPrime = function(nums){
    let primes = []; // to be return in the end

    isPrime = new Array(nums).fill(true);
    // set 0 and 1 as false 
    isPrime[0] = false;
    isPrime[1] = false;

    // check form i <- 2 to n-1 

    for(let i =2; i<=nums; i++){
        if(isPrime[i]){
            primes.push(i);
        
            // sieve all the multiple of i and set the values as false
            for(let j =i*2; j<= nums; j = j+i){
                isPrime[j] = false;
            

            }
        }
    }

    return primes;
}

findAllPrime(99)