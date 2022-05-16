import glob
import csv
from re import A
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json

# files = glob.glob('2021-12-29_000000.csv')#ファイル名が8-2から始まる+*.csvでおわる

# files = sorted(files)

# files = pd.read_csv(r'/Users/k21060kk/highwaySA•PA/test/2021-12-29_000000.csv')
# print(files)


# list = []
# for row in files:
#     list.append(row[1]
df = pd.read_csv("./2021-12-29_000000.csv",names=("plece","all","small","big"))

# files.loc[0:28,['pleace','全体','大型','小型']]
# list=[]

# list = files.iloc[1:3,0:3]

# print(df)
# print(df["small"])

a=df["small"]
# print(a)
a_list = a.values.tolist()
# print(a_list)

directory = {}
directory["csv"] = a_list

# for i,element in enumerate(a_list):
#     directory[i] =  element

print(directory)

# print(type(a))


with open('test.json', 'w') as f:
    json.dump(directory, f, ensure_ascii=False)


# with open('test.json', 'w') as f:
#     dict = json.load(list)

# jsonStr = json.dumos(dict)

# print(jsonStr)

# list = []
# for row in csv.reader('/test/2021-12-29_000000.csv'):
#     list.append(row[1])
    

# print(list)


# kouhokuUphill = []


# for j in range(28):
#     for k in range(3):
#         for i in (files):
#             df = pd.read_csv(i,header=None,encoding = 'UTF8')
#             f = df.iloc[j,[k]]
#             kouhokuUphill.append(int(f))
#             print(f)


# x = np.array(kouhokuUphill)
# y = np.array(range(0, len(kouhokuUphill)))
# print(y,x)
# plt.plot(y, x)

# plt.show()