"""
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
"""

def median_of_array(a1,a2):
	new_array = a1 
	new_array.extend(a2)
	new_array.sort()
	array_length = len(new_array)
	if array_length % 2 == 1:
		v1 = int(array_length/2) 
		return new_array[v1]
	else:
		v2 = int(array_length/2) 
		sum1 = float((new_array[v2-1] + new_array[v2])/2)
		return sum1


print(median_of_array([1,3],[2]))