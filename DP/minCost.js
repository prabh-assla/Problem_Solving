let array =  [ [ 1, 2, 3, 9 ], [ 4, 8, 2, 9 ], [ 1, 5, 3, 1 ] ], output = [];

for(let i=0; i<array.length; ++i){
    output.push([])
        for(let j of array[i])
            output[i].push(-1)
}

const mincost = (finalx, finaly, startx, starty, x, y) => {

    if(x == startx && y == starty)
        return output[x][y] = array[x][y]
    else if(x < 0 || y < 0)
        return Infinity

  if (output[x][y] == -1) {
    let a = mincost(finalx, finaly, startx, starty, x, y-1)
    let b = mincost(finalx, finaly, startx, starty, x-1, y-1)
    let c = mincost(finalx, finaly, startx, starty, x-1, y)

    if (a >= b) {
      if (b >= c) return output[x][y] = array[x][y] + c;
      else return output[x][y] = array[x][y] + b;
    } 
    
    else if (b >= c) {
      if (c >= a) return output[x][y] = array[x][y] + a;
      else return output[x][y] = array[x][y] + c;
    } 
    
    else if (c >= a) {
      if (a >= b) return output[x][y] = array[x][y] + b;
      else return output[x][y] = array[x][y] + a;
    }
  }

  else
    return output[x][y];

};

mincost(1, 2, 0, 0, 1, 2);

console.log(output)