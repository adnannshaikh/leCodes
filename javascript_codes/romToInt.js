const romToInt = function(s){
	let roman = {
		I : 1,
		V : 5,
		X : 10,
		L : 50,
		C : 100,
		D : 500,
		M : 1000
	};

	let total = 0
	let prev_valve = 0

	for(let i = s.length-1;i>=0;i--){
		const char = s[i]
		const value = roman[char]
		if(value < prev_valve){
			total -= value
		}else{
			total += value
		}
		prev_valve = value
	}
	return total
}