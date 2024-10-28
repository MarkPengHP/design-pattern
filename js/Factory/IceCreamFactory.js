class IceCreamFactory {
    createIceCream = (flavor) => {
        switch (flavor) {
            case 'chocolate':
                return new Chocolate()
            case 'mint':
                return new Mint()
            case 'strawberry':
                return new Strawberry()
            default:
                throw new Error(`Flavor ${flavor} is not available.`)
        }
    };
}

class Chocolate {
    constructor() {
        this.iceCreamFlavor = "chocolate"
    }

    message () {
        return `You chose the ${this.iceCreamFlavor} flavor.`
    }
}

class Mint {
    constructor() {
        this.iceCreamFlavor = "mint"
    }

    message () {
        return `You chose the ${this.iceCreamFlavor} flavor.`
    }
}

class Strawberry {
    constructor() {
        this.iceCreamFlavor = "strawberry"
    }

    message () {
        return `You chose the ${this.iceCreamFlavor} flavor.`
    }
}

const iceCreamFactory = new IceCreamFactory()

const chocolate = iceCreamFactory.createIceCream('chocolate')
const mint = iceCreamFactory.createIceCream('mint')
const strawberry = iceCreamFactory.createIceCream('strawberry')

console.log(chocolate.message())
console.log(mint.message())
console.log(strawberry.message())
