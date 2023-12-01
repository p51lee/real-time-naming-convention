# Class definition
class SimpleCalculatorClass:
    class_intro = "I am a class attribute"
    class_class = "cs584"

    def __init__(self, initial_value_param=0):
        self.current_value_attr = initial_value_param  # Instance attribute

    def add_value(self, value_to_add_param):  # Method definition
        self.current_value_attr += value_to_add_param

    def subtract_value(self, value_to_subtract_param):
        self.current_value_attr -= value_to_subtract_param


def main_function():
    # Variable declarations
    def_iter = 10
    first_number_var = 10
    second_number_var = 20
    third_number_var = 30

    # Object instantiation
    calculator_object = SimpleCalculatorClass(first_number_var)

    # Method calls
    for i in range(def_iter):
        calculator_object.add_value(second_number_var)
    return_a = calculator_object.current_value_attr

    for j in range(def_iter):
        calculator_object.subtract_value(third_number_var)
    return_b = calculator_object.current_value_attr
    print(f"Result: {return_a + return_b}")

if __name__ == "__main__":
    main_function()
