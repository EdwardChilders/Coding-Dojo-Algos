let arr = [1, 3, 5, 7];
let x = 10;
let y = 2;
let length = arr.length;
if(y == length){
  arr.push(x);
}else{
  arr.push(arr[length-1])
  for(let i=length-1;i>y;i--){
    arr[i] = arr[i-1];
  }
  arr[y] = x;
}
console.log(arr);