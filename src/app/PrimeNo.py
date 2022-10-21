def prime(n):
    x = 1
    count = 0
    while count < n:
        for d in range(2, x, 1):
          print("D is: ",d)
          print("X is: ",x)
          if x % d == 0:
             print("if x is",x)
             x += 1
        else:
            print("Prime no is: ", x)
            x += 1
            count += 1
 
# Driver Code
n = 10
 
# print statement
print("First 10 prime numbers are:  ")
prime(n)
