var findMedianSortedArrays = function(nums1, nums2) {
  let newArray = nums1.concat(nums2); // Combine the arrays
        newArray.sort((a, b) => a - b); // Sort the combined array in ascending order
        let arrayLength = newArray.length;

        if (arrayLength % 2 === 1) {
            let v1 = Math.floor(arrayLength / 2);
            return newArray[v1];
        } else {
            let v2 = Math.floor(arrayLength / 2);
            let sum1 = (newArray[v2 - 1] + newArray[v2]) / 2.0;
            return sum1;
        }  
};