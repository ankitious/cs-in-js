/*                   Block Swap Algorithm                 *
 *  Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7    *
 *  Rotate array by d=2 and length of an array is n = 7 */
/* https://www.geeksforgeeks.org/block-swap-algorithm-for-array-rotation/ */

const swapList = (list, start, end) => {
    let i=start;
    let j=end;

    while(i<j){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;

        i++;
        j--;
    }

    return list;

};

const blockSwap = (list,d,l) => {

    const l1 = swapList(list,0,d-1);
    const l2 = swapList(list,d,l-1);
    const l3 = swapList(list,d,l-1);


};

