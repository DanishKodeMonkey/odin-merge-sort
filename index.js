/* // warmup -
// Using iteration, write a function fibs that takes a number and returns
// an array containing that many numbers of the sFibonacci sequence
// using an example input of 8, this should reutnr an array of
// [0, 1, 1, 2, 3, 5, 8, 13]

// Then write another function fibsRec solving the same problem recursively.

function fibs(num) {
	let a = 1
	let b = 1
	let arr = [0, 1, 1]
	for (let i = 3; i <= num; i++) {
		let c = a + b
		arr.push(c)
		a = b
		b = c
	}
	return arr
}

console.log(fibs(8))

function fibsRec(num) {
    if(num <= 1){
        return num
    }
    return fibsRec(num - 1) + fibsRec(num - 2)
}

function fibonacci(num){
    let arr = []
    for (let i = 0; i < num; i++){
        arr.push(fibsRec(i))
    }
    return arr
}

console.log(fibonacci(8)) */

// merge sort assignment

function mergeSort(array) {
	// Following the recursive approach, we must establish a base case
	// which will eventually stop the recursion.
	//if the length of the array is 1, then there is nothing more to split
	// and we can compare/merge
	if (array.length === 1) return array

	// Now, if the array is bigger than 1, establish a mid point by splitting
	// the array in 2.
	const mid = Math.floor(array.length / 2)

	// Establish a left and right array to compare against

	// left side will be the slice of the array starting at index 0,
	// to the mid point mid.
	let left = array.slice(0, mid)

	// right side array will be the slice of the array, starting at
	// the mid point mid, and to the remaining length of the array.
	let right = array.slice(mid, array.length)

	// Repeat this as many times as needed until we have
	// arrays of 1 item.
	// Step 1, split left side array, recursively.
	left = mergeSort(left)

	// step 2, split the right side array, recursively.
	right = mergeSort(right)

	// this keeps going unti lwe are left with arrays of 1 items each.

	// step 3, merge the arrays together,
	// sorting each pair of single item arrays.
	return merge(left, right)
}

function merge(left, right) {
	// Establish an empty array for the finished sort.
	const merged = []

	// Keep sorting as long as left and right arrays have items.
	while (left.length > 0 && right.length > 0) {
		// is left arrays 1st index item < right arrays 1st index item?
		if (left[0] < right[0]) {
			// left is smaller? add left[0] to array.
			merged.push(left[0])
			// remove left[0] from left array
			left.shift()
		} else {
			// left is NOT smaller? add right[0] to array.
			merged.push(right[0])
			// remove right[0] from right array
			right.shift()
		}
	} // this continues as long as left.length > 0 AND right.length > 0
	// to account for single item arrays that were not split
	// (uneven number in original array, e.g 7)
	// we sort remaining right and left arrays singularly,
	// since they are the last numbers, they are the biggest.
	while (right.length > 0) {
		merged.push(right[0])
		right.shift()
	}
	while (left.length > 0) {
		merged.push(left[0])
		left.shift()
	}
	// finally, return the finished array
	return merged
}

// test case:
arr = [2, 3, 7, 1, 6, 5, 8, 20, 10, 9, 4]
console.log(mergeSort(arr))
