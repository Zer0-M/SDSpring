from flask import Flask,render_template,request
import mongo
import pymongo
import json
app = Flask(__name__) #create instance of class Flask

collection=None
db=None
@app.route("/") #assign fxn to route
def ip_input():
    return render_template("home.html")
SERVER_ADDR=""
@app.route("/query")
def query():
    ip=request.args.get("ip")
    SERVER_ADDR=ip
    connection=pymongo.MongoClient(SERVER_ADDR)
    connection.drop_database("ApacheHelicopters")
    db=connection["ApacheHelicopters"] 
    collection=db["nobel_laureates"] 
    F=open('laureate.json')
    data=json.load(F)
    collection.insert_many(data)
    return render_template("query.html")
def categoryFinder(category):
    connection=pymongo.MongoClient(SERVER_ADDR)
    db=connection["ApacheHelicopters"] 
    collection=db["nobel_laureates"] 
    docs=collection.find({"prizes.category":category})

    print("All laureates for "+category)
    laureates=[]
    for doc in docs:
        laureates.append(doc)
    return laureates

@app.route("/results")
def results():
    #query=request.args.get("query")
    print(collection)
    results=categoryFinder("physics")
    print(results[0])
    return render_template("results.html",results=results[0])

app.debug = True
app.run()
