import re
import json

data = open("demofile.txt", "r")
string = data.read()[2:]

f = []

keys = ['name', 'address', 'phone', 'availability', 'category']

a = re.split('\n\n- ', string)
for b in a:
  c = re.split('\n', b)
  e = {}
  for d in range(5):
    e[keys[d]] = c[d].strip()
  f.append(e)

new_data = open('shithole.json', 'w')
new_data.write(json.dumps(f))

