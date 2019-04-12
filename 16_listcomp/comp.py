'''
Mohammed Jamil
SoftDev2 pd 6
K16 -- Do You Even List?
2019-04-13
''' 
uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc=uc.lower()
nums="1234567890"


def minReq(p):
    passw=[1 if x in uc else 2 if x in lc else 3 if x in nums else 0 for x in p]
    return set([1,2,3]) == set(passw)
def strength(p):
    passw=[1 if x in lc else 2 if x in uc else 3 if x in nums else 4 for x in p]
    passet=set(passw) #eliminates duplicates
    # Uppercase and lower case 2/10, number and one other type 3/10, symbol and one other type 5/10, and combinations of these cases sum up
    # So the perfect password includes all of the types
    strvals=[2 if x ==2 and 1 in passet else 3 if x==3 and len(passet)>1 else 5 if x==4 and len(passet)>1 else 0 for x in passw]
    # Sum the unique values
    strenghtval=sum(set(strvals))
    return strenghtval
