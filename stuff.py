triangles = ['20 0 20','20 20 20']

def get_type(abc):
    types_list=[]
    for triangle in abc:
        sides = triangle.split()
        if sides[0]==sides[1] and sides[2]==sides[1]:
            types_list.append('Equilateral')
        elif((sides[0]==sides[1] and sides[2]<sides[0]+sides[1]) or (sides[0]==sides[2]and sides[1]<sides[0]+sides[2]) or (sides[1]==sides[2]and sides[0]<sides[1]+sides[2])):
            types_list.append('Isosceles')
        else:
            types_list.append('None of these')
    return types_list

print(get_type(triangles))