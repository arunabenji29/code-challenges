var orangesRotting = function(grid) {
    
    console.log('main grid: ',grid)
    let queue = []
    for(let x=0;x<grid.length;x++){
        for(let y=0;y<grid[0].length;y++){
          
            if(grid[x][y]==1)
            {
              queue.push([x,y])
              
              
            }
        }
    }

    let rottenMade = check_good(queue,grid)

    for(let i=0;i<grid.length;i++){
      if(grid[i].includes(0)){
        return -1
      }
    }
    
    return rottenMade
};



function check_good(queue,grid){

    let count = 0
    let queue_1 = []
    console.log('initial queue: ', queue)
    console.log('initial grid: ',grid)

    while(queue.length>0){
      console.log('***************************')
      console.log('grid: ',grid)
      console.log('queue before popping: ', queue)
      let current_node = queue.shift()
      console.log('popped index: ',current_node)
      console.log('queue after popping: ', queue)
      let x = current_node[0]
      let y= current_node[1]

      
      if(y<grid[0].length-1 && grid[x][y+1]== 0){
      console.log('2:here')
      console.log('x :',x,'y+1 :',y+1)
        console.log('check neighbors: grid[x][y+1] - ',grid[x][y+1])
        grid[x][y+1] = 1
        queue_1.push([x,y+1])

    }
      if(x<grid.length-1 && grid[x+1][y] == 0){
        console.log('1:here')
      console.log('x+1 :',x+1,'y :',y)
        console.log('check neighbors: grid[x+1][y] - ',grid[x+1][y])
        grid[x+1][y] = 1
        queue_1.push([x+1,y])
   
    }
    
    if(x>0 && grid[x-1][y]==0){
      console.log('3:here')
      console.log('x-1 :',x-1,'y :',y)
        grid[x-1][y] = 1
        queue_1.push([x-1,y])

    }
    if(y >0 && grid[x][y-1]==0){
      console.log('4:here')
      console.log('x :',x,'y-1 :',y-1)
        grid[x][y-1] = 1
        queue_1.push([x,y-1])

    }

    if(queue.length==0 && queue_1.length>0){
      console.log('######increment count#######')
      count += 1
      queue = [...queue_1]
      queue_1 = []
    }
      
    }
    
    console.log('check: final count: ',count)
    return count
}

islands = [[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]
console.log(orangesRotting(islands))