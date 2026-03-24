
//let n = 10;
//console.log(n);

////OBJECTS////

/*let a=10;
a="java script";
console.log(a);


let arr=[1,2,3,4,5];
arr.push("vishwa");
console.log(arr);
/*/



/*let obj = {
    name: "vishwa",
    age: 22
};

console.log(obj);/*/

//let arr=[2,4,10,25,true,["red","blue","green"],22.5];
  //  console.log(arr[5]);
    ///console.log(arr[5][1]);

//!!!!!!!!!!!Object Creation!!!!!!!!!!!!///////
/*let obj={
    name:"vishwa",
    age:22,
    hobbies:["coding","gaming","music"],
    address:{
        city:"panruti",
        state:"Tamilnadu"
    }
};
console.log(obj);
console.log(obj.hobbies[1]);
console.log(obj.address.city);
/*/

//////!!!!!!!!!!Object Iteration!!!!!!!!!!//////
/*let obj={
    name:"vishwa",
    age:22,
    city:"panruti",
    state:"Tamilnadu",
    Number:1234567890
};
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
/*/


//!!!!!!!!!!Object Destructuring!!!!!!!!!!//////
/*let obj={
    Id:1,
    name:"vishwa",
    location:"panruti",
    number:123,
    arr:["red","blue","green"],
};
obj={...obj,number:456};
console.log(obj);
/*/

//!!!!!!!!!!Rest Parameters!!!!!!!!!!//////

// function add(a,...b){
//     console.log(a);
//     console.log(b);
// }   
// add(1,2,3,4,5);



// let obj = {
//     name: "Vishwa",
//     location1: "Tamil Nadu"
    
// };

// let a = obj;
// let nameVar = obj.name;   
// let { location1 } = obj;

// console.log(nameVar);
// console.log(a);
// console.log(location1);

////!!!shallow copy!!!////
// let num={...obj};
// console.log(num);
// num.location1="Cuddalore";
// console.log(num);
// console.log(obj);

  ///////!!deep copy!!//////

// let min=obj;    //deep copy
// console.log(min);
// min.location1="Chennai";   //
// console.log(min);
// console.log(obj);



////------DOM->Document Object Model==> HTML page------////

//   1)Accessing Elements and modify the elements
//   2)Changes style and handling events
//   3)GetElementById
//   4)GetElementByClassName
//   5)GetElementByTagName
//   6)QuerySelector
//   7)QuerySelectorAll



// document.getElementById('one').style.color="red";
// document.getElementById('one').style.fontSize="30px";
// document.getElementsByClassName('two')[0].style.color="blue";
// document.getElementsByTagName('h3')[0].innerHTML="green";
// document.querySelector('p').style.border="2px solid black";

// let dum=document.createElement('h1')
// dum.innerText='Vishhhhhhh';
// document.body.appendChild(dum);



// let btn=document.querySelector('button');
// // btn.addEventListener('click',clickMe);

// // function clickMe(){
// //     document.getElementById('one').style.color="red";
// // }


// btn.addEventListener("click",()=>{
//     document.getElementById('one').style.color="red";
// });



