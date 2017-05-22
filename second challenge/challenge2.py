___author__ = 'Bar Adar'

import csv
from collections import defaultdict


dict = {}

"""
This function compare between a name and the full name written in the card.
The function handles middle names and a different order of the names.

Input:
    first - the first name as a string.
    second - the last name as a string.
    full - the full name as written in the card, as a list.

Output:
    The number of unique persons. If the persons are the same - returns 1. else, returns 2.
"""
def compare_names_to_full_name(first, second, full):
    if len(full) != len(second) + 1: #bacuse Jack Bauer is not the same person as Jake Bauer Smith
        return 2
    #the code below handles the case the name is written in a different order
    if first[0] in full:
        for last_name in second:
            if last_name not in full:
                return 2
    else:
        return 2
    return 1

"""
This function checks if tow names are equal. It includes middle names.
Note - I considerate middle names in the comparison of first names because for example Jake David is not the same person as Jake Ben.

Input:
    first - the first name as a string.
    second - the second name as a string.
    is_first_name - do we check a first name or a last name. (True or False).

Output:
    The number of unique names. If the names are equals - returns 1. else, returns 2.
"""
def compare_names(first, second, is_first_name):
    l1 = len(first)
    l2 = len(second)
    names_len = 0
    if is_first_name:
        names_len = l1 if (l2 > l1) else l2
    else:
        if l1 != l2:
            return 2
        names_len = l1
    for cur_name in xrange(names_len):
        if first[cur_name] != second[cur_name]:
            return 2
    return 1

"""
This function parses a nickname to it's original name (in case it's necessary).

Input:
    The string (=name) to parse.

Output:
    The right name, as a string.
"""
def parse_name_to_nickname(name):
    for original_name in dict:
        if name == original_name:
            return name
        if name in dict[original_name]:
            return original_name
    return name


"""
This function parses the string to separated names while considering typing issues (whitespaces).

Input:
    The string (=name) to parse.

Output:
    A list with the names in the recived strings.
"""
def parsing_name(full_name):
    full_name = ' '.join(full_name.split()) #removing unnecessary whitespaces
    full_name = full_name.split(" ")
    for i in xrange(len(full_name)):
        full_name[i] = full_name[i].strip()
        full_name[i] = parse_name_to_nickname(full_name[i])
    return full_name


"""
This function counts how many unique names (different people) threre are in the tranzaction.

Input:
    billFirstName - the first name in the billing address form (could include middle names)
    billLastName - the last name in the billing address form
    shipFirstName - the first name in the shipping address form (could include middle names)
    shipLastName - the last name in the shipping address form
    billNameOnCard - the full name as it appears on the credit card.

Output:
    The number of unique names.
"""

def countUniqueNames(billFirstName,billLastName,shipFirstName,shipLastName,billNameOnCard):
    global dict

    #for parsing the nicknames only once
    if not countUniqueNames.is_dict_initialized:
        dict = nicknames_configure("nicknames.csv")
        countUniqueNames.is_dict_initialized = True

    #parsing the data to lists:
    name_on_card = parsing_name(billNameOnCard.lower())
    bill_first_name = parsing_name(billFirstName.lower())
    bill_last_name = parsing_name(billLastName.lower())
    ship_first_name = parsing_name(shipFirstName.lower())
    ship_last_name = parsing_name(shipLastName.lower())

    #output of comparison between bill/ship name to the name on the card
    bill_to_full = compare_names_to_full_name(bill_first_name, bill_last_name, name_on_card)
    ship_to_full = compare_names_to_full_name(ship_first_name, ship_last_name, name_on_card)

    if compare_names(bill_first_name,ship_first_name, True)==1:
        if compare_names(bill_last_name, ship_last_name, False)==1:
            return bill_to_full
        else:
            if bill_to_full == ship_to_full:
                return 3
                # because if the output is equal and we know thw bill is different than the ship, the output for both must be 2
            else:
                return 2
    else:
        if bill_to_full ==  ship_to_full:
            return 3
            #because if the output is equal and we know thw bill is different than the ship, the output for both must be 2
        else:
            return 2

countUniqueNames.is_dict_initialized = False


"""
This function configures data from the csv file, orginaizes it in a dictionary and returns it.

input:
    The csv path.

output:
    A dictionary with the original name as the key, and a list of the nicknames as the value.
"""
def nicknames_configure(path):
    nicks_dict = defaultdict(list)
    with open(path, "r") as nicks_file:
        reader = csv.reader(nicks_file)
        for key, value in reader:
            key = key.strip().lower()
            value = value.strip().lower()
            nicks_dict[key].append(value) #appending nickname to the original name
    return nicks_dict

