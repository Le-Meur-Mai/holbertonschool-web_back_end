#!/usr/bin/env python3

'''Module that define the method to get data from a database'''

import csv
import math
from typing import List, Dict
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
        assert page_size > 0, "The page size must be greater than zero"
        index = index_range(page, page_size)
        self.dataset()
        if len(self.__dataset) < index[0] or len(self.__dataset) < index[1]:
            return []

        return self.__dataset[index[0]:index[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:

        '''Function that return all the details of the page:
        page_size: The number of elements display on the page
        page: The number of the current page
        data: The data to display
        next_page: The number of the next page
        prev_page: The number of the previous page
        total_pages: the total amount of pages'''

        assert isinstance(page, int), "The index page must be an integer"
        assert isinstance(page_size, int), "The page size must be an integer"
        assert page > 0, "The index page must be greater than zero"
        assert page_size > 0, "The page size muste be greater than zero"
        data = self.get_page(page, page_size)

        total_pages = len(self.__dataset) / page_size
        if total_pages > int(total_pages):
            total_pages = int(total_pages) + 1
        else:
            total_pages = int(total_pages)

        if page >= total_pages:
            next_page = None
        else:
            next_page = page + 1

        if page <= 1 or page > total_pages:
            prev_page = None
        else:
            prev_page = page - 1

        data_size = len(data)

        return {
            'page_size': data_size,
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
