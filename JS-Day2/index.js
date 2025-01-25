console.log("Number form 1 to 10")
for(let i=0;i<=10;i++){
    console.log(i)
}
console.log("even number from 1 to 20")
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("sum of first 10 natural number")
var count=0
for(let i=1;i<=10;i++){
    count+=i;
}
console.log(count)

console.log("number divisible 5 between 1 to 50");
for(let i=1;i<=50;i++){
    if(i%5==0)
    {
        console.log(i)
    }
}

console.log("fcatorial of given number");
var num=5
for(let i=num-1;i>=1;i--){
    num*=i
}
console.log(num)

console.log("odd number between 1 to 20")
for(let i=1;i<=20;i++){
    if(i%2==1){
        console.log(i)
    }
}

console.log("sum of all even number between i 10 100")
var count=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        count+=i
    }
}

console.log(count)


console.log("fibonacci series")

a=0;
b=1;
for(let i=0;i<=100;i=a+b){
    console.log(i)
    a=b;
    b=i
}

console.log("Multiplication of 5")

for(let i=1;i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`)
}

console.log("Perfect Square")


for(i=1;i<=10;i++){
    console.log((i*i))
}

console.log("number is divisible by 3 and 5 between 1 to 100")
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
    {
        console.log(i)
    }
}
