# Real-Time Naming Convention

![](./images/demo.gif)

Developers often work with multiple programming languages, each with its own set
of naming conventions. Manually adapting to each convention can be error-prone
and time-consuming. This extension solves that problem for you.

Simply type in a new variable name with spaces, like `new fancy name`, and this
extension will automatically adapt it to the naming convention of the language
you're working in: `new_fancy_name`, `newFancyName` or `NewFancyName`.

## Usage (Python)

Just type it like this:
```
class some class:
  def some method(self, some parameter, another parameter):
    self.some field = 42

def some function(some parameter, another parameter):
  some variable = 42
  for some int in [1, 2, 3]:
    print("Hello world!")
  return
```
As soon as you type the above, you will get:
```python
class SomeClass:
  def some_method(self, some_parameter, another_parameter):
    self.some_field = 42

def some_function(some_parameter, another_parameter):
  some_variable = 42
  for some_int in [1, 2, 3]:
    print("Hello world!")
  return
```

## Note on Existing Names

This extension is designed to assist you in creating **new** variable, function, or class names by automatically adapting them to the naming convention of the language you're working in. It will not modify names that are already defined in your codebase.

For existing names, this extension is fully compatible with and encourages the use of VS Code's built-in autocompletion features. Simply start typing the name, and VS Code's autocompletion will help you complete it, without any interference from this extension.

## Supported Languages and Features
* Python
* TODO: C, Java, JavaScript ...


## Python Naming Conventions and Syntax for Defining Names
In Python, naming conventions play a critical role in enhancing code readability
and maintainability. The naming of variables, functions, classes, and other
entities must be consistent and self-explanatory. This section outlines the
various syntactical locations where new names can be introduced in Python,
accompanied by the naming conventions commonly adhered to.

### Variable Assignments
Use `snake_case` for variable names.
```python
variable_name = value
```
### Function Definitions
Use `snake_case` for both the function name and its parameters.
```python
def function_name(param1, param2):
    pass
```
### Class Definitions
Use `PascalCase` for class names.
```python
class ClassName:
    pass
```
### For Loops
Use `snake_case` for loop variables.
```python
for item_name in iterable:
    pass
```
### List Comprehensions
Use `snake_case` for the loop variables.
```python
[ <expression> for item_name in iterable ]
```
### With / Import statements
Use `snake_case` for context variable names.
```python
from module import entity as entitiy_name

with open("file.txt") as file_handle:
    pass
```
### Except Clauses
Use `snake_case` for exception variable names.
```python
try:
    pass
except Exception as error_name:
    pass
```
### Lambda Function Parameters
Use `snake_case` for the lambda function parameters
```python
lambda param_name: <expression>
```
### Class Attribute and Method Definitions
Use `PascalCase` for class names, and `snake_case` for attribute and method names.
```python
class ClassName:
    class_attribute = value

    def method_name(self, param_name):
        pass
```
### Global and Nonlocal Statements
Use `snake_case` for the variable names
```python
global variable_name
nonlocal variable_name
```
### Function Arguments
Use `snake_case` for argument names.
```python
def func_name(arg_name):
    pass
```
### Unpacking Assignments
Use `snake_case` for all unpacked variable names.
```python
u_a, u_b, *u_rest = [1, 2, 3, 4, 5]
```


## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1
* Initial release, support limited naming convention of Python.

### 0.0.2
* Support `for` loop in python and add test cases.

### 0.0.3
* Support recording input statistics for research purposes.

### 0.1.0
* Supports full Python grammar
* More powerful input recordings (for research purposes)

### 0.1.1
* Fix Python assignment patterns
* No auto correction while recording

### 0.1.2
* Fix duplicate recording disposable

### 0.1.3
* Add Python unpacking patterns
* Add demo GIF in readme.md

### 0.2.0
* Add optional indication for automatic modification
* Add correction rule for reserved word exception
---

**Enjoy!**
