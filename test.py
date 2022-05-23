import glob
# import csv
# from re import A
import pandas as pd
# import numpy as np
# import matplotlib.pyplot as plt
import json

file = glob.glob("./2021-12-29_*.csv")
# print(file)

file = sorted(file)
# print(file)

df = []

for b in file:
    df.append(pd.read_csv(b,names=("plece","all","small","big")))

# df = pd.read_csv("./2021-12-29_000000.csv",names=("plece","all","small","big"))

# for b in df:
#     print(b)


# directory = [0]*len(df)  


# for i in range(len(df)):
#     directory[i] = {}
#     directory[i][f"csv_{i}"] = df[i]["small"].values.tolist()

directory = {}
for i in range(len(df)):
    directory[f"csv_{i}"] = df[i]["small"].values.tolist()



# for c in df:
#     directory = []
#     directory["csv"] = df["small"].values.tolist()



print(directory)

# for i in range(len(df)):
#     with open('test.json', 'w') as f:
#         json.dump(directory[i], f, ensure_ascii=False)

with open('test.json', 'w') as f:
    json.dump(directory, f, ensure_ascii=False)