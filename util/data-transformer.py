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

fp = re.split("FOOD PANTRIES", x[0])[1]
food_banks["FOOD PANTRIES"] = re.split('\d+\.', fp)
for entry in food_banks["FOOD PANTRIES"]:
  phone = re.findall(r'\(\d+\)\s\d+\-\d+', entry)
  if phone:
    phoneless = re.split(r'\(\d+\)\s\d+\-\d+', entry)
    address = re.findall(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    addressless = re.split(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    name = addressless[0]
    category = "FOOD PANTRIES"
    hours = re.findall(r'[A-Za-z]+\s\-\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+', phoneless[1])
    print(hours)

ms = re.split("MEALS SITES", x[1])[1]
food_banks["MEALS SITES"] = re.split('\d+\.', ms)
for entry in food_banks["MEALS SITES"]:
  phone = re.findall(r'\(\d+\)\s\d+\-\d+', entry)
  if phone:
    phoneless = re.split(r'\(\d+\)\s\d+\-\d+', entry)
    address = re.findall(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    addressless = re.split(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    name = addressless[0]
    category = "MEALS SITES"
    hours = re.findall(r'[A-Za-z]+\s\-\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+', phoneless[1])
    print(hours)

sas = re.split("SNAP APPLICATION ASSISTANCE", x[2])[1]
food_banks["SNAP APPLICATION ASSISTANCE"] = re.split('\d+\.', sas)
for entry in food_banks["SNAP APPLICATION ASSISTANCE"]:
  phone = re.findall(r'\(\d+\)\s\d+\-\d+', entry)
  if phone:
    phoneless = re.split(r'\(\d+\)\s\d+\-\d+', entry)
    address = re.findall(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    addressless = re.split(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    name = addressless[0]
    category = "SNAP APPLICATION ASSISTANCE"
    hours = re.findall(r'[A-Za-z]+\s\-\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+', phoneless[1])
    print(hours)

# food_banks["FARMERS MARKETS ACCEPTING SNAP/HIP"] = re.split("FARMERS MARKETS ACCEPTING SNAP/HIP", x[3])[1]

sda = re.split("SENIOR DINING ASSISTANCE", x[4])[1]
food_banks["SENIOR DINING ASSISTANCE"] = re.split('\d+\.', sda)
for entry in food_banks["SENIOR DINING ASSISTANCE"]:
  phone = re.findall(r'\(\d+\)\s\d+\-\d+', entry)
  if phone:
    phoneless = re.split(r'\(\d+\)\s\d+\-\d+', entry)
    address = re.findall(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    addressless = re.split(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    name = addressless[0]
    category = "SENIOR DINING ASSISTANCE"
    hours = re.findall(r'[A-Za-z]+\s\-\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+', phoneless[1])
    print(hours)

af = re.split("AFFORDABLE FRUIT & VEGETABLE SOURCES", x[5])[1]
food_banks["AFFORDABLE FRUIT & VEGETABLE SOURCES"] = re.split('\d+\.', af)
for entry in food_banks["AFFORDABLE FRUIT & VEGETABLE SOURCES"]:
  phone = re.findall(r'\(\d+\)\s\d+\-\d+', entry)
  if phone:
    phoneless = re.split(r'\(\d+\)\s\d+\-\d+', entry)
    address = re.findall(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    addressless = re.split(r'\d+\s[A-Za-z]+\s[A-Za-z]+\,\s[A-Za-z]+\,\s[A-Za-z]+\s\d+', phoneless[0])
    name = addressless[0]
    category = "AFFORDABLE FRUIT & VEGETABLE SOURCES"
    hours = re.findall(r'[A-Za-z]+\s\-\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\,\s[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+\,\s[A-Za-z]+[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\,\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s\&\s[A-Za-z]+\s[^A-Za-z]+\s\-\s[^A-Za-z]+[A-Za-z]+|[A-Za-z]+\s[^A-Za-z]+[A-Za-z]+', phoneless[1])
    print(hours)

# print(food_banks["FOOD PANTRIES"])


