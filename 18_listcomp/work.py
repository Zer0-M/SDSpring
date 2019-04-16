'''
Mohammed Jamil
SoftDev2 pd 6
K18 -- Getting Clever with List Comprehensions
2019-04-16
'''
import random
def triples(n):
    l=[(x,y,int((x**2+y**2)**0.5)) for x in range(1,n) for y in range(x+1,n) if ((x**2+y**2)**0.5).is_integer() and ((x**2+y**2)**0.5)<=n]
    return l
print(triples(30))
def quicksort(l):
    return [quicksort([x for x in l if x<l[0]])+[z for z in l if z==l[0]]+quicksort([y for y in l if y>l[0]]) if len(l)>1 else l][0]
L=[]
for i in range(0,10000):
    L.append(random.randint(0,100000000))
sortd=quicksort(L)
L.sort()
print(sortd==L)