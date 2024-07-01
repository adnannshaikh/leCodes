var maxArea = function(height) {
  let left = 0;
  let right = height.length-1
  let max_area = 0;

  while(left<right){
  	let width = right - left;

  	let current_area = Math.min(height[left],height[right])* width;

  	max_area = Math.max(max_area,current_area);

  	if(height[left]<height[right]){
  		left++;
  	}else{
  		right--;
  	}
  	
  }
  return max_area;

};