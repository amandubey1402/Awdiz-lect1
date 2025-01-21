var num=37;
if(num%2==0){
    console.log(num+" is a even number");
}
else{
    console.log(num+" is a odd number");
}

let age=17;
if(age>=18){
    console.log("you are eligible to vote")
}
else{
    console.log("you are not eligible to vote")
}

let num1=9,num2=8,num3=5;
if(num1>num2&&num1>num3){
    console.log(num1+" is the greatest number")
}
else if(num2>num1&&num2>num3){
    console.log(num2+" is the greatest number")
}
else{
    console.log(num3+" is the greatest number")
}

let year=2020;
if(year%4==0){
    console.log("the year is a leap year")
}
else{
    console.log("the year is not a leap year")
}
let alpha="a";
if(alpha=="A"||alpha=="a"){
    console.log("It is vowels")
}
 else if(alpha=="E"||alpha=="e"){
    console.log("It is vowels")
}
 else if(alpha=="I"||alpha=="i"){
    console.log("It is vowels")
}
 else if(alpha=="O"||alpha=="o"){
    console.log("It is vowels")
}
 else if(alpha=="U"||alpha=="u"){
    console.log("It is vowels")
}
else{
    console.log("It is consonant")
}
let num=4;
if(num>0){
    console.log("it is positive number")
}
if(num<0){
    console.log("it is negative number")
}
if(num==0){
    console.log("it is zero number")
}

let score=69;
if(score>=90){
    console.log("You get a Grade A")
}
else if(score>=80){
    console.log("You get a Grade B")

}
else if(score>=70){
    console.log("You get a Grade C")

}
else{
    console.log("You get a Grade F")

}

let days = 1
switch (days) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("invalid")
        break;
}
let month = 11
switch (days) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("invalid")
        break;
}

let operation = 3
let a=20,b=5
switch (operation) {
    case 1:
        console.log(a+b)
        break;
    case 2:
        console.log(a-b)
        break;
    case 3:
        console.log(a*b)
        break;
    case 4:
        console.log(a/b)
        break;
    default:
        console.log("invalid")
        break;
}