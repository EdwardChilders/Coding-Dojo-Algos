let sum = 0;
for (let i=0; i<5000; i++){
  if(i%2 != 0){
    sum += i;
  }
}
console.log(sum);