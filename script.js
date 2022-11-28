/*function payment(bill, tipPercent, total){

 total = (bill * tipPercent / 100)
`The total amount of the bill is ${bill}. The tip % is therefore 
${tipPercent > 300 ? "15%" : "10%"} and the total amount to pay including tip is ${total}`
}

payment(265.80, 10)*/

billPayment(250.85);

if (billPayment < 300) {
    return (10 / 100 * billPayment);
    console.log(billPayment);
} else (billPayment > 300); {
    return (15 / 100 * billPayment);
    console.log(billPayment);

}
