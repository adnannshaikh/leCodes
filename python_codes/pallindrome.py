# Given an integer x, return true if x is a 
# palindrome
# , and false otherwise.


def pallindrome(input1):
	if isinstance(input1,int):
		input1 = str(input1)
	return input1 == input1[::-1]

print(pallindrome("adnan"))