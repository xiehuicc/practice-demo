from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation, writers
import numpy as np

fig = plt.figure(figsize =( 6,6))
axes = fig.add_subplot(1,1,1)
axes.set_ylim(0, 1500)

palette = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
y1, y2, y3, y4, y5, y6 = [], [], [], [], [], []

def animation_functions(i):
    y1 = i
    y2 = 6 * i
    y3 = 3 * i
    y4 = 2 * i
    y5 = 5 * i
    y6 = 3 * i
    
    plt.xlabel("Country")
    plt.ylabel("GDP of Country")

    plt.bar(["India", "China", "Germany", "USA", "Canada", "UK"],
            [y1, y2, y3, y4, y5, y6], color = palette)
    
plt.title("GDP Growth")

animation = FuncAnimation(fig, animation_functions, interval = 50)

plt.show()