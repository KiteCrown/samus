namespace SpriteKind {
    export const energy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -230
    } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vy = -100
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vy = -100
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight, Predicate.HittingWallDown))) {
        projectile = sprites.createProjectileFromSprite(img`
            . 8 8 8 8 . 
            8 9 9 9 9 8 
            8 9 9 9 9 8 
            8 9 9 9 9 8 
            8 9 9 9 9 8 
            . 8 8 8 8 . 
            `, mySprite, 160, 0)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.HittingWallDown))) {
        projectile = sprites.createProjectileFromSprite(img`
            . 8 8 8 8 . 
            8 9 9 9 9 8 
            8 9 9 9 9 8 
            8 9 9 9 9 8 
            8 9 9 9 9 8 
            . 8 8 8 8 . 
            `, mySprite, -160, 0)
    }
})
let projectile: Sprite = null
let monster1: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffff
    cffffffffffffffffffffcbcffffffffffffffffcffffffffffffffffffffcbcffffffffffffffffcffffffffffffffffffffcbcffffffffffffffffcffffffffffffffffffffcbcffffffffffffffff
    ffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffff
    ffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffff
    ffffffffffffbbbfffffffffffffffffffff3fffffffffffffffbbbfffffffffffffffffffff3fffffffffffffffbbbfffffffffffffffffffff3fffffffffffffffbbbfffffffffffffffffffff3fff
    ffffffffffffcbcffffffffffffffffffffb3bffffffffffffffcbcffffffffffffffffffffb3bffffffffffffffcbcffffffffffffffffffffb3bffffffffffffffcbcffffffffffffffffffffb3bff
    ffffffffffffffffffffccffffffffffff33333fffffffffffffffffffffccffffffffffff33333fffffffffffffffffffffccffffffffffff33333fffffffffffffffffffffccffffffffffff33333f
    ffffffffffffffffffffccfffffffffffff3b3ffffffffffffffffffffffccfffffffffffff3b3ffffffffffffffffffffffccfffffffffffff3b3ffffffffffffffffffffffccfffffffffffff3b3ff
    fffffcfffffffffffffffffffffffffffffbfbfffffffcfffffffffffffffffffffffffffffbfbfffffffcfffffffffffffffffffffffffffffbfbfffffffcfffffffffffffffffffffffffffffbfbff
    ffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffff
    fffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffffffffff
    fffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffff
    ffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcf
    ffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffff
    fffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffff
    cffffffffffffffffffffcbcffffffffffffffffcffffffffffffffffffffcbcffffffffffffffffcffffffffffffffffffffcbcffffffffffffffffcffffffffffffffffffffcbcffffffffffffffff
    ffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffff
    ffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffff
    ffffffffffffbbbfffffffffffffffffffff3fffffffffffffffbbbfffffffffffffffffffff3fffffffffffffffbbbfffffffffffffffffffff3fffffffffffffffbbbfffffffffffffffffffff3fff
    ffffffffffffcbcffffffffffffffffffffb3bffffffffffffffcbcffffffffffffffffffffb3bffffffffffffffcbcffffffffffffffffffffb3bffffffffffffffcbcffffffffffffffffffffb3bff
    ffffffffffffffffffffccffffffffffff33333fffffffffffffffffffffccffffffffffff33333fffffffffffffffffffffccffffffffffff33333fffffffffffffffffffffccffffffffffff33333f
    ffffffffffffffffffffccfffffffffffff3b3ffffffffffffffffffffffccfffffffffffff3b3ffffffffffffffffffffffccfffffffffffff3b3ffffffffffffffffffffffccfffffffffffff3b3ff
    fffffcfffffffffffffffffffffffffffffbfbfffffffcfffffffffffffffffffffffffffffbfbfffffffcfffffffffffffffffffffffffffffbfbfffffffcfffffffffffffffffffffffffffffbfbff
    ffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffff
    fffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffffffffff
    `)
tiles.loadMap(tiles.createSmallMap(tilemap`level12`))
mySprite = sprites.create(img`
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . e e e e . . 
    . . 2 . . c . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
profilelife.setMaxLife(10)
info.setLife(10)
profilelife.setFilledLifeImage(img`
    . f f . . . f f . 
    f f 2 f . f 2 f f 
    f 2 2 2 f 2 2 2 f 
    f 2 2 2 2 2 2 2 f 
    . f 2 2 2 2 1 f . 
    . . f 2 2 1 f . . 
    . . . f 2 f . . . 
    . . . . f . . . . 
    `)
profilelife.setEmptyLifeImage(img`
    . f f . . . f f . 
    f . . f . f . . f 
    f . . . f . . . f 
    f . . . . . . . f 
    . f . . . . . f . 
    . . f . . . f . . 
    . . . f . f . . . 
    . . . . f . . . . 
    `)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . e e e e . . 
    . . 2 . . c . . 
    `,img`
    . . . . . . . . 
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . 2 . . c . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight, Predicate.HittingWallDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . c 2 2 2 . . 
    . c 7 2 2 2 2 . 
    . 6 7 7 1 2 2 . 
    . c f 2 2 e 4 4 
    . e 6 1 1 1 6 4 
    e . b 6 6 6 6 . 
    . . e e e e . . 
    . . c . . 2 . . 
    `,img`
    . . . . . . . . 
    . . c 2 2 2 . . 
    . c 7 2 2 2 2 . 
    . 6 7 7 1 2 2 . 
    . c f 2 2 e 4 4 
    . e 6 1 1 1 6 4 
    e . b 6 6 6 6 . 
    . . c . . 2 . . 
    `],
500,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft, Predicate.HittingWallDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . e e e e . . 
    . . 2 . . c . . 
    `,img`
    . . . . . . . . 
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . . 2 c . . . 
    `,img`
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . e e e e . . 
    . . c . . 2 . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . c 2 2 2 . . 
    . c 7 2 2 2 2 . 
    . 6 7 7 1 2 2 . 
    . c f 2 2 e 4 4 
    . e 6 1 1 1 6 4 
    e . b 6 6 6 6 . 
    . . e e e e . . 
    . . c . . 2 . . 
    `,img`
    . . . . . . . . 
    . . c 2 2 2 . . 
    . c 7 2 2 2 2 . 
    . 6 7 7 1 2 2 . 
    . c f 2 2 e 4 4 
    . e 6 1 1 1 6 4 
    e . b 6 6 6 6 . 
    . . . c 2 . . . 
    `,img`
    . . c 2 2 2 . . 
    . c 7 2 2 2 2 . 
    . 6 7 7 1 2 2 . 
    . c f 2 2 e 4 4 
    . e 6 1 1 1 6 4 
    e . b 6 6 6 6 . 
    . . e e e e . . 
    . . 2 . . c . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 2 2 2 2 . . 
    . 2 7 7 4 4 2 . 
    2 7 7 4 8 9 9 2 
    2 7 4 8 8 e 9 2 
    2 4 8 e e 9 9 2 
    2 4 8 8 8 9 2 2 
    . 2 2 9 9 2 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 9 9 9 2 2 . 
    2 4 9 e 9 9 2 2 
    2 4 8 8 e 8 9 2 
    2 7 4 8 e 8 9 2 
    2 7 7 4 8 8 2 2 
    . 2 7 7 4 4 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 2 9 9 2 2 . 
    2 2 9 8 8 8 4 2 
    2 9 9 e e 8 4 2 
    2 9 e 8 8 4 7 2 
    2 9 9 8 4 7 7 2 
    . 2 4 4 7 7 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 4 4 7 7 2 . 
    2 2 8 8 4 7 7 2 
    2 9 8 e 8 4 7 2 
    2 9 8 e 8 8 4 2 
    2 2 9 9 e 9 4 2 
    . 2 2 9 9 9 2 . 
    . . 2 2 2 2 . . 
    `],
100,
characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 2 2 2 2 . . 
    . 2 4 4 7 7 2 . 
    2 9 9 8 4 7 7 2 
    2 9 e 8 8 4 7 2 
    2 9 9 e e 8 4 2 
    2 2 9 8 8 8 4 2 
    . 2 2 9 9 2 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 2 9 9 9 2 . 
    2 2 9 9 e 9 4 2 
    2 9 8 e 8 8 4 2 
    2 9 8 e 8 4 7 2 
    2 2 8 8 4 7 7 2 
    . 2 4 4 7 7 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 2 9 9 2 2 . 
    2 4 8 8 8 9 2 2 
    2 4 8 e e 9 9 2 
    2 7 4 8 8 e 9 2 
    2 7 7 4 8 9 9 2 
    . 2 7 7 4 4 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 7 7 4 4 2 . 
    2 7 7 4 8 8 2 2 
    2 7 4 8 e 8 9 2 
    2 4 8 8 e 8 9 2 
    2 4 9 e 9 9 2 2 
    . 2 9 9 9 2 2 . 
    . . 2 2 2 2 . . 
    `],
100,
characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 2 2 2 2 . . 
    . 2 4 4 7 7 2 . 
    2 9 9 8 4 7 7 2 
    2 9 e 8 8 4 7 2 
    2 9 9 e e 8 4 2 
    2 2 9 8 8 8 4 2 
    . 2 2 9 9 2 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 2 9 9 9 2 . 
    2 2 9 9 e 9 4 2 
    2 9 8 e 8 8 4 2 
    2 9 8 e 8 4 7 2 
    2 2 8 8 4 7 7 2 
    . 2 4 4 7 7 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 2 9 9 2 2 . 
    2 4 8 8 8 9 2 2 
    2 4 8 e e 9 9 2 
    2 7 4 8 8 e 9 2 
    2 7 7 4 8 9 9 2 
    . 2 7 7 4 4 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 7 7 4 4 2 . 
    2 7 7 4 8 8 2 2 
    2 7 4 8 e 8 9 2 
    2 4 8 8 e 8 9 2 
    2 4 9 e 9 9 2 2 
    . 2 9 9 9 2 2 . 
    . . 2 2 2 2 . . 
    `],
100,
characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . 2 2 2 2 . . 
    . 2 7 7 4 4 2 . 
    2 7 7 4 8 9 9 2 
    2 7 4 8 8 e 9 2 
    2 4 8 e e 9 9 2 
    2 4 8 8 8 9 2 2 
    . 2 2 9 9 2 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 9 9 9 2 2 . 
    2 4 9 e 9 9 2 2 
    2 4 8 8 e 8 9 2 
    2 7 4 8 e 8 9 2 
    2 7 7 4 8 8 2 2 
    . 2 7 7 4 4 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 2 9 9 2 2 . 
    2 2 9 8 8 8 4 2 
    2 9 9 e e 8 4 2 
    2 9 e 8 8 4 7 2 
    2 9 9 8 4 7 7 2 
    . 2 4 4 7 7 2 . 
    . . 2 2 2 2 . . 
    `,img`
    . . 2 2 2 2 . . 
    . 2 4 4 7 7 2 . 
    2 2 8 8 4 7 7 2 
    2 9 8 e 8 4 7 2 
    2 9 8 e 8 8 4 2 
    2 2 9 9 e 9 4 2 
    . 2 2 9 9 9 2 . 
    . . 2 2 2 2 . . 
    `],
100,
characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . 2 2 2 c . 
    . . 2 2 2 2 7 c 
    . . 2 2 1 7 7 6 
    . 4 4 e 2 2 f c 
    . 4 6 1 1 1 6 e 
    . . 6 e e e e . 
    . . . . . 2 c c 
    . . . . . . 2 2 
    `],
100,
characterAnimations.rule(Predicate.MovingDown, Predicate.HittingWallRight, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . c 2 2 2 . . . 
    c 7 2 2 2 2 . . 
    6 7 7 1 2 2 . . 
    c f 2 2 e 4 4 . 
    e 6 1 1 1 6 4 . 
    . e e e e 6 . . 
    c c 2 . . . . . 
    2 2 . . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingDown, Predicate.HittingWallLeft, Predicate.FacingLeft)
)
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    monster1 = sprites.create(img`
        . . 9 9 9 . . . 
        . 9 6 6 6 9 . . 
        9 2 9 9 9 6 9 . 
        9 9 6 6 9 9 6 9 
        . 9 9 9 . . 9 . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Enemy)
    monster1.ay = 500
    monster1.vx = -30
    tiles.setTileAt(value, assets.tile`transparency8`)
    tiles.placeOnTile(monster1, value)
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = 30
            value.image.flipX()
        } else if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = -30
            value.image.flipX()
        }
    }
})
