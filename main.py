def encode(string):
    counts = {}
    
    for char in string:
        if not char in counts:
            counts[char] = 0
        
        counts[char] = counts[char] + 1
    
    print(counts)

encode(input("Hello! "))