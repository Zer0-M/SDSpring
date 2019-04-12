def loopA():
    i = 0
    L =[]
    for i in range(0,5):
        s = ''
        s = str(2 * i)+str(2 * i)
        L.append(s)
    return L

print(loopA())

def listA():
    L = [str(2 * i)+str(2 * i) for i in range(0,5)]
    return L

print(listA())


def loopB():
    i = 0
    L = []
    for i in range(0,5):
        s = ''
        s = str(i) + '7'
        L.append(int(s))
    return L
print(loopB())

def compB():
    l=[int(str(i) + '7') for i in range(0,5)]
    return l
print(compB())

def loopC():
    l=[]
    for i in range(0,9):
        l.append(int(i/3)* int(i%3))
    return l
print(loopC())

def compC():
    l=[int(i/3)* int(i%3) for i in range(0,9)]
    return l
print(compC())

def loopD():
    l=[]
    nums=range(2,100)
    for i in range(2,100):
        for num in nums:
            if num == i:
                pass
            elif i%num == 0:
                l.append(i)
                break
    return l

print(loopD())

def compD():
    L=[]
    L = [ i for i in range(2,100) for x in range(2,100) if i%x==0 and x!=i]
    return list(set(L))
print(compD())

def loopE():
    l=[]
    nums=range(2,50)
    for i in range(2,100):
        append=True
        for num in nums:
            if num == i:
                pass
            elif i%num == 0:
                append=False
                break
        if append:
            l.append(i)
    return l

print(loopE())

def compE():
    L=[]
    L = [ i for i in range(2,100) for x in range(2,50) if i%x==0 and x!=i]
    return list(set(L))

def loopG(matrix):
    l=[]
    for i in range(0,len(matrix[0])):
        newrow=[]
        for row in matrix:
            newrow.append(row[i])
        l.append(newrow)
    return l
print(loopG([[0, 2], [1, 3], [2, 4]]))

def compG(matrix):
    l=[[row[i] for row in matrix] for i in range(len(matrix[0]))]
    return l

print(compG([[0, 2], [1, 3], [2, 4]]))
