import re

data = open("data.txt", "r")
string = data.read()

t = re.split('\d+\.', string)
for line in t:
  print(line)