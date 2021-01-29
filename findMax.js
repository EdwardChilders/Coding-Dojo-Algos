let arr = [1,5,2,7,3,9,4,46,3,234,45,7,45];
let max = arr[0];
for (let i=1; i<arr.length; i++){
  if(arr[i]>max){
    max = arr[i];
  }
}
console.log(max);