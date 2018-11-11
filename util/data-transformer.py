import re

data = open("demofile.txt", "r")
string = data.read()


food_banks = {
  "FOOD PANTRIES": [],
  "MEALS SITES": [],
  "SNAP APPLICATION ASSISTANCE": [],
  "FARMERS MARKETS ACCEPTING SNAP/HIP": [],
  "SENIOR DINING ASSISTANCE": [],
  "AFFORDABLE FRUIT & VEGETABLE SOURCES": []
}

x = re.split("HELLO", string)

food_banks["FOOD PANTRIES"] = re.split("FOOD PANTRIES", x[0])[1]
food_banks["MEALS SITES"] = re.split("MEALS SITES", x[1])[1]
food_banks["SNAP APPLICATION ASSISTANCE"] = re.split("SNAP APPLICATION ASSISTANCE", x[2])[1]
food_banks["FARMERS MARKETS ACCEPTING SNAP/HIP"] = re.split("FARMERS MARKETS ACCEPTING SNAP/HIP", x[3])[1]
food_banks["SENIOR DINING ASSISTANCE"] = re.split("SENIOR DINING ASSISTANCE", x[4])[1]
food_banks["AFFORDABLE FRUIT & VEGETABLE SOURCES"] = re.split("AFFORDABLE FRUIT & VEGETABLE SOURCES", x[5])[1]


