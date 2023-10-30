# imports
from random import randrange

# Enumerations
from enum import Enum

class NodeType(Enum):
    HEAD = 0
    TAIL = 1
    NODE = 2

# Class definition
class ListNode:
    def __init__(self, value, node = NodeType.NODE):
        self.node_value = value
        self.node_type = node
        self.next_node = None
        
    def get_value(self):
        return self.node_value
    
    def set_next(self, next_node):
        self.next_node = next_node
    
    def get_next(self):
        return self.next_node
    
    def get_last(self):
        tmp = self
        while tmp.node_type != NodeType.TAIL and tmp.next_node != None:
            tmp = tmp.next_node
        return tmp
    
    def is_head(self):
        return self.node_type == NodeType.HEAD
    
    def is_tail(self):
        return self.node_type == NodeType.TAIL or self.next_node == None

# Lambda function for logging
log_node = lambda input_node: print(f"ListNode: (val={input_node.get_value()}, node_type={input_node.node_type})")

def main_function():
    # Variable Declaration & Object Intantiation
	list_random = ListNode(None, NodeType.HEAD)
    
	# For loop and method call, Function calls
	temp = list_random
	for i in range(10):
		rand_node = ListNode(randrange(0, 100), NodeType.NODE)
		log_node(rand_node)
		temp.set_next(rand_node)
		temp = rand_node
	
	# Nested method call
	list_random.get_last().set_next(ListNode(None, NodeType.TAIL))
     
	s = 0
	temp = list_random.get_next()
	while not temp.is_tail():
		s += temp.get_value()
		temp = temp.get_next()
    
	print(f"Sum: {s}")
     
if __name__ == '__main__':
    main_function()