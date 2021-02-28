

f = open("stocks.txt")

allstocks = set()
for line in f.readlines():
    words = line.split()
    if(len(words[0]) > 1):
        allstocks.add(words[0])

#print(allstocks)
print(len(allstocks))
