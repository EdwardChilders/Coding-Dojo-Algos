let arr = [1,5, 10, 7, -2];
for(let i=0;i<arr.length-1;i++){
  arr[i] = arr[i+1];
}
arr[arr.length-1] = 0;
console.log(arr);