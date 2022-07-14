/**
 * The function "sumToGivenTarget()" takes in two arguements.
 * The first one is an array of numbers.
 * The second one is the target.
 * The function returns an array of two different numbers that can be summed up to the given target. 
 * A single forloop is used here to achieve O(n) time complexity.
 * 
 */
 function sumToGivenTarget(numsArray, targetNum){
    let addends  = new Set();
    let result = [];
    for(let i=0; i < numsArray.length; i++){
      let val = numsArray[i];
      if(addends.has(val)){
        result.push(targetNum - val);
        result.push(val);
        break;
      } else{
        addends.add(targetNum-val);
     }
    }
    return result;
}
let nums = [1, -2, 1, 0, 5], target =3;
console.log(sumToGivenTarget(nums, target));
