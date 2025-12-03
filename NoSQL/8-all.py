#!/usr/bin/env python3
'''Module that list all the documents in a collection with Python'''


def list_all(mongo_collection):
    '''Python function that lists all documents in a collection'''
    documents = list(mongo_collection.find())
    return documents
