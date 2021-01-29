let arr = [-3,5,1,3,2,10];
let temp;
let length = Math.floor(arr.length/2);
for (let i=0;i<length;i++){
  temp = arr[i];
  arr[i] = arr[arr.length-1-i];
  arr[arr.length-1-i] = temp;
}
console.log(arr);