let _str = "01331220";

const min = (a, b) => {a > b ? b : a}

const mindelete = (str, e, s) => {
    if(!(e-s))
        return 1

    else if(s > e)
        return 0

    else if((str[s] == str[e]) && (e-s == 1))
        return 1

    else{
        
        if(str[s] == str[e])
        return mindelete(str, e-1, s+1)
        
        if(str[s] != str[e]){
            let a = Infinity, b = Infinity, c = Infinity, index = s;

            for(let i=s+1; i<=e; ++i)
                if(str[s] == str[i]){
                    index = i; 
                        break;
            }
            // console.log(index)

            a = mindelete(str, index, s) + mindelete(str, e, index+1)
            b = mindelete(str, e-1, s)
            c = mindelete(str, e, s+1)
            
            return min(a, min(b, c))
        }
    }
}

console.log(mindelete(_str, _str.length-1, 0))