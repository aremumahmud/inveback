import numpy as np
import matplotlib.pyplot as plt

# Given RSSI threshold
rssi_threshold = -40

# Hypothetical Data
rssi = [
   22.13,
21.97,
21.75,
23.30 ,
23.09


]
distance = [
 368,
394,
406,
400,
399

]


print(len(rssi))
print(len(distance))
# Plotting
plt.figure(figsize=(10, 6))
plt.plot(distance, rssi, marker='o', linestyle='-', color='b')
plt.title('C/I vs Distance (Before the handover)')
plt.xlabel('Distance (m)')
plt.ylabel('C/I of Serving Cell ')
plt.grid(True)
# plt.axhline(y=rssi_threshold, color='r', linestyle='--', label='')
plt.legend()
plt.show()
