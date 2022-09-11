/**
 * Given N balls , color them using either of two colors
 * such that there can be atmost 2 positions where a red ball touches a blue or vice versa
 */

/**
 * There can be 3 posibilities
 * 1. No red or blue touching - (only 2 way)
 * 2. Touching at one position - (2*(N-1) way)
 * 3. Touching at two position - ((N-2)*(N-1) way)
 */


const getNWaysToColor = (N) =>{
    return 2+N*(N-1)
}

console.log(getNWaysToColor(2))