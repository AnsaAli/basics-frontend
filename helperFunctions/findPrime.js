

export const findNthPrime = (n) => {
  const isPrime = (n) => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  let count = 0; // Count of primes found
  let num = 2; // Number to check for primality

  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
};

