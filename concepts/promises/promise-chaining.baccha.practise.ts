// Humlog dekhega ki kaise promise chaining karte hain TypeScript mein
// Bhale hi zyada use nahin kiya hai maine TypeScript ko

// Apan log ek example lenge checkout process ka jismein teen steps hain:
// 1. Item ko cart mein add karna
// 2. Payment process karna
// 3. Order confirmation bhejna

// Har step ek promise return karega jo next step ko trigger karega

// Main bhuka hai isliye khaane ki cheezein daalyein hain maine
const cartList = ["Bhindi", "Boondi ke laddu", "Ghuyiyaan ki sabzi"];

addToCard(cartList)
    .then((updatedCart) => {
        console.log("Cart mein items hain:", updatedCart);
        return processPayment(updatedCart);
    }).then((message) => {
        return orderConfirmation(message);
    }).then((message) => {
        console.log(message)
    }).catch((error) => {
        // Edhar kabhi nahin pahunchega code sadly
        console.error("Something went wrong during the checkout process:", error);
    })

function addToCard(list: string[]): Promise<string[]> {
    const promise: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Main dieting pe hoon, isliye laddu hata raha hai
            resolve(list.filter(item => item !== "Boondi ke laddu"))
        })
    })
    return promise;
}


function processPayment(cart: string[]): Promise<string> {
    const promise: Promise<string> = new Promise((resolve, reject) => {  
        setTimeout(() => {
            // Free isliye hai kyonki main programmer hai, and programmer gets 100% discount
            resolve("Payment didn't happen as everything is free today!")
        }, 5000)
    })
    return promise
}

function orderConfirmation(message: String): Promise<string> {
    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            // Mereko paise milne chahiye kyonki main programmer hai
            resolve(`Congratulations! You got a 100% cashback of the total order value!`)
    }, 3000) })
    return promise;
}

// code run karaneka: node concepts/promises/promise-chaining.baccha.practise.ts