for p in range(900,1001):
    for i in range(2,p):
        if p%i==0:
            break
    else:
        print(p)
