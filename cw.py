import random
def make_HTML_heading(f):
    txt=f()
    def inner():
        print(txt)
        return '<h1>' + txt + '</h1>'
    return inner
@make_HTML_heading
def greet():
    greetings=['Hello','Welcome','AYO!','Hola','Bonjour','Word up']
    return random.choice(greetings)
print(greet())

def memoize(f):
    memo={}
    def helper(x):
        nonlocal memo
        if x not in memo:
            memo[x]=f(x)
        return memo[x]
    return helper
@memoize
def fib(n):
    if n==0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
print(fib(40))