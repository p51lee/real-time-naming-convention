# Function with argument
def print_argument_value(argument_value_param):
    print(f"Argument value: {argument_value_param}")

def main_function():
    our_var = 1000
    
    # Unpacking assignment
    unpacked_a, unpacked_b, *unpacked_rest = [1, 2, 3, 4, 5]
    print(f"Unpacked: {unpacked_a}, {unpacked_b}, {unpacked_rest}")

    def inner_function_scope():
        nonlocal our_var
        our_var = 10

    breakpoint = 995
    while our_var > 0 :
        our_var -= 1
        unpacked_a += 1
        print_argument_value(our_var)

        if our_var == breakpoint:
            inner_function_scope()    

    # With statement
    if unpacked_a == 16:
        file_name = "example_file.txt"
        with open(file_name, "w") as file_handle_var:
            file_handle_var.write("Hello, world!")

        with open(file_name, "r") as file_handle_var:
            with_read = file_handle_var.read()
            print(with_read)

if __name__ == "__main__":
    main_function()