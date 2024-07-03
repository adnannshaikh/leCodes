"""
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
"""


def lcp(list1):
	pref = list1[0]
	pref_length = len(pref)
	
	for i in list1[1:]:
		while pref != i[0:pref_length]:
			pref_length -= 1

			if pref_length == 0:
				return ""
			
			pref = pref[0:pref_length]
	return pref


print(lcp(["flower","flow","flight"]))