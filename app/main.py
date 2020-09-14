import os, yaml, enum, json
from pprint import pprint

here = os.path.dirname(os.path.abspath(__file__))
infile = os.path.join(here, "list.yml")
outfile = os.path.join(here, "groceries.json")

class Status(enum.Enum):
    GREEN = 3
    YELLOW = 2
    RED = 1
    GRAY = 0

print(f"Reading file: {infile}")
with open(infile, "r") as file:
    data = yaml.safe_load(file)

groceries = {}
for parent, children in data.items():
    groceries.update({ parent.title(): {} })
    for c, child in enumerate(children):
        blob = dict(item=child.title(), category=parent.title(), status=Status.GRAY.value)
        groceries[parent.title()].update({ child.title(): blob })

with open(outfile, "w") as file:
    json.dump(groceries, file, indent=4, sort_keys=True)
    print(f"Writing file: {outfile}")
