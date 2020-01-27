// another solution of mine
function shortest_path(map){
  let adj_list = {}

  for(let i=0;i<map.length;i++){
    for(let j=0;j<map[0].length;j++){
      if(map[i][j]!='D')
      {
        if(!adj_list[[i,j]]){
          adj_list[[i,j]]
        }
        
        let neighbors = add_neighbors(i,j,map)
        adj_list[[i,j]] = neighbors
        
      }
    }
  }

  // console.log('adj list: ',adj_list)

  let queue = []
  queue.push([0,0])
  map[0][0] = 'D'
  let flag = true
  while (queue.length>0){
    // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    // console.log('\n\nqueue : ',queue)
    // console.log('queue length: ',queue.length)
    for (i in queue){
      
      let current
      let node
      let extract_path

        // console.log('2:here')

        current = queue.shift()
        extract_path = current

      // console.log('before type checking: popped element: ',current)
      if(typeof(current[current.length-1])==='object'){
        // console.log('5:here')
        node = current[current.length-1]
        
      }
      else{
        node = current
      }
      // console.log('popped element: ',node)
      // console.log('extract_path: ',extract_path)
      if(map[node[0]][node[1]] == 'X'){
        return node
      }

      for (n in adj_list[node]){
        console.log('\nn: ',adj_list[node][n])
        if(flag){
          if(map[adj_list[node][n][0]][adj_list[node][n][1]]=='O'){
            let path_copy = [extract_path,adj_list[node][n]]
            map[adj_list[node][n][0]][adj_list[node][n][1]]='D'
            console.log('path copy: ',path_copy)
            queue.push(path_copy)
            }
        
        flag = false
        }
        else{
            if(map[adj_list[node][n][0]][adj_list[node][n][1]]=='O' || map[adj_list[node][n][0]][adj_list[node][n][1]]=='X'){
              if(
                (extract_path[extract_path.length-1][1]<map[0].length-1 && extract_path[extract_path.length-1][0] == adj_list[node][n][0] && extract_path[extract_path.length-1][1]+1 == adj_list[node][n][1]) || 
                (extract_path[extract_path.length-1][0]<map.length-1 && extract_path[extract_path.length-1][0]+1 == adj_list[node][n][0] && extract_path[extract_path.length-1][1] == adj_list[node][n][1])
                 || 
                 (extract_path[extract_path.length-1][0]>0 && extract_path[extract_path.length-1][0]-1 == adj_list[node][n][0] && extract_path[extract_path.length-1][1] == adj_list[node][n][1]) 
                 || 
                 (extract_path[extract_path.length-1][1]>0 && extract_path[extract_path.length-1][0] == adj_list[node][n][0] && extract_path[extract_path.length-1][1]-1 == adj_list[node][n][1]) )

            {
              let path_copy = [...extract_path,adj_list[node][n]]
              if(map[adj_list[node][n][0]][adj_list[node][n][1]]=='X'){
                console.log('answer: ',path_copy)
                return path_copy
              }
              map[adj_list[node][n][0]][adj_list[node][n][1]]='D'
              console.log('path copy: ',path_copy)

              queue.push(path_copy)
            }
            }
        }
        
      }
    }
  }

}

function add_neighbors(i,j,map){
  neighbors = []
  if(i<map.length-1 && (map[i+1][j]=='O' || map[i+1][j]=='X')){
    neighbors.push([i+1,j])
  }
  if(j<map[0].length-1 && (map[i][j+1]=='O' || map[i][j+1]=='X')){
    neighbors.push([i,j+1])
  }
  if(i>0 && (map[i-1][j]=='O' || map[i-1][j]=='X')){
    neighbors.push([i-1,j])
  }
  if(j>0 && (map[i][j-1]=='O' || map[i][j-1]=='X')){
    neighbors.push([i,j-1])
  }
  // console.log('neighbors : ',neighbors)
  return neighbors
}



let map = [['O', 'O', 'O', 'O'],
           ['D', 'O', 'D', 'O'],
           ['O', 'O', 'O', 'O'],
           ['X', 'D', 'D', 'O']]

console.log(shortest_path(map))