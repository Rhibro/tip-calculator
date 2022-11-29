let billPayment = 560;
let percentAmount;
let percent; 

if (billPayment > 300) {

    percent = 15 

} else if (billPayment < 300) {
    
    percent = 10 

}

percentAmount = (percent / 100) * billPayment;

let total = percentAmount + billPayment;

console.log(`The total amount of the bill is ${billPayment}. The tip % is therefore 

${percent} and the total amount to pay including tip is ${total}`)

