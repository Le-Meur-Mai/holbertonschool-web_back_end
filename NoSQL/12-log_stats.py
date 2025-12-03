#!/usr/bin/env python3

'''Module that provides some stats about Nginx logs stored in MongoDB'''

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    number_of_logs = collection.count_documents({})
    number_of_get = collection.count_documents({"method": "GET"})
    number_of_post = collection.count_documents({"method": "POST"})
    number_of_put = collection.count_documents({"method": "PUT"})
    number_of_patch = collection.count_documents({"method": "PATCH"})
    number_of_delete = collection.count_documents({"method": "DELETE"})
    number_of_status = collection.count_documents({"path": "/status"})

    print(
        f"{number_of_logs} logs\n"
        "Methods:\n"
        f"\tmethod GET: {number_of_get}\n"
        f"\tmethod POST: {number_of_post}\n"
        f"\tmethod PUT: {number_of_put}\n"
        f"\tmethod PATCH:{number_of_patch}\n"
        f"\tmethod DELETE: {number_of_delete}\n"
        f"{number_of_status} status check"
        )
