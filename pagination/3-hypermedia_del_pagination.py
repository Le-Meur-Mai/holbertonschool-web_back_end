#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        '''Return the details of the data in a way that the user don't miss
        any element'''
        self.dataset()
        assert index <= len(self.__dataset), 'The index is out of range'
        assert index >= 0, 'the index has to be positive'
        assert page_size > 0, "The page size must be greater than zero"
        self.indexed_dataset()  # initialize the data

        data = []
        next_index = index + page_size
        i = 0
        current = index

        if next_index <= len(self.__dataset):
            while i < page_size:
                if self.__indexed_dataset.get(current):
                    data.append(self.__indexed_dataset[current])
                    current += 1
                    i += 1
                else:
                    current += 1
        # On avance en ne nous preoccupons pas des elements supprimes

        else:
            next_index = None
            for i in range(index, len(self.__dataset)):
                if self.__indexed_dataset.get(i):
                    data.append(self.__indexed_dataset[i])

        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': next_index
        }
