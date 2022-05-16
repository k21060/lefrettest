import glob
import csv
from re import A
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json

df = pd.read_csv("./2021-12-29_000000.csv",names=("plece","all","small","big"))


a=df["small"]
a_list = a.values.tolist()

directory = {}
directory["csv"] = a_list

print(directory)

with open('test.json', 'w') as f:
    json.dump(directory, f, ensure_ascii=False)