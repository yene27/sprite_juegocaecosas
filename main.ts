function introJuego () {
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # #
        . # . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        . # . # .
        `)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jugador.change(LedSpriteProperty.X, 1)
})
let objeto: game.LedSprite = null
let jugador: game.LedSprite = null
introJuego()
led.setBrightness(150)
jugador = game.createSprite(2, 4)
game.setLife(2)
game.setScore(0)
jugador.set(LedSpriteProperty.Brightness, 200)
basic.forever(function () {
    basic.pause(randint(500, 1000))
    objeto = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        objeto.change(LedSpriteProperty.Y, 1)
    }
    if (objeto.isTouching(jugador)) {
        game.removeLife(1)
    }
    basic.pause(200)
    game.setScore(game.score() + 1)
    objeto.delete()
})
