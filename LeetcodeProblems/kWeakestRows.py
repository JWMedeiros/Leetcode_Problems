mat=[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]
k=3

class Solution:
    def __init__(self, mat, k):
        self.mat = mat
        self.k = k

    def kWeakestRows():
        arr=[]
        answer=[]
        for x in range(0,len(mat)):
            ttlStr=0
            for num in x:
                if (num==1):
                    ttlStr+=1
                else:
                    break
            arr.append([ttlStr[x]])
        mergesort(arr)
        print(arr)
        for x in range(0,k):
            answer.append(arr[x][1])
            return answer
            
    def merge(left, right):
        if not len(left) or not len(right):
            return left or right

        result = []
        i, j = 0, 0
        while (len(result) < len(left) + len(right)):
            if left[i][0] < right[j][0]:
                result.append(left[i])
                i+= 1
            else:
                result.append(right[j])
                j+= 1
            if i == len(left) or j == len(right):
                result.extend(left[i:] or right[j:])
                break

        return result

    def mergesort(list):
        if len(list) < 2:
            return list

        middle = len(list)/2
        left = mergesort(list[:middle])
        right = mergesort(list[middle:])

        return merge(left, right)

print(Solution.kWeakestRows(mat,k))