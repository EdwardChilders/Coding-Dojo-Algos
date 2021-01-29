let arr = [1,5,10,-2];
let max = arr[0];
let min = arr[0];
let avg = 0;
for (let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max = arr[i];
  }else if(arr[i]<min){
    min = arr[i];
  }
  avg+=arr[i];
}
avg/=arr.length;
console.log("Max is: " + max + " Min is: " + min + " Avg is: " + avg);