'''
Mohammed Jamil
SoftDev2 pd 6
K17 --
2019-04-16
'''
def triples(n):
    l=[(x,y,int((x**2+y**2)**0.5)) for x in range(1,n) for y in range(x+1,n) if ((x**2+y**2)**0.5).is_integer() and ((x**2+y**2)**0.5)<=n]
    return l
print(triples(30))
def quicksort(l):
    if len(l)>1:
        L=quicksort([x for x in l if x<l[0]])+[l[0]]+quicksort([y for y in l if y>l[0]])
        return L
    return l
print(quicksort([5,2,3,6,899,21,44,1,6,9]))