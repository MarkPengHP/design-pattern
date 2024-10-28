class Printer {
    static getInstance () {
        if (!Printer.instance) {
            Printer.instance = new Printer()
        }
        return Printer.instance
    }

    display (pages) {
        console.log(`You are connected to the printer. You want to print ${pages} pages.`)
    }
}

const obj1 = Printer.getInstance()
obj1.display(2)
const obj2 = Printer.getInstance()
obj2.display(3)
console.log(obj1 === obj2)