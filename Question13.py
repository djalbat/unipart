from math import floor

records = [
    {'id': 1},
    {'id': 2},
    {'id': 3},
    {'id': 4},
    {'id': 5},
    {'id': 6},
    {'id': 7},
    {'id': 8},
    {'id': 9},
]


def batched(elements, size):
    length = len(elements)
    count = floor(length / size) + 1

    for i in range(count):
        first = i * size
        last = min((i + 1) * size, length)

        yield [first, last], elements[first:last]


for subrange, batch in batched(records, size=5):
    print(subrange, batch)
