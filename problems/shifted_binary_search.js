const binaryArray = [6, 10, 13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49, 2, 5 ]

function findItem(binaryArray) {

    let left = binaryArray.slice(0, Math.floor(binaryArray.length / 2));
    let right = binaryArray.slice(Math.floor(binaryArray.length / 2));
    console.log('main:left: ', left)
    console.log('main:right: ', right)

    if (left.length > 0 || right.length > 0) {
        
        if (left[0] <= 33 && left[left.length - 1] >= 33) {
            console.log(left)
            console.log('1:here')
            if (left[0] === 33) {
                console.log('1:left:first element ', left[0])
                return 'target found'
            }
            else if (left[left.length - 1] === 33) {
                console.log('1:left:last element ', left[left.length - 1])
                return 'target found'
            }
            return findItem(left)
        }
        else if (right[0] <= 33 && right[right.length - 1] >= 33) {
            console.log(right)
            console.log('2:here')
            if (right[0] === 33) {
                return 'target found'
            }
            else if (right[right.length - 1] === 33) {
                return 'target found'
            }
            return findItem(right)
        }
        else if (left[left.length - 1] < 33 && right[0] < 33 && right[right.length - 1] < right[0]) {
            console.log('5:here')
            return findItem(right)
        }
        else if (left[0] <= 33 && right[0] < 33) {
            console.log('3:here')
            return findItem(left)
        }
        else if (right[0] >= 33) {
            console.log('4:here')
            return findItem(right)
        }

    }
    else {
        return 'target not found'
    }

}

console.log(findItem(binaryArray))