  //recursive
  function breadthFirstSearchR(queue,list){
    if(!queue.length){
      return list;
    }

    let currentNode = queue.shift()
    list.push(currentNode.value)
    if(currentNode.left){
      queue.push(currentNode.left)
    }
    if(currentNode.right){
      queue.push(currentNode.right)
    }

    return this.breadthFirstSearchR(queue,list)
  }

//   //iterative
  function breadthFirstSearch(){
    let currentNode = this.root
    let list = []
    let queue = []

    queue.push(currentNode);

    while(queue.length>0){
      currentNode = queue.shift()
      list.push(currentNode.value)
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }

    return list
  }



