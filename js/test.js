function twoSum(arr) {

    var sums = [];

// check each element in array
for (var i = 0; i < arr.length; i++) { 



    // determine if these two elements sum to S
    if (arr[i] + arr[j] === 5) {
      sums.push([arr[i], arr[j]]);
    }

  }

}

// return all pairs of integers that sum to S
console.log(sums)
return sums;

}

twoSum([3, 5, 2, -4, 8, 11], 7);    