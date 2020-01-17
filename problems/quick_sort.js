function quickSort(array, left, right) {
    // console.log('initial array')
    // console.log(array)
    // console.log('pivot')
    // console.log(array[right])
    let pivot = right
    let i = 0
    while (i < pivot) {
        // console.log('inside while: array')
        // console.log(array)
        // console.log('inside while: i')
        // console.log(i)
        // console.log('inside while: pivot')
        // console.log(pivot)
        // console.log('inside while: array[i]')
        // console.log(array[i])
        // console.log('inside while: array[pivot]')
        // console.log(array[pivot])
        if (array[i] > array[pivot]) {
            if (i + 1 === pivot) {
                let temp = array[pivot]
                array[pivot] = array[i]
                array[i] = temp

            }
            else {
                let temp = array[pivot - 1]
                array[pivot - 1] = array[pivot]
                array[pivot] = array[i]
                array[i] = temp
            }

            pivot -= 1
            // console.log('inside while:if: array[i]')
            // console.log(array[i])
            // console.log('inside while:if: array[pivot]')
            // console.log(array[pivot])
        }


        if (array[i] < array[pivot]) {
            i = i + 1
        }
        // console.log('inside while: array: after comparsion')
        // console.log(array)
        // console.log('inside while: i: after comparsion')
        // console.log(i)
        // console.log('inside while: pivot: after comparsion')
        // console.log(pivot)
    }

    // console.log('outside while: array: ')
    // console.log(array)

    if (array.length === 0 || pivot + 1 === right && pivot - 1 === left || pivot === right && pivot - 1 === left || pivot === left && pivot + 1 === right) {
        return array
    }

    let array1 = array.slice(0, pivot)
    let array2 = array.slice(pivot + 1)

    // console.log('array1: ',array1 )
    // console.log('array2: ',array2 )

    return merge(quickSort(array1, 0, array1.length - 1), array[pivot], quickSort(array2, pivot + 1, array2.length - 1))



}

function merge(array1, pivot, array2) {
    // let newArray = array1.concat(pivot)
    // newArray = newArray.concat(array2)
    // // console.log('inside merge: newArray')
    // // console.log(newArray)
    // return newArray


    array1 = array1.concat(pivot).concat(array2)
    // array1 = array1.concat(array2)

    return array1
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);