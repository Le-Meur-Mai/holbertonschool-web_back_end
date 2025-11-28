#!/usr/bin/env python3
'''4-tasks.py'''
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    '''Function that has an async routine called wait_n that takes in 2 int
    arguments (in this order): n and max_delay. You will spawn task_wait_random
    n times with the specified max_delay.'''

    tasks = [task_wait_random(max_delay) for _ in range(n)]
    '''Renvoie une liste d'objet de type coroutine qui ne sont pas lancés
    mais en attente, tant que les fonctions asynchrones ne sont pas lancées par
    une boucle d'évenements comme as_completed ou gather'''
    list_result = []
    for task in asyncio.as_completed(tasks):
        '''as_completed lance les coroutine en même temps et attends qu'une
        tache se termine sans attendre les autres pourla mettre dans la liste
        à la différence de gather qui prend des arguments et renvoie les
        résultats dans l'ordre des arguments.'''
        result = await task
        list_result.append(result)
    return list_result
