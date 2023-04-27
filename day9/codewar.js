// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // total
    let total = 0
    // add up all the array
    for(let i =0; i<classPoints.length; i++) {
        total += classPoints[i]
    }
    // compare
    return yourPoints > total/classPoints.length
    // return result
    
  }

//   console.log(betterThanAverage([2, 3], 5)) //true
//   console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) //true
//   console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) //false

function(accum(s) {
    // capitzlia the first letter
    // split
    //times it by the length
    // combine them and return as one word 
})
 console.log(accum("ZpglnRxqenU"))    
 
//  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("abcd"))
// "A-Bb-Ccc-Dddd"
console.log(accum("cwAt"))
//  -> "C-Ww-Aaa-Tttt"