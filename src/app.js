console.log("Merhaba Kodlama.io")

//JS type safe değildir
//JS kodları yukarıdan aşağıya doğru okur

let dolarDun = 7.5
let dolarBugun = 7.4

{
    let dolardun = 7.3
}

console.log(dolarDun)

const euroDun = 11.2

//euroDun = 11 olarak bir daha tanımlayamayız. çünkü ilk basta biz bunu sabit olarak tanımladık

console.log(euroDun)
//array
//camelCasing
//PascalCasing
let konutKredileri = ["konut Kredisi",12,"Kmlak Konut Kredisi",["a","aa"], "Kamu Konut Kredisi"]//tum veri tiplerini array içinde tanımlayabiliyoruz.

// console.log(konutKredileri)

//let users = getUsersFromApi()  bunun gibi bir komutla backanddan bilgileri çekeceğiz ileride.

console.log("<ul>")
for(let i = 0; i < konutKredileri.length; i++){
    console.log("<li>" + konutKredileri[i] + "<li>")
}
console.log("<ul>")
