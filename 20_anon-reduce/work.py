from functools import reduce

f = open("ulysses.txt", "r")
data = f.read().split()
sample=["product","reduce","lambda","functools","open","open"]
def freq(word):
    return sum(int(x==word) for x in data)

print(freq("open"))
print(data.count("open"))

print(freq("iPhone"))
print(data.count("iPhone"))

print(freq("tattarrattat"))
print(data.count("tattarrattat"))

def multi_freq(phrase):
    phrase=phrase.split()
    count=[1 if data[i:i+len(phrase)]==phrase else 0 for i in range(0,len(data))]
    return reduce((lambda x,y: x+y),count)
    
print(multi_freq("John Henry Menton"))

def freq_most():
    words = set(data)
    #words = set(data[:50])
    #print(len(words))
    count = [(x, freq(x)) for x in words]
    return reduce((lambda x, y: x if x[1] > y[1] else y), count)
#print(freq_most())