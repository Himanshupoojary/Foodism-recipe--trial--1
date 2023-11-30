l=[23,45,2,36,7,87]

sr=0
st=len(l)-1
mid=(sr+st)//2

search=int(input('Enter the key to search'))

while sr <=  st:
    if search == l[mid]:
        print(f'Key found at {mid}')
        break
    elif search > l[mid]:
        sr=mid+1
    else:
        st=mid-1
        mid=(sr+st)//2

else:
    print('key not found')


    