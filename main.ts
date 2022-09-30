input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Decolar!")
    basic.pause(randint(1000, 5000))
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (Tocar == false) {
        Tocar = true
        P2 += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Tocar == false) {
        Tocar = true
        P1 += 1
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Tocar = false
let P1 = 0
let P2 = 0
