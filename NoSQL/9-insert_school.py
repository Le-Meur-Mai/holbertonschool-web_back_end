#!/usr/bin/venv python3
'''Module that inserts a new document in a collection'''


def insert_school(mongo_collection, **kwargs):
    '''Python function that inserts a new document in a collection based on
    kwargs'''
    document = mongo_collection.insert_one(kwargs)
    return document.inserted_id
