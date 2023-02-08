class Bag {
    // Include constructor Method with the following property: 
        // 1. Weight
            //1a. Should handle an exception in case user adds no weight and throw an error.
    constructor(weight) {
        if (!weight) {
            throw new Error("bag needs weight")
        }
        this.weight = weight
     }
    }

try {
let bag1 = new Bag()
} catch (error) {
console.log(error)
}

//Export the module

module.exports = Bag