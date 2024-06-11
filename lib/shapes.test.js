const { Circle, Triangle, Square } = require('./shapes');


describe('Shapes', () => {

    describe('Triangle', () => {

        it('should create a triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points= "150, 20, 223, 182, 56, 182" fill = "blue" />');
        })
    })

    describe('Circle', () => {
        it('should create a Circle', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx= "150" cy= "100" r= "80" fill= "blue" />');
        })
    })

    describe('Square', () => {
        it('should create a Square', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x= "10" y= "10" width= "200" height= "200" fill= "blue" />');
        })
    })
})
