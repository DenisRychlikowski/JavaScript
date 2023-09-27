import math

a = int(input("Podaj liczbe "))
b = int(input("Podaj liczbe "))
c = int(input("Podaj liczbe "))

def function_kwadratow():
    delta = (b ** 2) -4*a*c

    if delta > 0:
        print("X1 = ", (-b - math.sqrt(delta)) / (2*a))
        print("X2 = ", (-b + math.sqrt(delta)) / (2*a))
    elif delta == 0:
        print("X0 = ", (-b) / (2*a))
    else:
        print("Brak roziązań")

function_kwadratow()