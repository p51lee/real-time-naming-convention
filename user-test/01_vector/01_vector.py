import math

class Vector:
	__slots__ = ['x', 'y']

	def __init__(self, x, y):
		self.x = x
		self.y = y

	def get_norm(self):
		return math.sqrt(self.x ** 2 + self.y ** 2)

	def __add__(self, op):
		return Vector(self.x + op.x, self.y + op.y)

	def __str__(self):
		return '<Vector %d %d>' % (self.x, self.y)


if __name__ == '__main__':
	
	temp = Vector(0, 0)
	vector_list = []

	with open('vectors.txt', mode='r') as file_read:
		for line in file_read.readlines():
			x, y = line.strip().split(" ")
			vector_list.append(Vector(int(x), int(y)))

	while temp.get_norm() <= 15.0:
		temp = temp + vector_list.pop(0)

	print(temp)