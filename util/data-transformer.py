import re

data = open("data.txt", "r")
string = data.read()


food_banks = {
  "FOOD PANTRIES": [],
  "MEALS SITES": [],
  "SNAP APPLICATION ASSISTANCE": [],
  "FARMERS MARKETS ACCEPTING SNAP/HIP": [],
  "SENIOR DINING STIES": [],
  "AFFORDABLE FRUIT & VEGETABLE SOURCES": []
}

t = re.split('\d+\.', string)
for line in t:
  print(line)