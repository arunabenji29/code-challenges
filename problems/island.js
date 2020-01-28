function numIslands(grid) {
    let result = [];
    
    for(let x=0;x<grid.length;x++){
        for(let y=0;y<grid[0].length;y++){
            if(grid[x][y]===0){
                continue;
            }
            else{
                let lengtha = traverse_island(x,y,grid);
                console.log(`lengtha: ${lengtha}`)
                result.push(lengtha)
                console.log(`result: ${result}`)
            }
        }
    }
    console.log('result: ',result)
    return result.length
    
};

function traverse_island(x,y,grid){
    let river_size = 0
    let queue = [[x,y]]
    
    
    while(queue.length>0){
        let current_node = queue.pop()
        console.log('current node: ', current_node)
        let a = current_node[0]
        let b = current_node[1]
        
        if(grid[a][b] === 0){
            continue;
        }
        
        let unvisited_valid_nodes = check_neighbors(a,b,grid)
        
        
        console.log('unvisited valid nodes: ', unvisited_valid_nodes)
        
        for (let n in unvisited_valid_nodes){
          console.log('n: ',unvisited_valid_nodes[n])
            queue.push(unvisited_valid_nodes[n])
        }

        
        grid[a][b] = 0
        console.log('grid: ', grid)
        river_size += 1
        
        
        
    }
    console.log(`river size: ${river_size}`)
    return river_size
}

function check_neighbors(x,y,grid){
    let neighbors_found = []
    // console.log('x: ', x,' y: ', y )
    
    if(x<grid.length-1 && grid[x+1][y] == 1){
        console.log('check neighbors: grid[x+1][y] - ',grid[x+1][y])
        neighbors_found.push([x+1,y])
    }
    if(y<grid[0].length-1 && grid[x][y+1]== 1){
        console.log('check neighbors: grid[x][y+1] - ',grid[x][y+1])
        neighbors_found.push([x,y+1])
    }
    if(x>0 && grid[x-1][y]==1){
      neighbors_found.push([x-1,y])
    }
    if(y >0 && grid[x][y-1]==1){
      neighbors_found.push([x,y-1])
    }
    console.log('neighbors found: ', neighbors_found)
    return neighbors_found
}

// def river_sizes(map):
//   # iterate through each row and check to see if its a 0 or 1 and see if it's related
//   # to a position in the next row 
//     # we see a 0 
//       # continue looping 
//     # we see a 1 
//       # have another array that keeps track of the position of where the 1 is in the 
//       # input matrix 
//       # this tells us we're looking at a part of a river 
// ​
//   # how do we record our progress? 
//   # what data structure do I need to use here? 
//   # hash tables? 
//   # how do keep track of which positions we've visited? 
//     # 1. once we've gone over a 1, swap it to a 0 so that in future iterations
//     # we don't count it again 
//     # 2. keep another matrix of the same size that has true and false booleans keeping 
//     # track of if we've visited this position already 
//   result = []
//   # loop through each row 
//   for i in range(len(map)):
//     # loop through each column
//     for j in range(len(map[0])):
//       # check if this position is one we've visited already/one we don't care about
//       if map[i][j] == 0: 
//         continue 
//       # otherwise, it is a position we care about 
//       else:
//         # kick off the process of traversing the river and counting its length 
//         length = traverse_river(i, j, map)
//         # add this length to our result array 
//         result.append(length)
//   # return our result array 
//   return result 
// ​
// # does the work of counting the length of a river 
// # input: position of a 1 in our matrix and the matrix itself 
// # checks in all valid horizontal and vertical directions to see if 
// # there are any 1s in those directions 
// # if we run into any other 1s, continue this process with those 1s, keeping track 
// # of the length as we build up the river 
// # returns the length of the river 
// # perform the traversal using BFS/DFS  
// def traverse_river(i, j, map):
//   river_size = 0
//   # keep a list of valid neighbors: this holds the positions of other 1s that are 
//   # adjacent to this position 
//   valid_neighbors = [[i, j]]
// ​
//   while len(valid_neighbors) > 0: 
//     current_node = valid_neighbors.pop() 
//     # check if the popped off node has been visited before 
//     x = current_node[0] 
//     y = current_node[1] 
// ​
//     if map[x][y] == 0:
//       continue 
//     # check our current node to see if there are any valid neighbors in the 4 cardinal 
//     # directions 
//     unvisited_valid_nodes = check_neighbors(x, y, map)
//     # valid_neighbors.concat(unvisited_valid_nodes)
//     for n in unvisited_valid_nodes:
//       valid_neighbors.append(n)
//     # toggle our current position to 0 so that it doesn't get visited again 
//     map[x][y] = 0 
//     river_size += 1
// ​
//   return river_size 
// ​
// # checks right and down directions 
// # any direction that has a 1 is added to an array 
// def check_neighbors(x, y, map):
//   valid_neighbors = []
// ​
//   # we actually only need to check to the right and down 
//   # check the spot to the right our position 
//   if x < len(map) - 1 and map[x+1][y] == 1:
//     valid_neighbors.append([x+1, y])
//   # check down 
//   if y < len(map[0]) - 1 and map[x][y+1] == 1:
//     valid_neighbors.append([x, y+1])
// ​
//   return valid_neighbors
// ​
// ​
// m = [
//   [1, 0, 0, 1, 0],  
//   [1, 0, 1, 0, 0],  
//   [0, 0, 1, 0, 1],  
//   [1, 0, 1, 0, 1],  
//   [1, 0, 1, 1, 0],  
// ]
// ​
// print(river_sizes(m))
// ​
// n = [
//   [1, 1],
//   [1, 0]
// ]
// ​
// print(river_sizes(n))