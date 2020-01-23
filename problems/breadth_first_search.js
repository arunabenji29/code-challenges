class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinaryTreeNode {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    else {

      let root = this.root

      while (root !== null) {
        if (value < root.value) {
          // console.log('5:here')
          if (root.left) {
            root = root.left
            // console.log('1:here')
          }
          else {
            root.left = newNode
            // console.log('2:here')
            return this
          }
        }
        else {
          // console.log('6:here')
          if (root.right) {
            root = root.right
            // console.log('3:here')
          }
          else {
            root.right = newNode
            // console.log('4:here')
            return this
          }
        }
      }

    }

  }

  lookup(value) {
    if (value === this.root.value) {
      console.log(this.root.value)
      return this.root
    }
    else {
      if (this.root) {
        let root = this.root
        while (root !== null) {
          if (value === root.value) {
            return root
          }
          if (value < root.value) {
            root = root.left

          }
          else {
            root = root.right

          }
        }

      }
      else {
        return 'tree empty'
      }
    }
    return 'item not found'
  }

  remove(value) {
    let found = this.lookup(value)
    console.log('found :',found)
    if(found.value === value){
      console.log('4:here')
      let myRoot = this.root
      let myLeft = null
      let myRight = null
      let myValue = null

      console.log('myRoot: ',myRoot)
      

      while(myRoot !== null){
        console.log('myRoot left: ',myRoot.left)
        console.log('myRoot right: ',myRoot.right)
        if(myRoot.left){
          if(myRoot.left.value === value){
            // myRoot = myRoot.left
            break
          }
          myRoot = myRoot.left
        }
        if(myRoot.right){
          if(myRoot.right.value === value){
            // myRoot = myRoot.right
            break
          }
          myRoot = myRoot.right
        }
      }
      
    }
    else{
      return 'value not found'
    }
  }

  traverse(root) {

    if (this.root) {

      if (this.root.left) {
        return this.traverse(this.root.left)
      }
      else {
        return
      }
      if (this.root.right) {
        return this.traverse(this.root.right)
      }
      else {
        return
      }
      // return this.root.value
    }

  }
}

const binaryTree = new BinaryTreeNode()

binaryTree.insert(9)
binaryTree.insert(4)
binaryTree.insert(6)
binaryTree.insert(20)
binaryTree.insert(170)
binaryTree.insert(15)
binaryTree.insert(1)
  
  
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


  binaryTree.breadthFirstSearchR([binaryTree.root],[])  


