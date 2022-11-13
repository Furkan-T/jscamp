function addToCart(quantity, productName="elma") {
    console.log("Sepete eklendi: " + productName + " adet: " + quantity)
    
}

// addToCart()
addToCart(15)
// addToCart("Karpuz")

let sayHello = () =>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function (){
    console.log("hello world 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice){

}

let product1 = {productName:"Elma", unitPrice:10, quantity:5}//obje oluşturma (object defining)

function addToCart3(product){
    console.log("Ürün: " + product.productName + " Adet: "+ product.quantity + " Fiyat: " + product.unitPrice)
}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

//sayılar değer tip deger tipler değer tutar 4, 5 gibi
//obje ve arrayler ise referans tip referans tipler ise referans tutar yani objenin bellekte tutulduğu alanı tutar bundan dolayı da bu referansı tutan herhangi bir değiskende degistirilirse sonuc olarak bellektekli deger de degisir.

let sayi1 = 19
let sayi2 = 34
sayi1= sayi2
sayi2 = 100
console.log(sayi1)
// burada sayılar deger tip oldugu icin referans degil sadece degerler tutulur ve atama islemi yapıldıktan sonra o degiskenle daha isi olmaz

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5},
]

addToCart4(products)

function add(bisey,...numbers){//rest operatoru oluyor. rest operatoru kullanımı her zaman sonda olmalıdır aksi taktirde hata alırız.
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20, 30, 40)
add(20, 30, 40, 50)

//spread operatoru
let numbers = [1,2,3,4,5,6,7]
console.log(Math.max(...numbers))
//destructing
let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri,marmaraSehirleri, karadenizSehirleri]] = [
    {name:"ic anadolu", population:"20M"},
    {name:"marmara", population: "30M"}, 
    {name:"karadeniz", population:"10M"},
    [
        ["ankara", "konya", "aksaray"],
        ["istanbul", "bursa", "gebze"],
        ["samsun", "sinop", "giresun"]
    ]
]

console.log(icAnadoluSehirleri)
console.log(icAnadolu.population)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5}
)

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)