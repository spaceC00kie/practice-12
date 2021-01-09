arr = ["bob", "linda", "tina", "gene", "louise"]


def item_length(item):
    return len(item)


def belcher_length(person):
    return list(map(item_length, person))


print(belcher_length(arr))
