#!/usr/bin/env python3

'''2-floor.py script that returns the floor of the float.'''


def floor(n: float) -> int:
    '''A type-annotated function floor which takes a float n as argument
    and returns the floor of the float.'''
    result = int(n)
    if n < 0:
        result -= 1
    return result
