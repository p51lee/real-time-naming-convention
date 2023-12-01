# Import statements
import math as math_library
from random import randint as random_integer_generator

# Global constant declarations
MAXIMUM_VALUE = 100
MINIMUM_VALUE = 1


# Class definition
class SimpleCalculatorClass:
    attribute_value = "I am a class attribute"

    def __init__(self, initial_value_param=0):
        self.current_value_attr = initial_value_param  # Instance attribute

    def add_value(self, value_to_add_param):  # Method definition
        self.current_value_attr += value_to_add_param

    def subtract_value(self, value_to_subtract_param):
        self.current_value_attr -= value_to_subtract_param


# Function definitions
def calculate_square_root(input_value):  # Function definition with parameter
    return math_library.sqrt(input_value)


def generate_random_value():
    return random_integer_generator(MINIMUM_VALUE, MAXIMUM_VALUE)


# Lambda function
square_function = lambda input_value: input_value * input_value


def main_function():
    # Variable declarations
    first_number_var = 10

    # Object instantiation
    calculator_object = SimpleCalculatorClass(first_number_var)

    # Function calls
    square_root_value = calculate_square_root(first_number_var)
    random_number_value = generate_random_value()

    # For loop
    for loop_idx in range(5):
        print(loop_idx)

    # With statement
    with open("example.txt", "w") as file_handler:
        file_handler.write("Hello, world!")

    # Try-except block
    try:
        division_result = 10 / 0
    except ZeroDivisionError as div_error:
        print(div_error)

    def inner_function_scope():
        nonlocal first_number_var
        first_number_var = 11

    inner_function_scope()

    # Function with argument
    def print_argument_value(argument_value_param):
        print(argument_value_param)

    # Unpacking assignment
    unpacked_a, unpacked_b, *unpacked_rest = [1, 2, 3, 4, 5]
