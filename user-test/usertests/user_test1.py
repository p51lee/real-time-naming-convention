# Import statements
import math as math_library
from random import randint as random_integer_generator

MAXIMUM_VALUE = 100
MINIMUM_VALUE = 1

class SimpleCalculatorClass:
    class_attribute_value = "I am a class attribute"

    def __init_ (self, initial_value_param=0):
        self.current_value_attr = initial_value_param
    
    def add_value(self, value_to_add_param):
        self.current_value_attr += value_to_add_param
    
    def subtract_value(self, value_to_subtract_param):
        self.current_value_attr -= value_to_subtract_param


def calculate_square_root(input_value):
    return math_library.sqrt(input_value)

def generate_random_value():
    return random_integer_generator(MINIMUM_VALUE, MAXIMUM_VALUE)

square_function = lambda input_value: input_value * input_value

def main_function():
    first_number_var = 10
    second_number_var = 20
    third_number_var = 30

    calculator_object = SimpleCalculatorClass(first_number_var)

    calculator_object.add_value(second_number_var)
    print(f'After addition: {calculator_object.current_value_attr}')

    calculator_object.subtract_value(third_number_var)
    print(f'After subtraction: {calculator_object.current_value_attr}')

    square_root_value = calculate_square_root(first_number_var)
    print(f'Square root of {first_number_var}is {square_root_value}')

    random_number_value = generate_random_value()
    print(f'Generated random number: {random_number_value}')

    for loop_index in range(5):
        print(f'Loop iteration {loop_index}')

    square_values_list = [square_function(item_value) for item_value in range(5)]
    print(f'Squares: {square_values_list}')

    with open('example_file.txt', 'w') as file_handle_var:
        file_handle_var.write('Hello, world!')

    try:
        division_result = 10 / 0
    except ZeroDivisionError as error_instance:
        print(f'Caught an exception: {error_instance}')

    global MAXIMUM_VALUE
    MAXIMUM_VALUE = 101

    def inner_function_scope():
        nonlocal first_number_var
        first_number_var = 11

    inner_function_scope()

    def print_argument_value(argument_value_param):
        print(f'argument value: {argument_value_param}')

    print_argument_value("Test Argument")

    unpacked_a, unpacked_b, *unpacked_rest = [1, 2, 3, 4, 5]
    print(f'Unpacked: {unpacked_a}, {unpacked_b}, {unpacked_rest}')

if __name__ == "__main__":
    main_function()