#!/usr/bin/env python3

'''8-make_multiplier: Script that returns a function that multiplies a float
by a multiplier'''

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''function make_multiplier that takes a float multiplier as argument and
    returns a function that multiplies a float by multiplier.'''
    def multiply_float(n):
        '''function that multiply by the multiplier'''
        return n * multiplier

    return multiply_float
