def recsum(n):
    if n<=1:
        return n
    return (n+recsum(n-1))

n=int(input("Enter a positive number: "))
print("The sum is",recsum(n))
