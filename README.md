# Odin Merge Sort

## An exercice in recursive programming in a constructive way: Creating a merge sort function

In an effort to grasp the complexities of recursive programming, I have made an attempt at creating a merge sort recursive function.

## What is merge sort?

The iddea of merge sort is to split an array into smaller pieces, sort those pieces, and then combine those arrays back together in a sorted order.

This is done by leveraging a recursive approach, making it a great exercise to hammer the practice in.

### How does this work?

Merge sort can be explained somewhat simplified in pseudocode in 3 steps recursively:

if only one number
return number
else
sort the left half of the array( if n > 1)
sort the right half of the array( if n > 1)
merge the two halves together

The goals of splitting the array down to bite sized pieces comparing 2 array items against each other at a time, and merging a new array as each comparison completes, then comparing the new ordered arrays with each other until a final
full sorted array is reached.

The approach is explained in comments in the script ( perhaps too commentated for some taste )

### The main take away of the project is this:

#### What behavior should be recursive, happening again and again

In this case, the act of splitting an array into smaller sub-arrays(left, right)

```
    const mid = Math.floor(array.length / 2)

    let left = array.slice(0, mid)

    let right = array.slice(mid, array.length)
```

#### What base case should be established to stop the recursion?

When we are left with several arrays of 1 item each.

```
    (array.length === 1)
```

Then, sort the individual arrays, pushing the sorted pieces into the final result

```
let merge = []
```

All nicely sorted.

### What did you learn?

The true power of properly planned recursive powers. Though I'm certain I've only graced the surface of the potential of recursive programming, the material provided to me by [the odin project](https://www.theodinproject.com/lessons/javascript-recursion) truly hammered in the main points of finding a recursive solution to a problem.

## Final words

Wrapping my head around recursive programming is a tough one, but immensely rewarding when the things fall into place. I still have bunch to go towards mastering this skill, but atleast now I know how it works, and can have an easier time identifying use cases and implementing the solution.
