let arr = [0, -1, 2, -3, 4, -5, 6];
let length = arr.length;
for(let i=length-1;i>=0;i--){
  if(arr[i]<0){
    for(let j=i;j<length;j++){
      arr[j] = arr[j+1];
    }
    arr.pop();
    length--;
  }
}
console.log(arr);