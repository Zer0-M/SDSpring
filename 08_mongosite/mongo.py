'''
Team MonstrousGourd - Brian Lee and Mohammed Jamil
SoftDev2 pd6
K #07 -- Import/Export Bank
2019-03-01
'''
'''
dataset:Nobel Laureate Dataset - contains names and information about Nobel laureates
dataset link:http://api.nobelprize.org/v1/laureate.json
import mechanism:
the line db=connection["MonstrousGourd"] creates the database and collection=db["nobel_laureates"] create the collection
the json data is then loaded using the json module
Then insert the data gathered from the json using the insert method which is executed once and has since been commented out
'''
import json
import pymongo
SERVER_ADDR="142.93.9.165"
connection=pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("ApacheHelicopters")
db=connection["ApacheHelicopters"] 
collection=db["nobel_laureates"] 
F=open('laureate.json')
data=json.load(F)
collection.insert_many(data)


def categoryFinder(category):
    docs=collection.find({"prizes.category":category})
    print("All laureates for "+category)
    laureates=[]
    for doc in docs:
        laureates.append(doc)
    return laureates
print(categoryFinder("physics")[0])
        
#categoryFinder("physics")
# def yearFinder(year):
#     docs=collection.find({"prizes.year":year})
#     print("Prize won in "+str(year))
#     for doc in docs:
#         print(doc)
#     print("End of prizes won in "+str(year)+"\n"+"=====================================")
# yearFinder("2018")
# def categoryCountryFinder(category,country):
#     docs=collection.find({"prizes.category":category,"bornCountry":country})
#     print("Laureates for "+category+" from "+country)
#     for doc in docs:
#         print(doc)
#     print("End of all laureates for "+category+" from "+country+"\n"+"=====================================")
# categoryCountryFinder("peace","USA")
# def categoryminYearFinder(category, year):
#     docs=collection.find({"prizes.category":category,"prizes.year":year})
#     print("All laureates for "+category+" in the year "+str(year))
#     for doc in docs:
#         print(doc)
#     print("End of all laureates for "+category+" in the year "+str(year)+"\n"+"=====================================")
# categoryminYearFinder("physics","2017")
# def affiliationFinder(year,affiliation):
#     '''
#         This function tries to find affilations if the word is conatianed in the affliation
#     '''
#     docs=collection.find({"$and":[{"prizes.year":year},{"prizes.affiliations.name":{"$regex":affiliation}}]})
#     print("All laureates in "+str(year)+" associated with" + affiliation)
#     for doc in docs:
#         print(doc)
#     print("End of All laureates in "+str(year)+" associated with" + affiliation+"\n"+"=====================================")
# affiliationFinder("2015","University")
