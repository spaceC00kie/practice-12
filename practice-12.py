arr = ["bob", "linda", "tina", "gene", "louise"]

def belcher_length(person):
    return list(map(lambda i : len(i), person))


print(belcher_length(arr))
