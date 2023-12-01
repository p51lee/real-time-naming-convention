# Import statements
import math as math_library

def main_function():
    # Lambda function
    square_function = lambda input_value: input_value * input_value
    temp_function = lambda input_value: input_value + 4
    
    # List comprehension
    lambda_list = -1
    square_values_list = [lambda_list * square_function(item_value) for item_value in range(5)]
    print(f"Squares: {square_values_list}")

    # Try-except block
    for out_value in square_values_list:
        try:
            division_result = 10 / out_value
            print(f"\nOuter result: {division_result}")

            for in_value in square_values_list:
                division_result = 10 / temp_function(in_value)
                print(f"Inner result: {division_result}")               
                
        except ZeroDivisionError as error_instance:
            print(f"Caught an exception: {error_instance}")

if __name__ == "__main__":
    main_function()
