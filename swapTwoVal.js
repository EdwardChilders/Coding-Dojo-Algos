let arr = [2, 3, 5, 7, 6];
let temp = arr[0];
arr[0] = arr[arr.length-1];
arr[arr.length-1] = temp;
console.log(arr);