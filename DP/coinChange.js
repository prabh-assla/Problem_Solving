let array = [10], sum = 10

const subsetSum = (final, start, array, sum, possible) => {


    console.log(`final -> ${array[final]}, start -> ${array[start]}, sum -> ${sum}\n`)

    if(start > final)
        if(sum) return 0
        else return 1

    else{
        if(sum < 0){
            console.log('false case... sum<0 || start>final\n')
            return 0
        }
        
        else if(sum == 0){
            console.log('true case... sum=0\n')
            return 1
        }
            
        else if( sum > 0 ){
            console.log('sum>0... computations\n')
            for(let i=start; i<=final; ++i){
                possible = subsetSum(final, i, array, sum-array[i]) + subsetSum(final, i+1, array, sum);
                return possible;
            }
        }
    }

}
    
console.log(subsetSum(array.length-1, 0, array, sum, 0))