'''
Mohammed Jamil, Jabir Chowdhury
SoftDev2 pd 6
K19 --
2019-04-16
'''
def union(a,b):
    return set([x for x in list(a)+list(b)])

print(union(set([1,2,3]),set([2,3,4])))

def intersection(a,b):
    return set([x for x in a if x in b])

print(intersection(set([1,2,3]),set([2,3,4])))
print(intersection(set([1,2,3,1,2314,2]),set([2,3,4,141,3])))

def difference(a,b):
    return set([x for x in a if x not in b])

print(difference(set([1,2,3]),set([2,3,4])))
print(difference(set([1,2,3,5,6]),set([2,3,4,7])))

def sym_diff(a,b):
    return set([x for x in list(a)+list(b) if (list(a)+list(b)).count(x)==1])

print(sym_diff(set([1,2,3]),set([2,3,4])))
print(sym_diff(set([1,2,3,9]),set([2,3,4,5,6])))

def cart_product(a,b):
    return set([(x,y) for x in a for y in b])

print(cart_product(set([1,2]),set(["red", "white"])))
print(cart_product(set([1,2,3]),set(["red", "white","blue"])))

