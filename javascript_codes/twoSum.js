function twoSum(sums,target){
	for(let i = 0;i<sums.length;i++){
		for(let j = i + 1; j<sums.length;j++){
			if(sums[i]=== target-sums[j]){
				return [i,j]
			}
		}
	}
	return null
}

sums =[2,7,11,15];
twoSum(sums,9)