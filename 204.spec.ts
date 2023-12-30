204. Count Primes



/** @param n - maxValue */
function countPrimes(n: number): number {

    // Check whether the number is prime
    const setPrimes = (n: number): boolean => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    }

    return Array
        .from({ length: n - 1 }, (_, value) => value + 2)
        .filter(x => setPrimes(x) && x < n)
        .length;
};