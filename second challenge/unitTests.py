___author__ = 'Bar Adar'

import unittest
from challenge2 import *

"""
A class for testing.
"""
class TestFindingPeople(unittest.TestCase):
    def test_equal_names(self):
        self.assertEqual(1, countUniqueNames("Deborah", "Egli", "Deborah", "Egli", "Deborah Egli"))

    def test_equal_with_whitespaces(self):
        self.assertEqual(1, countUniqueNames("Debbie  ", " Egli", " Debbie  ", "Egli ", "Debbie    Egli  ") )

    def test_equal_with_nicknames(self):
        self.assertEqual(1, countUniqueNames("Debora", "Egli", "Debbie", "Egli", "Debbie Egli"))

    def test_equeal_with_nicknames_in_cardName(self):
        self.assertEqual(1, countUniqueNames("Debora", "Egli", "Debbie", "Egli", "Debora Egli"))

    def test_equeal_with_nickname_in_lastName(self):
        self.assertEqual(1, countUniqueNames("Deborah", "Rod", "Deborah", "Roger", "Deborah Roger"))

    def test_equal_with_different_nicknames_in_multipul_places(self):
        self.assertEqual(1, countUniqueNames("Abby", "Ada", "Gail", "Ada", "Nabby Adeline"))

    def test_equal_with_middle_names(self):
        self.assertEqual(1, countUniqueNames("Deborah S", "Egli", "Deborah", "Egli", "Deborah Egli"))

    def test_equal_with_middle_names_in_card(self):
        self.assertEqual(2, countUniqueNames("Deborah S", "Egli", "Deborah", "Egli", "Deborah S Egli")) #2 because there are two different people (the full name indicates the middle name "S" must be a part of the name)

    def test_equal_with_changing_order(self):
        self.assertEqual(1, countUniqueNames("Deborah", "Egli", "Deborah", "Egli", "Egli Deborah"))

    def test_two_different_people(self):
        self.assertEqual(2, countUniqueNames("Michele", "Egli", "Deborah", "Egli", "Michele  Egli"))

    def test_three_different_people(self):
        self.assertEqual(3, countUniqueNames("Michele", "Egli", "Deborah", "Egli", "Michele  Aharon"))

    def test_two_last_names_firstScenerio(self):
        self.assertEqual(1, countUniqueNames("Deborah", "Egli Bauer", "Deborah", "Egli Bauer", "Egli Deborah Bauer"))

    def test_two_last_names_secondScenerio(self):
        self.assertEqual(1, countUniqueNames("Deborah", "Egli Bauer", "Deborah", "Egli Bauer", "Egli Bauer Deborah "))

    def test_two_last_names_thirdScenerio(self):
        self.assertEqual(2, countUniqueNames("Jack", "Bauer", "Jack", "Bauer Smith", "Jack Bauer"))

    def test_two_last_names_forthScenerio(self):
        self.assertEqual(3, countUniqueNames("Jack", "Bauer Helen", "Jack", "Bauer Smith", "Jack Bauer"))

    def test_equal_not_case_sensetive(self):
        self.assertEqual(1, countUniqueNames("deborah", "Egli", "DeboRAh", "EGLI", "DeboraH EgLi"))

    def test_equal_with_typo_mistakes_firstScenerio(self):
        self.assertEqual(1, countUniqueNames("Gab", "Egli", "Gad", "Egli", "Gab Egli"))

    def test_equal_with_typo_mistakes_secondScenerio(self):
        self.assertEqual(2, countUniqueNames("Gab", "Eglie", "Gab", "Egni", "Gab Egli")) #Egni Egli is a typo mistake


if __name__ == '__main__':
    unittest.main()
