import math
fact = int(input("factorial of a given number"))
fa = 1
if fact < 0:
    print("Factorial does not exist for negative numbers")
elif fact == 0:
    print("The factorial of 0 is 1")
else:
  for x in range(1,fact+1): 
   fa = fa * x
  print(fa)

print (math.factorial(fact))
