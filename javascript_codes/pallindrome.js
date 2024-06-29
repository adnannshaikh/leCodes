function isPallindrome(input1){
	temp = String(input1);
	reved = temp.split("").reverse().join("");
	if(temp === reved){
		return true;
	}
}