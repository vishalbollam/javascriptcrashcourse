console.log('hello ');
//alert('yoyo');
// variables 
var b = 'smoothie';
console.log(b);

var somenumber = '45';
console.log(somenumber);
// adding java script to the HTMl page *****
//document.getElementById('sometext').innerHTML = 'Hey there'; 
 //var age = prompt("what is your age?");
//document.getElementById('sometext').innerHTML = age;



//dealing with numbers in java script 

var num1=25;
num1++; // incrementing the value by 1 
console.log(num1);
num1--;//decrementing the value by 1
console.log(num1);
 // dividing ,multiply*,% remainder 
 console.log(num1%6);
 // increment ,decrement by what ever value u want 
 num1 +=25;
 console.log(num1);

 //  creating a function
  function fun(){
      console.log('what is your name ?')
  }

// calling a function 
fun();


// create a function that takes in your name and says hello followed by your name 
/*function greetings (){
    var name = prompt('what is your name?')
    console.log('hello'+' '+ name );// string concatenation 
}
greetings(); // calling a  function 
*/

//adding two numbers in a function 

function add( num1, num2){
    var result=num1+num2;
    console.log(result);

}
add(10,25);
 


// while loops 
/*var num=0;
console.log('Natural numbers are as follows');
while (num<100){
    num +=1;
    
    console.log( num);
}*/
// for loops 
 /*for (let num=0; num<=100;num++){
    console.log(num);
 }*/

// common methods of strings in java script 

/*console.log("play with strings ");
let fruit= 'bananna' ;
let moreFruits= 'bananna\napple';

console.log(fruit.length);
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.slice(2,6));
console.log(fruit.split(''));
console.log(fruit.split(','));
console.log(fruit.charAt(4));
console.log(fruit.indexOf('b'));
console.log(fruit.replace('na','13'));
console.log(fruit[4]);*/



// arrays in java script 

 let  fruits=["bananna",'apple',"orange",'pineapples']
 fruits=new Array("bananna",'apple',"orange",'pineapples')

   console.log(fruits[2])
   fruits[2]="pear"
   console.log(fruits);
for (i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// array common methods 

console.log(fruits);

console.log('tostring',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits) // removes last item from array 
console.log(fruits.push('guava'),fruits);// appends 
console.log(fruits[4]);
fruits[fruits.length]='new fruit';
console.log(fruits);
fruits.shift();//removes first elemnt from array 
console.log(fruits);
fruits.unshift('kiwi');// adds first element to an array
console.log(fruits);


let vegetables= ['asparagus','brocoli','carrot','peas','cucumber']
let allgroceries=(fruits.concat(vegetables)); //combines an array
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
  // sorting a regular array 
  console.log(allgroceries.sort()); // sorts in alphabetical order 
  //when sorting an array of numbers we have to pass on a filter **********
  let someNumbers=[5,10,2,25,3,255,1,2,5,334,321,2];
   console.log(someNumbers.sort(function(a,b){return a-b}));// this will sort in ascending order 
   console.log(someNumbers.sort(function(a,b){return b-a}));//sort in descending order 
 // adding elements in to an array 
   let emptyArray = new Array();
   for (let num=0;num<10;num++){
       emptyArray.push(num);

   }
   console.log(emptyArray);
   console.log(emptyArray.reverse());



   // objects in java scripts 
   


































 


