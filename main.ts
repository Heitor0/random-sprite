input.onButtonPressed(Button.A, function () {
    Sprite1.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Sprite1.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Sprite1.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Sprite1.change(LedSpriteProperty.Y, -1)
})
let Enemy: game.LedSprite = null
let Sprite1: game.LedSprite = null
Sprite1 = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
loops.everyInterval(1000, function () {
    Enemy = game.createSprite(randint(0, 4), randint(0, 4))
})
loops.everyInterval(10000, function () {
    game.addScore(1)
})
basic.forever(function () {
    if (Sprite1.isTouching(Enemy) == true) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
        control.reset()
    }
})
