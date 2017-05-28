

function consecutiveOnes(nums) {
      // console.log(nums);
      var count = 0;
      var max = 0;
      var pre = null;

      for (i=0; i<nums.length; i++){
            // console.log("Current Number is: " + nums[i]);
            // console.log("Pre value is: " + pre);

            if (nums[i] !== pre){
                  count = 0;
                  // console.log("Reset Count");
            }

            if (nums[i] === pre ){
                  count = count +1;
                  // console.log("Incrementing Count to:" + count);
                  if (count > max){
                        max = count;
                        // console.log("Udate Max to" + max);
                  }
            }

            // console.log(" ");
            pre = nums[i];
      }
      return max +1;
}
