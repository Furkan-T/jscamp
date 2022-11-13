export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
    doSomething(){
        console.log("Başarılı bir şekilde loglandı.")//bu ana loggerda olduğu için diğer loggerlarda da bu aynen gecerlidir bundan dolayı 
        //diger elastic ve mongo loggerlarda bu fonksiyonu yazmadan da calısır.
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

