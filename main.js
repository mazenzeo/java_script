// window.alert("hello this is window");//عشان احط دساله اول ما اخش علي الموقع
console.log("hello this is log");  //عشان احط رساله في الكونسول 
console.error("Eror 300") ; //عشان اعمل ايرور
console.table(["mazen","ahmed"])//عشان اعمل جدول في الكونسول
console.log("they but from %c i will","color:red; font-size:50px;")//دي عشان الل،ن الخطوط واعلمل استايل
// المتغير
var My_Name = "mazen";
console.log("hello "+ My_Name );
console.log(`hello ${My_Name} `);
console.log(typeof "mazen");
console.log(typeof "500");
console.log(typeof 500);
console.log(typeof "500.49");
console.log(typeof ["mazen","ahmed"]);
console.log(typeof {name:"mazen", age:19 ,contry :"eg" })
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined) //مش موجود
hello.innerHTML = "AHMED"; //عشاتن اغير اللي موجود في الديف

//(var,let,const) // الفار بيظهر في الويندو الباقي بيظهر علي الجلوبال  + الفار مش بيعملي ايرور لكن الباقي اه 

console.log("mazsen\
\
\
ws")
console.log("mazen\nzezo\nmazo")

let w = "mazen love ";
let eg = "java script";

document.write(w + " " + eg) //العلامتين دول اللي في النص عشان اعنل مسافه من الكلمه 
console.log(w,eg) //دي عشان اضيفها ف الكونسول عادي

let nam1e = "mezo"


let q = `
    <div>
        <div class="mazen">
            <p>hello ${nam1e}</p>
        </div>
    </div>

`
;
document.write(q);

let num = 1;
num++;

console.log(+100)
console.log(+"-100")
console.log(-100)
console.log(-"+100")

/*
  Challenge 1
*/

let y = 10;
let b = "20";
let c = 80;

console.log(++y + +b++ + +c++ - +y++);
console.log(++y + -b + +c++ - -y++ + +y);
console.log(--c + +b + --y * +b++ - +b * y + --y - +true);
/////////////////////////////////////////////////
/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(); // 2000
console.log(); // 173

//////////////////////////////////////////////
console.log(Number.MAX_VALUE)//ةا اخد رقم في اللغه
console.log(Number.MAX_SAFE_INTEGER)//الرقم الامني للغه
console.log(Number("100"))// دي بتحولو الي 
console.log(parseFloat(100.9393))//دا بيظهرالكسور 
console.log(parseInt(100.9393))//دي بتظهر الدقم من غير كسور
console.log(Boolean(true))
console.log((100).toString())//كدا حولهالي لاسترينج
console.log(1000.232.toFixed(3))//كدا انا بقوله هاتلي ٣ ارقام عشرية 
console.log(Number.isInteger(19.2))//دي انا بقوله هل رقم ام لا
console.log(Number.isNaN("osama"/ 100))//كدا مش هيطلع حاجه
console.log(Math.random(9))
console.log(Math.round(9.3))//بتقربلي الرقم شويا 
console.log(Math.min(20,23,34,45,56,57,8,767))
console.log(Math.max(20,23,34,45,56,57,8,767))
console.log(Math.pow(3,3))//اس 
console.log(Math.floor(2.923))//دا بالكسور بتاعته عاليه هيخليها الرقم زي ما هو 
console.log(Math.trunc(2.9))//دا عشان يشلي الكسور خالص
console.log(Math.ceil(2.2))//كدا انا بقرب الرقم هيخلهولي ٣
let aew  = "   mazenzezo  ";
console.log(aew[3])//دا عشان الاندكس 
console.log(aew.charAt(3))//دي عشان الاندكس برضه  
console.log(aew.length)
console.log(aew.toLowerCase())//ودي عشان اسمول 
console.log(aew.toLocaleUpperCase())//دي عشان الكابتل 
console.log(aew.trim())//دي عشان يشيل المسافات 
console.log(aew.trim().charAt(2).toUpperCase())
console.log(aew.indexOf("z"))//دي عشان اعرف الحرف دا دقم كام
console.log(aew.lastIndexOf("z"))//دا بيحبلي اخر حرف من هناك 
console.log(aew.slice(0,7))//دا عشان احدد من الكلمه دي للكمله دي
console.log(aew.split(" ",3))// عشان اقصقص الكلام
console.log(aew.repeat(9))//عشان اكررها 9 مرات 
////////////////////////////////////////////////////////////////
let hos = "there will some but i love too java script";
console.log(hos.substring(0,4))
console.log(hos.startsWith("will",6))//دا بيبدا ب اي 
console.log(hos.endsWith("t"))//دا بينتهي باي 
console.log(hos.includes("some"))//دي موجود و لا لا
console.log(hos.charAt(3).toUpperCase())
/////////////////////////////////////////////////////////////////
console.log(10 == "10" || 20 > 90)
console.log(10 == "10" && 20 > 10)
/////////////////////////////////////////////////////////////////
let ah = true;
let ah2= 22;
let ah3= "mazen";

if (ah!=true){
  ah2-=2;

}
else if (ah==false) {
  ah2 -= 10
}
  if (ah3=="mazen") {
    ah2 +=44

  }

else {
  ah2 +=99 
}

console.log(ah2)
///////////////////////////////////////
let price = null;
console.log(`hello this is mazen ${price || 200}`)
//دي عشان لو انا مش حاطط سعر وهعمل النل 
////////////////////////////////////////////

let this_case = 12;

switch (this_case) {
  case 0:
    console.log('sunday')
  break;
  case 1:
    console.log("monday");
  case 2:
  break;
  case 3:
    console.log("tusday");
  default:
    console.log("no finde")
  break;
    
} 
/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

/*
  If Challenge
*/
let holday = 0;
let money = 0;

switch (holday) {
  case 0 :
    money = 8000;
    console.log(`this salary ${money}`)
    break;
}

let myFrinds = ["ahmed","mona","mazen",["lola","ali"]]

console.log(myFrinds[0])
console.log(myFrinds[3])

myFrinds[1]= "afaf"
console.log(myFrinds)

let mon = 0;
let jop = "developer";

switch (jop){
  case "developer":
    mon=400;
    console.log(`hello this is money jop ${mon}$ ${jop}`)
  break;
  default:
    console.log("no find")

}

let this_frinde = ["ahemd","mazen","lakjf"]

this_frinde[this_frinde.length ] = "zoz" 
this_frinde[this_frinde.length ] = 2 // دي عشان اخلي الارري ٢ 
console.log(this_frinde)
console.log(`////////////////////////////////`)
this_frinde.shift()//دي بتشيل الاسم ولو عايز تخزنها في متغيد خزنها
console.log(this_frinde)
this_frinde.unshift("one","tow")//دا عشان يضيف ا لسم ف الاول 
console.log(this_frinde)
this_frinde.push("last")//بيحطلي الاسم اخر حاجه 
console.log(this_frinde)
console.log(`////////////////////////////////`)
console.log(this_frinde.indexOf("mazen",4))
console.log(this_frinde.lastIndexOf("mazen"))
console.log(this_frinde.includes("mazen"))//هل ماذن موجود ولا لا

if (this_frinde.indexOf("mazen")===3){
  console.log("yes")

}
else {
  console.log ("no")
}

let sorting = [1,3,45,6,"2","24",2000,"mazen"]
console.log(sorting.reverse())//دي عشان يجبلي الحاجات بالعكس
console.log(sorting.sort())//دي عشان يرتبهم بطريقه السورت
console.log(sorting.sort().reverse())
console.log(sorting.slice(1,3))


let sortin = [1,3,45,6,"2","24",2000,"mazen"]
sortin.splice(0,1,"ahemd",'zeo')//دي عشان امسح اول حاجه واضيف  مكانهم الاسمين دول
console.log(sortin)
/////////////////////////////////////////////////////////////////

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];
let all_frinds = myFriends.concat(myNewFriends)//عشان احط المصفوفه دي ع دي
console.log(all_frinds)
console.log(all_frinds.join("$"))//دا عشان احط فاصل مابين كل اسم
console.log(all_frinds.pop())//مسح اخرحاجه 
////////////////////////////////////////////////


for (let i = 0 ; i < 10 ;i++) {
  console.log(i)
}




let myFriends2 = [1, 2, 'mazen', 'zoz', 2, 3, 'sayed'];

let i2 = []
for (let i = 0 ; i < myFriends2.length ; i++  ) {
  if (typeof myFriends2[i] === "string" ){
    i2.push(myFriends2[i])
  }
}
console.log(i2)





/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let m = 0 ; m < products.length ; m++){
  console.log("#".repeat(15))
  console.log(`# ${products[m]}`)
console.log("color :")
  for (let c = 0 ; c < colors.length ; c++){
    console.log(` > ${colors[c]} <`)
  }
console.log("models:")
  for (let m = 0 ; m < models.length ; m++) {
    console.log(models[m])
  }
}



///////// break //////////////////

let products3 = ["Keyboard", "Mouse" ,29, "Pen", "Pad", "Monitor" , 120];

let colors3 = ["Red", "Green", "Black"];

for (let p3 = 0 ; p3 < products3.length ; p3++ ) {
    if (products3[p3] === "Mouse") {
      break;
  
    }
    console.log(products3[p3])
}
/////////////////////////////////////


/////// main loop /////
mainloop: for (let p3 = 0 ; p3 < products3.length ; p3++ ) {

  console.log(products3[p3])

  nuajkfloop: for (let c3 = 0 ; c3 < colors3.length ; c3++){
    console.log(colors3[c3])


    if (colors3[c3] === "Green") {
      break mainloop;
  
    }
    


  }

  
}
///////////////////Practice///////////////////
let products4 = ["Keyboard", "Mouse" , "Pen", "Pad", "Monitor" , 120];

let colors4 = ["Red", "Green", "Black"];

let showCount = 5;

document.write(`<h1>show ${showCount} products </h1>`)

for (let p4 = 0 ; p4 < showCount ; p4++) {
  document.write(`<div>`)
  document.write(`<h2> - [${p4 + 1}] ${products4[p4]} </h2>`)
  for (let c4 = 0 ; c4 < colors4.length ; c4++ ) {
    document.write(`<p> - ${colors4[c4]} </p>`)
  }
  document.write(`<p> ${colors4.join(" | ")} </p>`)
  document.write(`</div>`)

}

// ////////////////////////////////////////////////
let products5 = ["Keyboard", "Mouse" , "Pen", "Pad", "Monitor" , 120];
let index = 0 ;

while (index < products5.length) {
  console.log(products5[index])


  index++;

}
//////////////////////////////////////////////////////
let o2 = 0;
do {
  console.log(o2)
  o2++
}while(false);
console.log(o2)
////////////////////////////////////////////////////////
document.write("#".repeat(50));
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
let myEmployees = ["Amgad", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia" ,"Ajskjs"]
  X = 0,
  k = 0;

for (let m2 = 0 ; m2 < myAdmins.length; m2++ ) {
  if (myAdmins[m2] === "Stop") {
    break;

  }
  X++;
}

document.write(`<h1>We hava ${X} Admins </h1> `);


for (let m2 = 0 ; m2 < myAdmins.length; m2++ ) {
  if (myAdmins[2] === "Stop") {
    break;

  }
  k++;
  document.write(`<h3>the admins for team ${k} is ${myAdmins[m2]} </h3>`);
  document.write(`<h2>Team Members:</h2>`);
let s = 0; 

for (let j2 = 0 ; j2 < myEmployees.length ; j2++ ) {
  if (myAdmins[m2][0] === myEmployees[j2][0] ) {
    document.write(`<p>[${s+1}] ${myEmployees[j2]} <p>`)

    s++;
  }

}

}
document.write("#".repeat(50));
/////////////////////////////////////////////////////////
function mazen(name,age) {
  document.write(`<p>we this ${name} ${age}<p>`)
}
mazen("mazen" , 12)


function gen (start , end , no ) {
  for (let i = start ; i <= end ; i++) {
  if (i  === no) {
    continue;
  }

  console.log(i)

  }
}
gen(1978 , 2002 , 2000)
//////////////////////////////////////////////////////////

function num2 (mazen) {

  return `hello every one iam just ${mazen} beatful `


}
console.log(num2("mazen"))

function gan2 (start,end){

  for (let i2 = start ; i2 <= end;i2++) {
      if (i2 === 15) {
        return `stop`

      }
      console.log(i2)
    }

}
console.log(gan2(1,20))

function fin(name , age='hello' ) {
  // if (age === undefined ) {
  //   age = "hello";
                          // دي طريقه 
  // }
  return `hello this is ${name} ${age}`


}
console.log(fin("mazen"))


function la (...Number)  {
  let result = 0;

    for (let i = 0 ; i < Number.length ; i++) {
       result += Number[i];

    }
    return `is final ${result}`

}

console.log(la(99,33,44,5))



function la2 (name="nu" , age="UN" , show= "yes" , ...Num4){
  document.write(`<div>`)
  document.write(`<h1>Welcome, ${name}</h1>`)
  document.write(`<h2>Age : ${age}</h2>`)
  if ( show === "yes") {

    if (Num4.length > 0) {
      document.write(`<h2>skills : ${Num4.join(" | ")}</h2>`)
      

    }else{
      document.write(`<h2>skills : No skils</h2>`)

    }
    
  }else{
    document.write(`<h2>skills : hidden</h2>`)
    
  }
  
  
  document.write(`</div>`)

}

document.write(la2("mazen",12,"yes","code","write"))
//////////////////////////////////////////////////////////
let mazenfun = function () {
  console.log('show')
}

document.getElementById("show").onclick = function () {
  console.log("show")
}

setTimeout(function(){

console.log('good')
}
,2000)// دي بعد ثانيتين يظهرلي الكلمه دي
//////////////////////////////////////////////////////////
function one (fname , lname ) {
  let massege = `Hello`;
  function tow () {
    return `${massege} ${fname} ${lname}`

  }
  return tow()
}

console.log(one("mazen","zezo"))

//////////////////////////////////////////////////////////
function one (fname , lname ) {
  let massege = `Hello`;

  function tow () {
    
    function there () {
        return `${fname} ${lname}`

    }
   return `${massege} ${there()}`
  }
  return tow()
}

console.log(one("mazen","zezo"))
///////////////////////////////////////////////////////////
function one2 (fname , lname) {
  this_massege = "Hi this "
  function tow2 () {
    function three () {
      return `${fname} ${lname}`

    }

    return `${this_massege} ${three()}`
  }
  
  return tow2()

}
console.log(one2("mazen","Abdelwahed"))

////////////////////Arow////////////////////////
let mazen23 = (one , tow) =>{ one+tow
}

let project = one2 => { one2;
}
console.log(66)
////////////////////////////////////////////////
let names = function (...Number) {
  return `string ${Number} => Done !`
}
console.log(names("mazen","ahmed","lkjaf",'ali'))
/////////////////////////////////////////////////
let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});

console.log(inv);

let ign = ignoreNumbers.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);
//////////////////////////////////////////////////


let swappingCases2 = "elZERo";
let invertedNumbers2 = [1, -10, -20, 15, 100, -30];
let ignoreNumbers2 = "Elz123er4o";

// let swap = swappingCases2.split().map(function(ya) {
//   return ya === ya.toUpperCase()? ya.toUpperCase() : ya.toLocaleUpperCase() ;
// }) 
// console.log(swap)

let swa = swappingCases2.split().map(function(yaa) {
  return yaa === yaa.toUpperCase()? yaa.toUpperCase(): yaa.toUpperCase() 
} )

console.log(swa)
////////////////////////////////////////////////
filterw = ["mazen","moha","laj",'kareem',"this"]
filter_one = [1,2,3,45,6,7,8,9,0]

let fil = filterw.filter(function (ele){
  return ele.startsWith("m");
})
console.log(fil)

let one_mazen = filterw.filter(function(ele) {
  return ele.startsWith("l")
})
console.log(one_mazen)

let ignoreNumbers1 = "Elz123er4o";

let igno = ignoreNumbers1.split().map(function(ele2){
  return ele2 == ele2.toUpperCase()? ele2.toLowerCase() : ele2.toUpperCase();

})
console.log(igno)
let fel = filter_one.filter(function(ele){ 
  ////// الارقام الزوجيه
  return ele %2 === 0;
})
console.log(fel)


///////////////////// map and filter ///////////////////////////////////
/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let sen = sentence.split(" ").map(function(ele){
  return ele.length <= 3
})
console.log(sen)

// Ignore Numbers
let ignoreNumbers53 = "Elz123er4o";

let alajf = ignoreNumbers53.split("").map(function (ele) {
  return isNaN(toString(ele)) ? ele : "";
}).join("");

console.log(alajf);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let maxed = mix.split("").filter(function(ele){
  return !isNaN(parseInt(ele));
}).map(function(ele){
  return ele * ele;
})
console.log(maxed)


/////////////////////reduce///////////////////////////
let reduce = [10,20,30,40];

let reduc = reduce.reduce(function(ele,crun,index,atr){
  console.log(`## this ele ${ele}`)
  console.log(`this crun ${crun}`)
  console.log(`this index ${index}`)
  console.log(`this atr ${atr}`)
  return ele + atr

})

console.log(reduc)

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];


let reduc2 = theBiggest.reduce(function(ele,crun){
  console.log(`@@${ele}`)
  console.log(`${crun}@@`)

  return ele.length >=crun.length ? ele : crun;

})
console.log(reduc2)


let remo = removeChars.filter(function(ele){
  return !ele.startsWith("@")
})
console.log(remo)

let big = theBiggest.reduce(function(ele,crun){
  console.log(`@@${ele}`)
  console.log(`${crun}@@`)
  return ele <= crun ? ele : crun;
})
console.log(big)
/////////////////////////forEach//////////////////////////
let allis = document.querySelectorAll("ul li ")
let alldiv = document.querySelectorAll(".content div")
console.log(allis)

allis.forEach(function(ele){
   ele.onclick = function(){
    allis.forEach(function(ele){
      ele.classList.remove("active")
    })
    this.classList.add("active")
    alldiv.forEach(function(ele){
      
    })
   };
})
////////////////////////oop//////////////////////////////////
let oop = {
  name: 'mazen',
  age: 12,
  fin : function(){
    return `hello`
  },
}
console.log(oop.age)
console.log(oop.name)
console.log(oop.fin())

console.log("#".repeat(10))

let newVar = "let";

let oop2 = {
  name : "mazen",
  "let" : "eygpt"
  
}
console.log(oop2[newVar])
console.log(oop2["let"])

console.log("@".repeat(10))

oo3 = {
  contry :"eygpt",
  avilbal : false,
  mazen : ["jo","nan"],
  mazen2 :{
    contry : "london",
    age : 21 ,
  },

   mazen23:function(){
    if (oo3.avilbal === true ){
      return `work free`
    
    }
    else{
      return `No find`
    }
   },
}
// console.log(mazen23)

console.log(oo3["mazen2"]["contry"])
console.log(oo3.mazen23())

let age = {
  age : 37,
  age_mazen:function() {
    return this * 360
  }
}
/////////////////////////////////////////
let obj_1 = {
  pop1 : 1 ,
  merth1 : function(){
    return this.merth1.pop1;
  }
}

let obj_2 = {
  pop2 : 4,
  merth2 : function() {
    return this.pop2
  } 
}

let final_object = {
  pop1 : 200,
  pop2 : 300,
}

let oop5 = Object.assign(final_object , obj_1 , obj_2 )


console.log(oop5)

////////////////////Dom////////////////////////////
// let dom = document.querySelector("hello")
// let ele_id = document.getElementById("hello") 
let ele_all = document.getElementById("hello")
let a  =document.getElementsByTagName("div") 
let dom2 = document.querySelector("div") 
let calss_name = document.getElementsByClassName("active")
let all_ele = document.querySelectorAll("li")
console.log(ele_all)
console.log(a[2])
console.log(calss_name)
console.log(document.title)
console.log("@".repeat(10))


console.log(dom2.innerHTML)

dom2.innerHTML = " "
dom2.textContent = "this <span> is the <span>"

console.log(dom2.innerHTML)

// document.images[0].src ="https://google.com" 
// document.images[0].alt ="com" 

let ele_quree =document.querySelector("#show")

ele_quree.setAttribute("href","https://googel.com")
ele_quree.setAttribute("titel","mzen")


console.log(document.getElementsByTagName("p")[0].attributes)

let attr_one = document.getElementsByTagName("p")[0];

if (attr_one.hasAttribute("data-src")){
  if(attr_one.getAttribute("data-src") === " "){
    attr_one.removeAttribute("data-src")

  }else{
    attr_one.setAttribute("data-src", "chnge your live")
  }
   
}else{
  console.log("notfind")
}

if (document.getElementsByTagName("div")[2].hasAttributes()){
  console.log("has attrb")

}else{
  console.log("has not attrb")
}

let myElement = document.createElement("div")
let attr = document.createAttribute("data-mazen")
let opencharst = document.createTextNode("none mazen")
let commit = document.createComment("this commit")

myElement.className = "this class"

myElement.setAttributeNode(attr)
myElement.appendChild(commit)
myElement.appendChild(opencharst)

document.body.appendChild(myElement)
///////////////////////////////////////
for (let i = 0 ; i < 50 ; i++) {

  let myElement2 = document.createElement("div")
  let h_1 = document.createElement("h1")
  let paragraf = document.createElement("p")
  let next = document.createTextNode("creat text node")


  myElement2.className = "product"
  myElement2.appendChild(h_1)
  myElement2.appendChild(paragraf)
  paragraf.appendChild(next)


  document.body.appendChild(myElement2)

}





///////////////////cheldren Element/////////////////////
let Elment = document.querySelectorAll("div")[1]
console.log(Elment)
console.log(Elment.children)
console.log(Elment.lastChild)
console.log(Elment.firstChild)
console.log(Elment.childNodes[0])
console.log(Elment.firstElementChild)
console.log(Elment.lastElementChild)
///////////////////////////////////////////////////////
let this_Elemet = document.getElementById("zoz")
this_Elemet.onclick = (function() {
  console.log("onclick")
})

window.onscroll = function () {
  console.log("scrol")

}

//////////////////////preventDefualt////////////////////////////////////

let input_char3 = document.querySelector("[name=mazenzezo]") 

document.forms[0].onsubmit = function (e) {
  let input_name3 = false

  if(input_char3.value !== "" && input_char3.value.length >= 10) {
    input_name3 = true

  }
  console.log(input_char3.value)
  console.log(input_char3.value.length)
  
  if (input_name3 === false) {
    e.preventDefault()

  }


}
///////////////////////////////////////////////////////
let input_text =document.querySelector("#non")
window.onload = function (){
  input_text.focus()
}

input_text.onblur = function () {
  // document.links[0].click()

}


let calss_input = document.querySelector("#element")
console.log(calss_input.classList)
console.log(calss_input.classList.contains("mazen"))
console.log(calss_input.classList.contains("one"))//عشان اعدف هو موجود في الكلاس ولا لا 

calss_input.onclick = function() {
  calss_input.classList.toggle("maze")//ودي عشان اادد وامسح
  calss_input.classList.add("mazen")//دي عشان اضيف الكلاس
  calss_input.classList.remove("one")//ودي عشان امسح

}

let css_input = document.getElementById("css")
let css_after = document.createElement("p")
css_input.style.color = "red" // دي طريقه 
css_input.style.backgroundColor = "black"
css_input.style.removeProperty("letter-spacing")//  دي عشان امسح العنصر
css_input.style.setProperty("font-size","40px")

css_input.append(" mazen this sinuor")
css_input.after(css_after) // and before
// css_input.remove()/ //عشان امسح العنصر نهاييا 
css_input.prepend("prepend")// اضافه العنصر في الاول 

let my_span = document.querySelector(".tow_span")
console.log(my_span.nextSibling)// ودا عشان اوصل للعنصر اللي بعده 
console.log(my_span.nextElementSibling)// عشان اوصل للالمنت اللي بعده
console.log(my_span.previousSibling)// هيجبلي العنصر اللي قبل 
console.log(my_span.previousElementSibling)// بجبلي الالمنت اللي قبل العنصر اللي انا محدده 
console.log(my_span.parentElement)
console.log(my_span.parentElement.remove())




let copy_1 = document.querySelector("#element")
let copy_2 = document.querySelector(".content").cloneNode(true) // عشان اخد
copy_1.appendChild(copy_2)
copy_1.id = 'mazen_the_new_id' // لتغيير ال id
console.log(copy_1)

/////////////////addevent//////////////////////////////////////\

let add_event = document.querySelector(".add_event")

add_event.addEventListener("click",function() {
  // console.log(`hello this`)
  // console.log(`hello this 1`)
})

add_event.onclick = function() {
  let add_event1 = add_event.cloneNode(true)
  add_event.className = "clone"
  document.body.appendChild(add_event1)
}
document.addEventListener("click",function(e){
  if(e.target.className === "clone"){
    console.log("iam cloned")
  }
})

// let confirm = window.confirm("your admin ")
// console.log(confirm) // دا عشان اعمل رسالر تبيه واحط شروط
// if (confirm === true ) {
//   console.log("yes this admin")

// }else{
//   console.log("not this admin ")
// }

// let prompt_1 = window.prompt("write text here >>","i know ")// عشان اعمل برضه رساله تنبيه بس دي انا اللي اكتب فيها كل حاجه
// consloe.log(prompt_1)


setTimeout(function(e){
  console.log(`iam know this ${e} `) // دي طريقه ودي طريقه 
},4000,'mazen')

//////////////////////
//دي طريقه 
let set_time = setTimeout(mazen,9000,"tow")
 
function mazen (q){
  console.log(`iam know this ${q} `)
}

let button = document.querySelector("#button")

button.onclick = function() {
  clearTimeout(set_time)

} 


setInterval(function(e){
  console.log(`this mazen ${e}`)// كدا هيعد كل ٣ ثواني وهيطبعلي الكلمه دي
},3000,"###")

let intreval_1 = document.querySelector("#intreval")

function maz (){
  intreval_1.innerHTML -= 1
  if(intreval_1.innerHTML === "0") {
    clearInterval(script)
  }
 
}
let script = setInterval(maz,1000);

console.log(location)// معلومات عن الموقع زي الهوست والبروتكول و البورت
cosnloe.log(location.hostname)// يعني اسم الموقع اي 
console.log(location.host)// نفس الكلام برضه 
console.log(location.port)
console.log(location.href)
console.log(location.protocol)
console.log(location.replace(`//بكتب هنا الموقع ومش هيستجل في الهيستوري`))
console.log(location.assign("دا هيتسجل في الهيستوري"))

setTimeout(function(){
  window.open("https://googel.com","_blank","width=400, top=100,top=100,height=400,rigth,400")
},3000)
// دي عشان يفتحلي ويندو بالمقاسات اللي انا عايزها 

cosnloe.log(history.length)//عشان اعرف عدد الاستوري اللي دخلت عليها
cosnloe.log(history.go(2))//عشان اطلع صفحتين لقدام 
cosnloe.log(history.go(-2))// عشان ارجع صفحتين لورا
cosnloe.log(history.forward)//عشان اتقدم صفحه
cosnloe.log(history.back)//عشان ارجع صفحه 
/////////////////////////////////////////////////////////////////
let window_1 = window.open("https://googel.com","_blank","width=400, top=100,top=100,height=400,rigth,400")
console.log(window_1)
console.log(window_1.focus())// دي عشان لو انا مش فاتحها تظهر قدامي اول واحده 
console.log(window_1.stop())// دي عشان لو في تحميل اقفل التحميل 
console.log(window_1.close())// عشان اقفل الصفحه
console.log(window_1.print())// عشان اعمل برنت للصفحه 
console.log(window_1.scrollTo(5000,1000))// دي عشان احدد الاسكرول اللي في الصفحه وممكن اجيبه في اخر الصفحه 
console.log(window.scrollBy(33000,33))// دي انا كدا بزيدعلي السكرول اللي ان عامله الرقم دا
window.scrollTo({
  top : 20000,
  left : 5000,
  behavior :"smooth",
})
// دي برصه سكرول بس هنا بضيف الحركه بتاعتها تبقا سموز 

//////////////////button_scroll/////////
let btn = document.querySelector("button")
window.onscroll = function(){
    if (window.scrollY >= 600){
        // console.log(window.scrollY) // دي هنا بقله وريني بالرقم انا عديت السكرول ولا لا 
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    }
}

btn.onclick = function () {
    window.scrollTo({
        top : 0 ,
        left : 0 ,
        behavior : "smooth",
    })
}
/////////////////////////////////////////////////
// hhis newd