import math 

c5 = 523.25
cs5 = 554.37
d5 = 587.33
ds5 = 622.25
e5 = 659.26
f5 = 698.46
fs5 = 739.99
g5 = 783.99
gs5 = 830.61
a5 = 880.0
as5 = 932.33
b5 = 987.77

notes = {
    "c5": c5,
    "cs5": cs5,
    "d5": d5,
    "ds5": ds5,
    "e5": e5,
    "f5": f5,
    "fs5": fs5,
    "g5": g5,
    "gs5": gs5,
    "a5": a5,
    "as5": as5,
    "b5": b5
}

for note,frequency in notes.items():
    print(f"const {note} = {frequency};")
    print(f"const {note} = {(frequency * math.pow(2, 50/1200)):.2f};")