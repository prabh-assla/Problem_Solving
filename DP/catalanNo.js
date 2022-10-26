let n = 5, output = [];

for(let i=0; i<n; ++i)
    output.push(-1)

const catalan = (n) => {
    if(n == 0)
        return 1

    if( output[n-1] != -1 )
        return output[n-1]

    else
        return output[n-1] = ((2*n-1)*(2*n))/((n+1)*(n)) * catalan(n-1)  
}

console.log(catalan(n))