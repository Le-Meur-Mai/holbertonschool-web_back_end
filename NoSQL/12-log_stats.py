#!/usr/bin/env python3

'''Module that provides some stats about Nginx logs stored in MongoDB'''

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    number_of_logs = collection.count_documents({})

    print(f"{number_of_logs} logs\nMethods:")

    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        number_of_method = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {number_of_method}")

    number_of_status = collection.count_documents({"path": "/status"})
    print(f"{number_of_status} status check")
