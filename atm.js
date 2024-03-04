// console atm machine in javascript 

let amount = 4000
let username = "Gracious"
let password = "123456"
let withdraw = "2000"
let count = 1

while( count <= 3){

    if(!username == "Gracious" && !password == "123456"){
        console.log("You have " + count + "Remaining")
        count++

    }else{
        let currentBalance = amount - withdraw
        console.log(currentBalance)
    
    }
}