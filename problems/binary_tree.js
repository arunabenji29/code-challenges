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
            // console.log('insert node: ',this.root)
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
            // console.log('insert node: ',this.root)
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
      let prevLeft = null
      let prevRight = null  
      console.log('myRoot: ',myRoot)
      

      while(myRoot !== null){
        
        if(value === myRoot.value){
            console.log('value to be deleted is found')
            console.log('the wing which has the value: ', myRoot)
            console.log('prevLeft: the wing which has the value: ', prevLeft)
            console.log('prevRight: the wing which has the value: ', prevRight)
            return myRoot
        }
        else if((value < myRoot.value)) {
            prevLeft = myRoot
            myRoot = myRoot.left
        }
        else if((value > myRoot.value)) {
            prevRight = myRoot
            myRoot = myRoot.right
        }        
        
      }
                
    }
    else{
      return 'value not found'
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

// binaryTree.lookup(20)

binaryTree.remove(20)