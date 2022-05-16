import glob
import csv
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

files = glob.glob('2021-12-29_000000.csv')#ファイル名が8-2から始まる+*.csvでおわる
files = sorted(files)

cols = ['down_up','All_parking','small','big']  # 列名のリスト
df = pd.DataFrame(index=[],columns=cols)        # 空のデータフレーム

kouhokuUphill = []
for j in range(28):
    for k in range(3):
        for i in (files):
            df = pd.read_csv(i,header=None,encoding = 'UTF8')
            f = df.iloc[1,[2]]
            kouhokuUphill.append(int(f))
            print(f)