class Assignment {
    constructor(subject, level, dueDate) {
        this.subject = subject
        this.level = level
        this.dueDate = dueDate
    }

    announcement () {
        console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`)
    }
}

class AssignmentBuilder {
    setSubject (subject) {
        this.subject = subject
        return this
    }

    setLevel (level) {
        this.level = level
        return this
    }

    setDueDate (dueDate) {
        this.dueDate = dueDate
        return this
    }

    build () {
        return new Assignment(this.subject, this.level, this.dueDate)
    }
}

class AssignmentDirector {
    constructor(builder) {
        this.builder = builder
    }

    makeMathAssignment () {
        return this.builder
            .setSubject("Math")
            .setLevel("Hard")
            .setDueDate("12th June, 2020")
            .build()
    }

    makeScienceAssignment () {
        return this.builder
            .setSubject("Science")
            .setLevel("Medium")
            .setDueDate("20th June, 2020")
            .build()
    }
}

const builder = new AssignmentBuilder()
const director = new AssignmentDirector(builder)

const mathAssignment = director.makeMathAssignment()
mathAssignment.announcement()

const scienceAssignment = director.makeScienceAssignment()
scienceAssignment.announcement()
