//Basics of programming
//values
//alert ('Hello World')
console.log(1031)
console.log(123+234-234*3/4)
console.log(2**8)
console.log('Hello World❤️🔥'+'I am Asutosh Barik')
console.log('Hello World❤️🔥'-'I am Asutosh Barik')
console.log('Hello World❤️🔥'*'I am Asutosh Barik')
console.log('Hello World❤️🔥'/'I am Asutosh Barik')
//Semi-colon is given only when we write multiple statements in a single line.Eg is given below->
console.log('Hello guys');console.log('What ya doin')
//Variables
let birthday=19
birthday=19-9
console.log("My birthday is on",birthday)
age=23
console.log("I am",age,"years old.")
//const variable value can't be changed
const variable1=10
console.log(variable1)
let name
name="Asutosh"
console.log(name)
//In JS we dont need to declare data type like int/str/etc. bcoz JS will automatically detect it.
//Conditional statements
//Boolean(true & false)
//comparison operator
console.log(10>5)
console.log(10<5)
console.log(10==5)
console.log(10==10)
console.log(10<10)
console.log(10<=10)
console.log(10>10)
console.log(10>=10)
const a=10
const b='10'
console.log(a==b)
console.log(a===b)
// == represents equal to sign.Checks only value.
// === represents  equal to sign.Checks both value as well as type of data.
console.log(a!=b)
//  != represents not equal to sign.Checks only value.
console.log(a!==b)
// !== represents not  equal to sign.Checks both value as well as type of data.
if (true){
    console.log('Rocket🚀')
}
if (false){
    console.log('Rocket🚀')
}
//No output for false.
if (10>5){
    console.log('Rocket🚀')
}
if (10<5){
    console.log('Rocket🚀')
}
//No output for false.i.e 10<5
//if else
const Thanos='no-Snap'
if (Thanos=='Snap'){
    console.log('We are going to die.')
} else {
    console.log('We are going to live.')
}
//Taking input from user
const answer=prompt('What is your name?')
if (answer=='Asutosh'){
    console.log('Hi BOSS')
} else if (answer=='Sibun'){
    console.log('Hey there')
} else if(answer=='AB'){
    console.log('Hey Boy')
} else{
    console.log(answer=='Hi')
}
//switch case
//Everything coming after a true condition will be printed,to stop this we use break.
//Using break exits the Switch function after a true condition.
const Your_age=prompt('How old are you?')
switch (Your_age){
    case '10':{
        console.log('Wrong')
        break
    }
    case '15':{
        console.log('wrong hai')
        break
    }
    case '20':{
        console.log('Correct hai boss')
        break
    }
    default :{
        title.innerText='🚀✌️'
    }
}
//Creating functions in JS(latest way i.e ES6)
const myfunction=(parameter)=>{
    console.log(parameter)
}
myfunction('argument')
myfunction('Hello')
myfunction('What')
//Mathematical functions
const Math=(n1,n2)=>{
    console.log('Addition',n1+n2)
    console.log('Substraction',n1-n2)
    console.log('Multiplication',n1*n2)
    console.log('Exponential',n1**n2)
    console.log('Division',n1/n2)
    return n1+n2
}
addition=Math(2,10)
//return
console.log(addition)
//A different way to  create a function(old way)
function type(){
    console.log('Hello',type)
}
//Loops-for loop,while loop,do while loop
//for loop
for(let i=0;i<10;i=i+1){
    console.log("Hello world",i)
}
//i++ is same as i=i+1
//if there is true instead of i<10,an infinite loop will be created.
//if there is i+1 instead of i=i+1,an infinite loop will be created.
//loop stops when a false case occurs.
let i=0
while(i<10){
    console.log(i)
    i++
}
//If we remove i++ line,we will get an infinite loop.
//If we put true instead of i<10,we will get an infinite loop.
let j=0
while(j<10){
    console.log(j,j<10)
    j++
}
//do while loop
let k=16
do{
    console.log(k,k<10)
    k++
}while (k<10)
//Even if condition is false,do while loop executes once but for and while does not execute anything.
//QUESTION-Write a statement to find the largest of five numbers. Display an alert box to show the result.
o=-5;
p=-2;
c=-6;
d= 10;
f=-1;
if (o>p && o>c && o>d && o>f)
{
console.log(o)
alert(o)
}
else if (p>o && p>c && p>d && p>f)
{
console.log(p)
alert(p)
}
else if (c>o && c>p && c>d && c>f)
{
console.log(c)
alert(c)
}
else if (d>o && d>c && d>p && d>f)
{
console.log(d)
alert(d)
}
else
{
console.log(f)
alert(f)
}
// Object,curly bracket is used
const z={
    x:10,
    y:'Hello',
}
console.log(z)
console.log(z.y)
const person={
    name:'John',
    age:30,
    weight:88.6,
}
console.log(person)
console.log(person,name)
//Array-collection of values,square bracket is used
//index number starts from 0 and not 1.
const arr=[1,2,3,4,5]
console.log(arr[0])
console.log(arr[3])
console.log(arr[4])
//DOM manipulation
//DOM manipulation-modifying HTML from JS.
//Document is object
console.log(document)
const obj={
    naam:'Asutosh Barik',
    sum:(s,i)=>{
        return s + i
    },
}
console.log(obj.naam)
const result=obj.sum(2,3)
console.log(result)
//DOM has 2 parts-
//1)grab the element that we want to modify
const flash1=document.getElementById('flash')
console.log(flash1)
flash1.style.backgroundColor='red'
flash1.style.color='blue'
const button1=document.getElementById('button')
button1.style.color='blue'
button1.style.backgroundColor='red'
const paragraph1=document.getElementById('paragraph')
paragraph1.style.backgroundColor='cyan'

