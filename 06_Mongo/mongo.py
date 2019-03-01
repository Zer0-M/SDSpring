'''
Cathy Cai and Mohammed Jamil
SoftDev2 pd6
K #06 -- Yummy Mongo Py
2019-03-01
'''
import pymongo
SERVER_ADDR="142.93.9.165"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

def boroughFinder(borough):
    docs=collection.find({"borough":borough})
    print("All restaurants in "+borough)
    for doc in docs:
        print(doc)
    print("End of all Restaurants in "+ borough+"\n"+"=====================================")
boroughFinder("Queens")
def zipFinder(zipc):
    docs=collection.find({"address.zipcode":zipc})
    print("All restaurants with zipcode "+zipc)
    for doc in docs:
        print(doc)
    print("End of all Restaurants with zipcode "+zipc+"\n"+"=====================================")
zipFinder("10282")
def zipFinderGrade(zipc,grade):
    docs=collection.find({"address.zipcode":zipc,"grades.0.grade":grade})
    print("All restaurants with zipcode "+zipc+" and grade "+grade)
    for doc in docs:
        print(doc)
    print("End of all Restaurants with zipcode "+zipc+" and grade "+grade+"\n"+"=====================================")
zipFinderGrade("10282","A")
def zipFinderScore(zipc, score):
    docs=collection.find({"address.zipcode":zipc,"grades.0.score":{"$lt":score}})
    print("All restaurants with zipcode "+zipc+" and score below "+str(score))
    for doc in docs:
        print(doc)
    print("End of all Restaurants with zipcode "+zipc+" and score below "+str(score)+"\n"+"=====================================")
zipFinderScore("10282",5)
def zipFinderScoreOrGrade(zipc,score,grade):
    docs=collection.find({"address.zipcode":zipc,"$or":[{"grades.0.score":{"$lt":score}},{"grades.0.grade":{"$lt":grade}}]})
    print("All restaurants with zipcode "+zipc+" with score below "+str(score) +" or grade above "+grade)
    for doc in docs:
        print(doc)
    print("End of all Restaurants with zipcode "+zipc+" and score below "+str(score) +" or grade above "+grade+"\n"+"=====================================")
zipFinderScoreOrGrade("10280",5,"B")