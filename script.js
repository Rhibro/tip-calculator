/*const billPayment = 560;
let percentAmount;
let percent; 

if (billPayment > 300) {

    percent = 15 

} else if (billPayment < 300) {
    
    percent = 10 

}

percentAmount = (percent / 100) * billPayment;

const total = percentAmount + billPayment;

console.log(`The total amount of the bill is ${billPayment}. The tip % is therefore 

${percent} and the total amount to pay including tip is ${total}`)*/

const bill = 560;

function calcTip() {
    
    if (bill > 300) {

        percent = 15 
        console.log("Tip is 15%")
    
    } else if (bill < 300) {
        
        percent = 10 
        console.log("Tip is 10%")
    
    }

}

console.log(calcTip())


function totalAmount(){

    let percentAmount = (parseFloat(percent / 100) * bill)
    console.log(`${percentAmount}`)

}

console.log(totalAmount())

function amount() {
    let total = (parseInt(totalAmount() + bill))
    console.log(`The total amount of the bill is ${bill}. The tip % is therefore 

    ${percent} and the total amount to pay including tip is ${total}`)
}

console.log(amount())