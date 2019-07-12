export const gcd = (a, b) => {
  if (b === 0) {
    return b;
  }

  return a % b === 0 ? b : gcd(b, a % b);
};
