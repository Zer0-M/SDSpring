'''
Brian Lee and Mohammed Jamil
SoftDev2 pd6
K #06 -- Yummy Mongo Py
2019-03-01
'''
import pymongo
SERVER_ADDR="142.93.9.165"
connection=pymongo.MongoClient(SERVER_ADDR)
db=connection.test
collection=db.restaurants

