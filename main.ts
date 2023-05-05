input.onButtonPressed(Button.A, function () {
    kelvin = celsius + 273.15
    basic.showString("" + convertToText(Math.round(kelvin)) + " K")
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + celsius + "C")
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    fahrenheit = celsius * 1.8 + 32
    basic.showString("" + convertToText(Math.round(fahrenheit)) + "F")
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
})
let fahrenheit = 0
let celsius = 0
let kelvin = 0
led.setBrightness(50)
music.setVolume(255)
basic.forever(function () {
    celsius = input.temperature()
    if (celsius > 25) {
        basic.showArrow(ArrowNames.North)
    } else if (celsius > 18) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showArrow(ArrowNames.South)
    }
    basic.pause(1000)
})
