#!/usr/bin/env python3

'''Module that define the method to get data from a database'''

import csv
import math
from typing import List
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        '''initialisation of the data, at the creation'''
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        '''Get the list of data to display'''
        assert isinstance(page, int), "The index page must be an integer"
        assert isinstance(page_size, int), "The page size must be an integer"
        assert page > 0, "The index page must be greater than zero"
        assert page_size > 0, "The page size muste be greater than zero"
        index = index_range(page, page_size)
        self.dataset()
        if len(self.__dataset) < index[0] or len(self.__dataset) < index[1]:
            return []

        return self.__dataset[index[0]:index[1]]
