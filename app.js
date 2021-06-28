// non-negative integer 
// 
const nums = [2,3,1,1,4];

canJump = ()=>{
    // null check 
    if(!nums){
        return false
    }

    // first valid index is the last index in the array so you take the last index.length -1 
    let validIndex = nums.length - 1

// looping through the array backwards from the second to last index why I put a -2 
    for (let i = nums.length - 2; i>=0; i--){
        // check if i + the element of the index is greater than or equal to the value of the index 
        if(i + nums[i] >= validIndex){
            // updates valid index as it loops through. 
            validIndex =i
        }
    }
// if the index is equal to 0 it will return a true
    return validIndex === 0
};