'''
Mohammed Jamil
SoftDev2 pd 6
K17 --
2019-04-16
'''
import maths
def triples(n):
    l=[(x,y,int((x**2+y**2)**0.5)) for x in range(1,n) for y in range(x+1,n) if ((x**2+y**2)**0.5).is_integer()]
    return l
print(triples(100))
