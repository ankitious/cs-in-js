/*                   Reversal Algorithm                 *
 *  Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7    *
 *  Rotate array by d=2 and length of an array is n = 7 */

const reverse = (list, start, end) => {
    let tempList = [];
    for(let i=end-1;i>=start;i--) {
        tempList.push(list[i]);
    }
    return tempList;
};

const reversalAlgorithm = (list, d, l) => {
    if (l === 0) {
        return [];
    }
    if(d === 0 ) {
        return list;
    }
    let a1 = reverse(list,0,d);
    let a2 = reverse(list,d,l);
    let a3 = a1.concat(a2);
    return reverse(a3,0,l);
};

export default reversalAlgorithm;
