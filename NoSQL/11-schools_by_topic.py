#!/usr/bin/env python3
'''Module that returns documents with a specific value'''


def schools_by_topic(mongo_collection, topic):
    '''Returning the list of all the documents of the collection that has the
    value enter in the key "topics"'''
    list_result = list(mongo_collection.find({"topics": topic}))
    return list_result
