ldapDictionary = {
    'objectclass': [
        b'inetOrgPerson',
        b'person'
    ],
    'cn': [
        b'George Orwell'
    ],
    'givenName': [
        b'George'
    ],
    'sn': [
        b'Orwell'
    ],
    'uidNumber': [
        b'1984'
    ],
    'gidNumber': [
        b'1984'
    ],
    'mail': [
        b'george.orwell@example.com',
        b'big.brother@example.com',
    ],
}


def stringToInteger(string):
    value = string

    try:
        value = int(string)
    except ValueError:
        pass

    return value


def stringsToIntegers(strings):
    return list(map(stringToInteger, strings))


def decodeBytesObjects(bytesObjects):
    return list(map(lambda bytesObject: bytesObject.decode('utf-8'), bytesObjects))


def elementsToElementOrElements(elements):
    return elements if len(elements) > 1 else elements[0]


def retrieve(dictionary, key):
    bytesObjects = dictionary[key]
    strings = decodeBytesObjects(bytesObjects)
    values = stringsToIntegers(strings)
    result = elementsToElementOrElements(values)

    return result


class LdapEntry:
    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __getattr__(self, key):
        if key in self.dictionary:
            return retrieve(self.dictionary, key)
        else:
            raise AttributeError


e = LdapEntry(ldapDictionary)

assert (e.cn == 'George Orwell')
assert (e.uidNumber == 1984)
assert ('big.brother@example.com' in e.mail)
assert (len(e.mail) == 2)
