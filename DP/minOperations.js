let n = 100, output = []

for(let i=1; i<=n; ++i)
    output.push(-1)

const min = (a, b) => a > b ? b : a

const minOperations = (size, N) => {
    if(size == N)
        return 0;

    else if(size > N)
        return Infinity;

    else if(output[size] != -1)
        return output[size]

    else{
        let a = size+1, b = 2*size;
            (!b) ? (b = Infinity) : (b = b);
                return output[size] = 1 + min(minOperations(a, N), minOperations(b, N));
    }

}

console.log( minOperations(0, n) )