#!/usr/bin/env python3

'''7-to_kv.py returns a tuple with differents values'''
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''function to_kv that takes a string k and an int OR float v as arguments
    and returns a tuple.
    The first element of the tuple is the string k.
    The second element is the square of the int/float v and should be annotated
    as a float.'''

    new_tuple = (k, v * v)
    return new_tuple
