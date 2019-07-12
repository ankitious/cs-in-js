/*                   Juggling Algorithm                 *
 *  Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7    *
 *  Rotate array by d=2 and length of an array is n = 7 */

import { gcd } from "../../utilities/gcd";

export const jugglingAlgorithm = (list, d, n) => {
  const GCD = gcd(d, n);

  for (let i = 0; i < GCD; i++) {
    let j = i;
    let temp = list[i];

    while (1) {
      let k = j + d;

      if (k >= n) {
        k = k - n;
      }
      if (k === i) {
        break;
      }
      list[j] = list[k];
      j = k;
    }
    list[j] = temp;
  }

  return list;
};
