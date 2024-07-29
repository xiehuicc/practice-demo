def common_prefix(a,b):
    """Returns the common prefix of a given string"""
    if len(a) != len(b):
        return common_prefix(b,a)
    for i in range(len(a)):
        if a[i] != b[i]:
            return a[:i]
    return a

# def test_common_prefix()