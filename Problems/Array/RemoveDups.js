var removeDuplicates = function (nums) {

    let writeIdx = 1;

    for(let i=1; i<nums.length; i++){
        if(nums[writeIdx -1] != nums[i]){
            nums[writeIdx] = nums[i];
            writeIdx +=1;
        }
    }
    nums.splice(writeIdx)

};




removeDuplicates([1,2,3,4])