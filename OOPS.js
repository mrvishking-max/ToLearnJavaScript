//OOPS==> Class,Object,Constructor,Inheritance,Encapsulation,Polymorphism,Abstraction
//Exceptions==> try,catch,finally,throw
//promise,async,await & fetch(),setTimeout(),setInterval()

// class student{    //class
//     rollNo;
//     name;
//     age;

//     add()     //method
//     {
//         let a=10,b=20;
//         console.log(a+b);
//     }
//     constructor(rollNo,name,age){   //constructor
//         this.rollNo=rollNo;
//         this.name=name;
//         this.age=age;
//     }
//     printDetails(){   //method
//         console.log(this.rollNo+" "+this.name+" "+this.age);
//     }

//     add(a,b){   //method overloading
//         console.log("2nd add method: "+(a+b));
//     }
//     // class Teacher extends student{   //inheritance
        
    
// }
// let obj=new student(1,"Vishwa",21);   //object
// obj.add();
// obj.add(5,10);
// obj.printDetails();




//Promise has data as key and value pairs
//Failed,Sucessfull,Pending


// let ticketbooking = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     if(prize < 800){
//         resolve();
//     }else{
//         reject();
//     }
//     },5000);   
// });


// function BookingUpdate(){
//     let result=ticketbooking(500);
//     console.log(result);
// }
// BookingUpdate();
// ticketbooking.then(()=>{console.log("Ticket Booked Success!!")})
// .catch(()=>{console.log("Booking Failed")})



// console.log("Start");
// setInterval(()=>{
//     console.log("Hello");
// },2000);
// console.log("End");


// function ticketbooking(price) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (price < 800) {
//                 resolve("Ticket booked successfully");
//             } else {
//                 reject("Ticket price too high");
//             }
//         }, 5000);
//     });
// }

// function BookingUpdate() {
//     ticketbooking(5000)
//         .then(result => {
//             console.log(result);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }
// async function BookingUpdate() {
//     let result=await ticketbooking(500);

// BookingUpdate();





 async function dataFetching() {
    let url="https://www.flipkart.com/api/3/page/dynamic/desktop?appName=web&appVersion=1.0.0&device=desktop&extent=100-10000-10000-10000&isSeoPage=true&pageId=search%3Fq%3Dmobile%26sid%3Dtyy%252C4io%252C9k7%26as%3Doff%26as-show%3Doff%26otracker%3DAS_QueryStore_OrganicAutoSuggest_1_0_na_na_ps%26otracker1%3DAS_QueryStore_OrganicAutoSuggest_1_0_na_na_ps%26marketplace%3DFLIPKART%26pincode%3D560001&sort=recency_desc ";
    let result=await fetch(url);
    console.log(result);
}
dataFetching();
