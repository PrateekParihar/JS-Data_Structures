
#Trial division method

from typing import List
def findAllPrimes(nums: int) -> List[int]:
    primes = []

    is_prime = [False,False] + [True]* (nums-1)

    for p in range(2, nums+1):

        if is_prime[p]:

            primes.append(p)

            for i in range(p*2, nums+1, p):
                is_prime[i] =False
    
    return primes




print(findAllPrimes(99))
