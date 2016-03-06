var a=1;
// a is a integer,number，可以运算
var b=0.5;
//b is a float
var c="webdxd";
//c is a string ,不能运算
console.log("this is my first javascript file");
//log 里可以显示你需要的内容
console.log(a);
console.log(b);
console.log(c);
var d="1"
console.log(d);
var arr=[1,'Learn',3,5]
//arr 相同参数归总，定义一项即可
console.log(arr);
console.log(arr[1])
//0 定义参数 ，显示为［］里的1； 1 定义参数，显示［］里的Learn
var myQuote="I "+ arr[1];
//名字定义，头字母小写，第二个单词首字母大写
console.log (myQuote)
a=8;
a = a+b;
//add a to b and put the result to a
console.log(a);

var bool =true;

bool = !true 
//! 反义

var isTrue= !bool;
console.log(isTrue);

arr = [isTrue,a,b,c];

console.log(arr);
a=11;
b=2;
b=a%b
console.log(b);
var book1 = {
	title: "Harry Potter",
	price:29,
	description:"a boy who knowss magic",
	section: ["section1","sec 2","sec 3"]
}

var book2 ={title: "Lord of Rings",
	price:49,
	description:"a story of magie Rings"

}


var book3 ={
	title: "Rings back",
	price:50,
	description:"magic rings back"
}

var bookStore =[book1,book2,book3];
book1.title = "Harry Potter 2"
book1.price += 2;
//increment by a number

book1.price ++;
//increment by 1
console.log(book1);
console.log("Title: "+book1.title);
console.log("Price: "+book1.price);
console.log("description: "+book1.description);

var bookCollection =[book2,book3];

console.log(bookStore,book2,book3);
console.log(bookStore[0].section[0]);

bookStore.push('My Book');
console.log(bookStore);

bookStore = bookStore.slice(0,2);
//slice 1 分割完再显示在bookstore

console.log(bookStore);


console.log(a<=b);

a="1"

console.log(a);
console.log(b);

console.log(a===b);
//==, data type,value相同


var animal  ="bird"

if (animal =="cat"){console.log("meow");
} else if (animal==="pig"){
	consloe.log("xxxx")
}
  else if (animal==="dog") {
	console.log("wuff");
}
else{
	console.log("unknown")
}


switch(animal){
	case "cat":
	console.log("meow");
	break;
	case "dog":
	break;
	console.log("wuff");
	case "pig":
	break;
	console.log ("xxxx");
	break;
	default:
	console.log("unknown");
}

bookStore = [book1,book2,book3];



var a = 10;

while(a >=0){
console.log(a);
a--;
}

function addPrice (store,incre){
	console.log(store);
	for (var i = 0; i < store.length; i++){
store[i].price*=incre;
console.log(store[i]);
 }
 return "Book Price add by " + incre;
}


function addPrice (store,multi){
	console.log(store);
	for (var i = 0; i < store.length; i++){
store[i].price*=multi;
console.log(store[i]);
 }
 return"multi price";
}


console.log(addPrice(bookStore,10));
//console.log(addPrice(bookStore,100));






