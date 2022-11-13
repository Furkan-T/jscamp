let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Sarj cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]
console.log("<ul>")
cart.map(product=>{
    //bu süslü parantez sayesinde birden fazla satır da yazabiliriz süslü parantez kullanmadan tek satırda da bitirebiliriz.
    console.log("<li>" + product.productName + " tutarı : " + product.quantity * product.unitPrice + "</li>")
})//map listeyi(arrayi)deki tüm elemanları teker teker dolaşmamızı sağlar.Bu itemler üzerinde istediğimiz sekilde oynayabiliriz.
console.log("</ul>")



function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

let total = cart.reduce((acc, product)=>acc + product.unitPrice*product.quantity, 0)
console.log(total)


console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)

console.log(sayi)