input.onButtonPressed(Button.A, function () {
    radio.sendString("start")
})
radio.setGroup(115)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
