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


}