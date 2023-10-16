# Real-Time Naming Convention

<p align="center">
  <img width="524" alt="image" src="https://github.com/p51lee/real-time-naming-convention/assets/68288688/2f8dc296-927b-48fc-892b-c2c9c6fb7d74">
</p>





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
  return
```
As soon as you type the above, you will get:
```python
class SomeClass:
  def some_method(self, some_parameter, another_parameter):
    self.some_field = 42

def some_function(some_parameter, another_parameter):
  some_variable = 42
  return
```

## Note on Existing Names

This extension is designed to assist you in creating **new** variable, function, or class names by automatically adapting them to the naming convention of the language you're working in. It will not modify names that are already defined in your codebase.

For existing names, this extension is fully compatible with and encourages the use of VS Code's built-in autocompletion features. Simply start typing the name, and VS Code's autocompletion will help you complete it, without any interference from this extension.

## Supported Languages and Features
* Python
  * `snake_case`
    * variable name
    * variable name in for loop
    * function name
    * function parameter name
    * class field name
  * `PascalCase`
    * class name

## Extension Settings
TODO

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1
Initial release, support limited naming convention of Python.

### 0.0.2
Support `for` loop in python and add test cases.

---

**Enjoy!**
