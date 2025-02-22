# Exercise 1
name = "Nga"
age = 18
height = 162.5
is_student = True

print("Name:", name, "Age:", age, "Height:", height, "Is student:", is_student)

# Exercise 2
length = 20.5
width = 10.2
s = length * width
p = (length + width) * 2

print("Area:", s)
print("Perimeter:", p)

# Exercise 3
num = 7
if num > 0:
    print("Positive decimal number")
else:
    print("Not a positive decimal number")

# Exercise 4
a = 5
b = 7
a = a + b
b = a - b
a = a - b

print(f"a = {a}, b = {b}")

# Exercise 5
sentence = "Hello world"

print(sentence.upper())
print(sentence.lower())
print(sentence.replace(sentence, "Hi there"))

# Exercise 6
is_raining = True
if is_raining == True:
    print("Take an umbrella!")
else:
    print("Enjoy the sunny day!")

# Exercise 7
num1 = 5
num2 = 0
sum = num1 + num2
difference = num1 - num2
product = num1 * num2
if num2 == 0:
    print("Error")
else:
    quotient = num1 / num2


print("Sum:", sum)
print("Difference:", difference)
print("Product:", product)
if num2 == 0:
    print("Quotient invalid")
else:
    print("Quotient:", quotient)
