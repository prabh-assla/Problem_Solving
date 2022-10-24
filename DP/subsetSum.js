let array = [3, 34, 4, 12, 5, 2], sum = 34+12;

const subsetSum = (final, start, array, sum) => {

    console.log(`final -> ${array[final]}, start -> ${array[start]}, sum -> ${sum}\n`)

    if(start > final)
        if(sum) return false
        else return true

    else{
        if(sum < 0){
            console.log('false case... sum<0 || start>final\n')
            return false
        }
        
        else if(sum == 0){
            console.log('true case... sum=0\n')
            return true
        }
            
        else if( sum > 0 ){
            console.log('sum>0... computations\n')
            for(let i=start; i<=final; ++i) 
                if( subsetSum(final, i+1, array, sum) || subsetSum(final, i+1, array, sum-array[i]) ) //if any of the two values in OR relation is true, the IF will return true without needing to evaluate the other one... thus optimizing time
                    return true;

                else
                    return false;
        }
    }

}
    
console.log(subsetSum(array.length-1, 0, array, sum))