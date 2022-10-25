let str1 = "jiiidb", str2 = "klgh", output = []

for(let i=0; i<str1.length; ++i){
    output.push([])
        for(let j=0; j<str2.length; ++j)
            output[i].push(-1)
}

console.log(output)

const _min = (a, b) => a > b ? b : a

const minEdit = (str1, str2, l1, l2, min) => {

    console.log(str1.slice(0, l1), str2.slice(0, l2), min)

    // if str1 is empty we will need to add all elements of str2 into str1
    if(!l1)
        return l2

    // if str2 is empty we will need to remove all elements of str1 also
    else if(!l2)
        return l1

    else if(str1[0] == str2[0])
        return minEdit(str1, str2, l1-1, l2-1, min)

    else    
        return min = 1 + _min( _min(minEdit(str1, str2, l1, l2-1, min), minEdit(str1, str2, l1-1, l2, min) ), minEdit(str1, str2, l1-1, l2-1, min))
        // c1 -> for insert
        // c2 -> for remove
        // c3 -> for replace

}

let a = minEdit(str1, str2, str1.length, str2.length, 0)
    
console.log(a)
