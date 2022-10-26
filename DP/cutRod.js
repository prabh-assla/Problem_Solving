let list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 1,3 ,1, 123636, 25255, 3553, 1,1 ,1,1 , 1,1 ,1 ,1, 33]

const max = (a, b) => a > b ? a : b

const cutRod = (list, l, m, sum) => {

    console.log('list ', list, 'last ', list[l-1], 'm ', m, 'sum ', sum, 'math_floor ', Math.floor( list.length / l ))

    // if( Math.floor( list.length / l ) == m )
    //     return sum

    if(  list.length < m )
        return -Infinity

    else if(  list.length == m )
        return sum

    else {
        if(l == 0)
            return sum
    
        else if(l <= 0)
            return -1*Infinity
    
        else{
            let a = cutRod(list, l, m+l, sum+list[l-1]), b = cutRod(list, l-1, m, sum)
            console.log('\n--------------values a & b ' + a + ' ' + b )
            return sum = max( a,b )
        }
    }
}

console.log ( cutRod(list, list.length, 0, 0) )