// Let's see how we do promise chaining in TypeScript
// Even though I haven't used TypeScript much
// I have translated the file promise-chaining.baccha.practise.ts to English using AI

// We'll take an example of a checkout process which has three steps:
// 1. Add item to cart
// 2. Process payment
// 3. Send order confirmation

// Each step will return a promise which will trigger the next step

// I'm hungry so I've added food items
const cartList = ["Spinach", "Lentil balls", "Vegetable curry"];

addToCard(cartList)
    .then((updatedCart) => {
        console.log("Items in cart:", updatedCart);
        return processPayment(updatedCart);
    }).then((message) => {
        return orderConfirmation(message);
    }).then((message) => {
        console.log(message)
    }).catch((error) => {
        // Code will sadly never reach here
        console.error("Something went wrong during the checkout process:", error);
    })

function addToCard(list: string[]): Promise<string[]> {
    const promise: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            // I'm on a diet, so I'm removing the sweet
            resolve(list.filter(item => item !== "Lentil balls"))
        })
    })
    return promise;
}


function processPayment(cart: string[]): Promise<string> {
    const promise: Promise<string> = new Promise((resolve, reject) => {  
        setTimeout(() => {
            // It's free because I'm a programmer, and programmers get 100% discount
            resolve("Payment didn't happen as everything is free today!")
        }, 5000)
    })
    return promise
}

function orderConfirmation(message: String): Promise<string> {
    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            // I should get money because I'm a programmer
            resolve(`Congratulations! You got a 100% cashback of the total order value!`)
    }, 3000) })
    return promise;
}

// Run the code using: node concepts/promises/promise-chaining.en.practise.ts