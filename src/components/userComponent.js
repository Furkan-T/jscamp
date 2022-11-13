import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"


console.log("User component yuklendi")
let logger1 = new MongoLogger
let logger2 = new ElasticLogger
let logger3 = new BaseLogger
let userService = new UserService(logger1)
let userService2 = new UserService(logger2)
let userService3 = new UserService(logger3)



let user1 = new User(1, "Furkan", "Tekiroglu", "İstanbul")
let user2 = new User(2, "Osman Bilal", "Çiçek", "Samsun")
userService.add(user1)
userService2.add(user1)
userService3.add(user1)

//console.log(userService.getById(1))
//console.log(userService.list())


// let customer = {id:1, firstName:"engin"}
// //prototyping deniyor tanımlamadıgımız bir değeri sonradan ekleyebiliyoruz.
// customer.lastName = "Demirog"

// console.log(customer.lastName)


console.log("-----------------------")

userService.load()

let customerToAdd = new Customer(1,"Seda", "Yılmaz", "Ankara", "fdghfg")
customerToAdd.type = "customer"

userService.add(customerToAdd)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())