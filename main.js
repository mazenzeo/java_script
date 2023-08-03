window.alert("hello this is window");//عشان احط دساله اول ما اخش علي الموقع
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

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
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

console.log(ah2)