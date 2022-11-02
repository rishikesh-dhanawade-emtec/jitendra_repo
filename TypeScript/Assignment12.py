#  Write a python program to print sum of tuple elements

numTuple = (11, 22, 33, 44, 55, 66, 77, 88, 99)
print("Tuple Items = ", numTuple)

tupleSum = 0
for tup in numTuple:
    tupleSum = tupleSum + tup

print("\nThe Sum of numTuple Tuple Items = ", tupleSum)