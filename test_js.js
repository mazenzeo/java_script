// hedear ceate element

let header = document.createElement("header")
let div = document.createElement("div")
let logo = document.createElement("a")
let ul = document.createElement("ul")
let li = document.createElement("li")
let li_2= document.createElement("li")
let li_3 = document.createElement("li")
let li_4 = document.createElement("li")
let a = document.createElement("a")
let a_2 = document.createElement("a")
let a_3 = document.createElement("a")
let a_4 = document.createElement("a")

let text = document.createTextNode("Elzero")
let text1 = document.createTextNode('Home')
let text_2 = document.createTextNode("About")
let text_3 = document.createTextNode("Service")
let text_4 = document.createTextNode("Conract")

// appending elment
document.body.appendChild(header)
header.appendChild(div)
header.appendChild(ul)
div.appendChild(logo)
logo.appendChild(text)
ul.appendChild(li)
ul.appendChild(li_2)
ul.appendChild(li_3)
ul.appendChild(li_4)
li.appendChild(a)
li_2.appendChild(a_2)
li_3.appendChild(a_3)
li_4.appendChild(a_4)
a.appendChild(text1)
a_2.appendChild(text_2)
a_3.appendChild(text_3)
a_4.appendChild(text_4)

// css 

document.body.style.cssText = "font-family:arial"
header.style.cssText = "display : flex  ; align-items : center ; justify-content : space-between ; padding : 15px"
logo.style.cssText = "color : green ; font-size:30px;"
ul.style.cssText = "display : flex ; "
li.style.cssText = "list-style:none"
li_2.style.cssText = "list-style:none;"
li_3.style.cssText = "list-style:none"
li_4.style.cssText = "list-style:none"
a.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px'
a_2.style.cssText = 'color: gray; padding: 10px; cursor: pointer; margin-right: 10px'
a_3.style.cssText = "color:gray ; margin-rigth:10px ; padding:10px "
a_4.style.cssText = "color:gray ; margin-rigth:10px ; padding: 10px "

//

let content = document.createElement("div")

content.className = "content"
header.after(content)

for(let i = 0 ; i < 15 ; i++ ) {
    let product = document.createElement("div");
    let span = document.createElement("span");
    span.textContent = i
    let product_text = document.createTextNode("product")
    product_text.className = "product"

    //append
    content.append(product)
    product.prepend(span)
    product.append(product_text)

    content.style.cssText = ""

}


