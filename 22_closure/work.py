'''
Mohammed Jamil
SoftDev2 pd6
K22 -- Closure
2019-30-04  
'''

def repeat(s):
    def repeatimes(n):
        return s*n
    return repeatimes
r=repeat("hello")
print(r(2))
r=repeat("goodbye")
print(r(2))
print(repeat("cool")(3))

def make_counter():
    n=0
    def increment():
        nonlocal n
        n+=1
        return n
    def getC():
        nonlocal n
        return n
    return increment,getC
ctr1,getctr1=make_counter()
ctr1()
ctr1()
ctr2,getctr2=make_counter()
ctr2()
ctr1()
ctr2()
# Accessors
print()
print(getctr1())
print(getctr1())
print(getctr2())
print(getctr2())