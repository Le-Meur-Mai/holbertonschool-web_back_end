#!/usr/bin/env python3

'''9-element_lenght.py return values with the appropriate types'''
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    '''Training Function to use the python's annotations'''
    return [(i, len(i)) for i in lst]
