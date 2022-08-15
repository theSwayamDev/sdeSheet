const maxSumSubStr = (arr) => {
    let max_far = Number.MIN_SAFE_INTEGER
    let max_end = 0

    for(ele of arr){
        max_end += ele
        if(max_far < max_end){
            max_far = max_end
        }
        if(max_end < 0){
            max_end = 0
        }
    }

    return max_far
}



//testing outputs

console.log(maxSumSubStr([-2,1,-3,4,-1,2,1,-5,4]));


console.log(maxSumSubStr([4,-1,3,1]))