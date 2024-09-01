controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -230
    }
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffceeccffffffffcffffffffffffffffffffceddecffffffffffffffffffffffffffcffffffcfffffffffffffffffffffffceccffffcffffffcceeccfffffffffffffffffffcebbbbbeeeeee
    ffffffffffceeccfffffffcfffffffffffffffffffffce4deecffffffffffffffffffffffcffffcfffffffffffccffffccfffffffffccccfffccffffffceecccfffffffffffffffffffeeb4444eeeeee
    fffffffffffceecccfffffffffffffffffffffffffeffeedbecffffffffffcfffffffffffffffcffffffffffffcffffffffffffffffffcccffccfffffcceecccffcffffffffffffffffeeb4444beeeee
    ffffffffffcceecebeffffffffffffffffffffffcfccfee4decffffffffffffffffffffffffffccccccccfffffffffcfffffcffffffffffcffccfffffceeeccfffccffffffccfffffffeeb4444eeeeee
    fffffffffffceeecccffffffffffffffffffffcfffcffce4deecffffffffffffffffffffffccccccccccccccccffffffffffccfffffffffffccfffffcceecccffffffffffffffffffffeb44b44eeeeef
    ffffffffccffceeccfffffffffffffffffffffffffccfceedbecffffffffffffffffffcfcccccccccccccccccccccccfffffccffffffffffcccffffcceeecfffccffffffffffffffcffcb4ebeeeeeecf
    ccffffffffffceeecffffffffffffffffffffffffffcfceed3ecffffffffffffffffffffccccceccccccccccccccccccccfcccffffffffffccfffffceeeccfffcccfffffffffffffbeee444beeeeeccf
    eeffffffffffcceeccfffffffffffffffffffffffffcfcce4deecfffffffffffcffcccccccccceeccccccccccccccccccccccccfffffffffccfffccceeeccfffccffffffffffffff4444444eeeeceeff
    eebefffffffffceeecfffffffffffffffffffffffffccfceedeecfffffffffffcffcccccccccceeccccccccccccccccccccccccfccffffffccccccceeeeccfffffffffffffffffcb444444beeeeeeeff
    ee44cffffffcffceecffffffffffffffffffffffffffcfcee3eeccfffffffffffcccccccccceeeeccccccccceeccccccccccccccccccccccccccccceeeecffffffffffffffffffe3334bbbbeeeeeefff
    ee44efffffffccce4ecfffffffffffffffffffffffffcfcee44eccffffffffffccccccccccceeeeeeeeeeeeeeeccccceeccccceeccccccccccccccee3eeccfffffffffffffffffb33344bbeeeffcffff
    eee4effffffffccceecffffffffffffffffffffffffcccfcee3eecccffffcccccccccceeccceeeeeeeeeeeeeeeeeeeeeecceece3cccccccccccccceedeeccffffffffffffffffc333344eeeeffffffff
    eeeeecffffffffcceeecfffffffccfffffffcffffffcccccee3eecccccccccccccccccebeceeeeeeeeeeeeeeeeeeeeeeecceece4eccccccccccccee4d3eeccfffffffffffffffc33334beecffffffffc
    eeceeeccffffffccceeccffcffcceffffffffffcccccccccce4eeccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeccccccccccccebd3d3eccfffffffffffffffc33334bbeffccfffffc
    ccceeeb4cffffffcce4cccfcffccecccccfccccccccccccccee4eccccccccccccccceceeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccce43dd4eccfffffffffffffffe3334bbeeeecffffccc
    ccceeeb4cffffffcce4cccfcffccecccccfccccccccccccccee4eccccccccccccccceceeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccce43dd4eccfffffffffffffffe3334bbeeeecffffccc
    ccceeee4efccfffccceecccfffceeeccccccfccccccccccccce4eeccccceeccccbeebeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccee44d3eeccffcffffffffffffb3344bbeeecfffccccc
    eeceeeeeecccffcccceeccccfccccccccccccccccccccccccce4eecccccccccce4ebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeebeeccccccccffffffffffcb344beeecfffccbccf
    bbcceceeccccecfcccceecccccfccccccccccccccccccccccceeeecccccccccceeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeebecccccccccccccccccffcc444eeeeccccccccff
    bbccccceecccebecccceeccccccccccccccccccccccccccccceeeeecccccccceeeeeeeeeee4e4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeececcccccccccccccccccfebbbbecceecccbccffff
    44eeeccccccccccccccceeccccccccccccccccccccccccccccceeeeeccccceeeeeeeeeeeee444eeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeecccee4ecccccccccccccccccccccebeeebeccccccccccccff
    44444eeecccccccccccce4ecccccccccccccccccccccccccccceeeeeecccceeeeee3eeeeee444eeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccb4ecceeccccccbcccccccc
    444444444eccccccccccceecccccccccccccccccccccccccccceeeeeeeebeeeeeebbeeeee44444e444b444444444eeee4eeeeeeeeeeeeeeeeee4eccccccccccccccccccccbbecccccccccccccccccccc
    4443444444ecccccccccceeccccccccccccccccccccccccccccee4eeeebbeeeeeebbeeee4444444444444444444444b44beeeeeeeeeeeeeeee4eecccccccccccccccccccceeceeccccccbccccccccccc
    44433444444ccccccccccceeccccccccccccccccccccccccceeee4eeeeeeeeeeee3eeee44444444444443344444444444bbbeeeeeeeeeeeeee4eecccccccccccccccccccccce4ccccccbcccccccccccc
    44443444444bccccccccccebeccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeebebb344333343333333333333334444bbbbeeeeeeeeeeee44eeeccccccccccccccccccccceecccccccccceeecccccc
    444444444444ecccccccccceecccccccccccccceeeeeeeeeeeeeee4eeeeeeeeeeeebb4b4433333333333333333333333bbbbbbbeeeeeeeeee3eeeeeccccccccccccccccccccccccccccccccebbeccccc
    44444444444beeccccccccceeccccccccccecceeeeeeeeeeeeeeee4eeeeeeeeeebbb444333333333333333333333333333bb4bbbeeeeeeee44eeeeeecccccccccccccccccccccccbccccccce33eccccc
    44444444434beeeccccccccceeccccccccceeeeeeeeeeeeeeeeeee4eeeeeeeebbbb4333333ddddd33d3333333dd33dd3333333bbbbeeeeee4eeeeeeeeeccccccceecccccccccebdccccccccebbeccccc
    444444444333eeeeccccccccebecccccccceeeeeeeeeeeeeeeeeeebbbeebbbbbbbb33333ddddddddd3d3dd333333dddd333333344bbbeee44eeeeeeeeeeecccceecccccccccebdcccccccccceecccccc
    4444443444433bceecccccccceeccccccccceeeeeeeeeeee4eeeeeebbbebbbbb33333333dd1dddddddddd33333333ddd3333333344bbbb434eeeeeeeeeeeeeeecccccccccccbbccccccccccccccccccc
    3344443444443bccccccccccceeeccccceeeeeeeeeeeeee4d4eebee3bbbbbb333333333ddd111ddd11dddd33334443ddd3333333334bb443beeeeeeeeeeeeeeeccccecccccebbbcccccccccccccceccc
    3344443444443bccccccccccceeeccccceeeeeeeeeeeeee4d4eebee3bbbbbb333333333ddd111ddd11dddd33334443ddd3333333334bb443beeeeeeeeeeeeeeeccccecccccebbbcccccccccccccceccc
    3334444443333bcccccccccccceeecceeeeeeeeeeeeeee4d1d4ebbebbbbb33333333333d111111111333333333444443dddd333333334434beeeebeeeeeeeeeeeccecccccbbbbcccccccccccccceeecc
    4434444444333bcccccccccccceeeeeeeeeeeeeeeeeeeebd134eb3b43bb333333333ddddddd1111d3333333dd34444443ddddd33333333344beeebeeeeeeeeeeeeeccccebbbeccccccccccccecceeccc
    44444444444333ecccccccccccebeeeeeeeeeeeeeeeeeee4d4beb3b43333333333ddd3333ddd11ddddd33333344444444bdddd333333333343bebbeeeeeeeeeeeeeeeeebbbeccccccccccceeeeeeccee
    444444444444333ccccccccccccebeeeeeeeeeeeeeeeeeeeb4bbbb3333333333dddd333333d111dddd33334444444444444ddddd33333d33333bbeeeeeeeeeeeeeeeeebbbeeeccccccccceebbbeeeeeb
    eee4444444e4443ecccccccccceeeeeeeeeeeeeeeeeeeeeebbbbbb333333333ddd1d333333d11d3334444433334444444444ddd33d33d33333bbeeeeeeeeeeeeeeeeeb4eeeeecccccccce44bbeeeeb4e
    ccce4beb4eeee44bcccccccccceeeeeeeeeeeeeeeeeedbbbb44bb3333333333dd11d333333dd334344444443444444444444d1d3ddd3d33334ebbeeeeeeeeeeeeeebeeeeeebeecccccccb4eeeeeee4ee
    cccceeceb4eee443bccccccccceeeeeeeeeeeeeebbeebbbb334b333333ddddd33d11333333dd33334333444444444444444431ddddddd3333bbbbbeeeeeeeeeeeeeeeeeee4deeecccceeeeeeeeee4ee4
    cccccccce444ee444beeeecceeeeee4eeeeeeeeee44ebbbb33b3333333dddddd31d3333333333d34431d44444433444444444d11dddd3333333bbbbbbeeeeeeeeee4beee4d1dbecccceebeeeeeebeee4
    ccccccceeb4444444343dbeeeeeeeeeeeeeeeeeeebbbbbbbb333333dd3dd1111dd3333333d3333344333344444444344444443d11dddd3333333bbbbbebeeeeeeeeeeeeeeb1beeccccccceeeeeeeeeee
    ccccccccbb4444eee4433dbeeeeeebebbeeeeeebbbbbbbbb3333333dddd1111133343344433344444443d334444444444444343111dddd333d333bbbbbbbeeee4eee4eeeeedeeeccceeeeeee44eeeeee
    cccccccccb4444eeceb4333eebbbeeebebebbbbbbbbb33b33333333dddd1ddd334434433444444334433344444444444444333d111ddddd333333bbb3bbbbbeebee44e4eeebeecceeeeeeee34eeeeee4
    ccccccccccee444eceb4444444333eee4bbbbbbbbbbb33333333333ddddd34334443444443344443333444444344444444434d11111d33333333333333bbbbeeee4444eeeeeeeceeeeeeeeeeeeeeeee4
    cccccccccccce44beee444444443dbeebbb3bbbbbbbb333333333dddddd343333444334433334444433333443333d4443d443111111d44333333333333344444b44eeeeeeeeeeeeeeeeeeeeeeeeeee44
    ccccccccccccceb44eeeb4444443dbeebbbb33bbb333333333333ddddd333333d3334d33333d3333333334443ddd344444443111111d43333333333333334444bbeeeeeeeeeeeeeeeeeeeeeeeeeeee44
    eeeecccccccccccebeeee44444443bebbbbbb333333333333333ddd11d4343344443d1dddddd3ddd333334443ddd344444441111111ddddd3333333343344444bbeeeeeeeeeeeeeeeeeeeeeeee3d3434
    cccecceccccccccceeeeee4e44444bbbbb3bbb33333333333333dddd33443344443333dd11d3333333333333dd3333344444311111111dddd333334443344444bbeeeeeeeeeeeeeeeeeeeeeee3dddd44
    cccecceccccccccceeeeee4e44444bbbbb3bbb33333333333333dddd33443344443333dd11d3333333333333dd3333344444311111111dddd333334443344444bbeeeeeeeeeeeeeeeeeeeeeee3dddd44
    eeeeeeecccccccceeeeeeeebbe43334bbbb333333333333333dddd1d444434444333333d1dd33333333333333333dd3334443d11d311111dd3333343333333344bbbeeeeeeeeeeeeeeeeeeeebd333444
    eeeeeeeeeccccceeeeeeeeebbbbb3333bb333333333333333d1111d4444444443333333d3dd3333333d3333333333dd3333433333431111dd333333333333334444bbeeeeeeeeeeeeeeeeeee33334444
    ddeeeeeeeeeeeeeeeeeeeeeebbbbb4443333333333333333dd1111d444443444433333333333333333dd3333333333ddd433d3334431111ddd33333333333334444444eeeeeeeeeeeeeeeebb33334444
    bbbbeeeeeeeeeeeeeeeeeeeeebb444444433333333333333dd1111d44444d334443343333333dd33333dd333333333d13333333344311dddddd3333333333333443444b44eeeeeeeeeeeebd333434444
    eeebbeeeeeeeeeeeeeeeeeeeebb44443333333333333333dd11111d433443dd444433d33333ddd33333dd333333333dd33333333343111dddddd3333333333333344444444444eeeeeeeebd333334444
    bbebdbeeeeeeeeeeeeeeeecebebee4433333333333333dddd111111dd33d3dd44443dd33333ddd333d3dd333333333d333333d3333311111dddd33333333333334444444444444b444bee3d333333443
    bbebbbbbbbeeeeeeeeeeeeccbbbee44333333333dd333dd1111111111111d33344333dd333333dddd3d33d333333dddd3333ddd333d11111ddddd3333333333333343444444444443d3bd33334343344
    bbbbbbb33beeeeeeebeeeeeced4be443333333333d333d1111d1111111111343333333dd33333dddddd3333333333ddd333dddd3d311113dd33dd3333333d3333334444444444443dd3333d33444beee
    444bbbbbbbbbeeeebbbbeeeedd444e4433333333333ddd11134d111d4d11d3433333333333333333ddddd3dd33333dddddddddd11dd11111dddd33333333bbb3333444444444443ddd333333343beeee
    dd44bbbbbbbbbeebbbbbeebb3b4444443343333333dddd11d4431111443d43334d3433333333333dd1d333dd333ddddd11d33dddddd111111d1dddd333bbbbebb3333344444be4dddd33333333beeeee
    ddd3bbbbbbbbbbbbbbbbbeebb444444444444333dddddd113444d11144444333333333333333333dd1d333ddddddddd11dddddddddd11111111dddd344bbeeeeee333444334fcedd333333333beeeccc
    ddddddbbbbbbbbb334bbbbbbbb44444444444433ddd111114444111133443333333333333333dd33d1d33dddddddddd1dddddddd11111111111ddd3444bbbeeeeb333433333ccd333333333bbbcccccc
    ddddddddbbbbbbb43d3bbbbbeb44444444444333ddd11111d443111d33333333d3333333333dddddd11ddddddddddddddddddddd111dd1111111dd34beeeeccccb333333333eb333333333bbbbcccccc
    33dee44ddbbbbbbb44444bbbbb344444444433dddd1111111d331113433333333dd3dddd33dddddd1ddddddddddddddddddddddd1113d11d3111ddeeeeeeccceedd333333333333344334bbbbccccccc
    bbefce443dbbbb4b4b444334333333443343dddd111111111111111d333333333333dd3dddddddddddddddddddddddddddddddddd11d111dd11dd3eeeeeeeeeeeddd3444333334334444bbbbbccccccc
    bbcccce443dd3333dd34443333333333d3433dddd1111111111d311133d33333d333333dddddddd1ddddddddddddddddddddddddd1111111111ddeeeeeeeeeeebd333433333444334444bbbbeccccccc
    bbcccce443dd3333dd34443333333333d3433dddd1111111111d311133d33333d333333dddddddd1ddddddddddddddddddddddddd1111111111ddeeeeeeeeeeebd333433333444334444bbbbeccccccc
    bbccccce443ddddddddd443333333333ddd33ddddd1d11111111dd11d31333333d3333ddddddddddddddddddddddddddddddddddddd11111111ddbeeeeeeeeee3443dd333344444333443b444eeecccb
    bbcccccce4bbb3ddddddd3333333333dddddddddddd11dbdd1111111111333333ddd33dddddddddddddddddddddd1dddddddddddddd11111111d3eeeeeeeeeee443d3d33344444444444334b4eecceeb
    bbeccccccebbbbbb3beddd333d33333dddddddddddd1ddeebd111111111d3333dddddddddddddddddddddd11dddddddddddddddddddd111111dd3eeeeeeeeeedddd34333d34444ec33333344eeeeebbb
    33eccccccce4bbbbbbbbddddd333ddd3dd1dddddddd1ddeeed11111111111d3ddddddddddddddddd1dddddddddddddddddddddddddd1111111dd3eeeeeeeebddddd33ddd3b444efe33333333eeeeebbb
    33bcccccccceb3333bb33dddddddddddddddddddddd11ddeedd1111dddd111ddddddddddddddddddddddddddddddddddddddddddddd11111d1dd4eeeeeebddddddddddd3beeecccb33333d333bbbbbbb
    333eccccccccbd333eb43333ddddddddddddddddddd111ddddd1111dddd1dd1dddddddddd1ddddddddddddddddddddd3d11dddd1dd11111d31ddebbeebdddddddddddddeccccccb3dd333333b3333333
    bbb3ccccccccbddd3eee433333dddddddddddddddddd11ddd111111dddd1dddddddddddd1ddddddddd1ddddddddddd33d1dddd1111111111d11dd1ddddddddddddddddbcecccee3d333333bee3333333
    bbb33eecccce33333ecce43333dddddddddddddddddddddddd111111d33ddddddddddddddddddd11ddddd111ddddd1dd11dd3d1111111111111111ddd443ddddddddddeeeeece43d333333eeb3333333
    bb3333becccb333bbeccceb333ddddddddd33dddddddddddd1111111ddddddd11dd1dddddd11111dddd4d11111d1111111d3d1111111111111111dd34444ddddddddddeeeeee43ddd3333beb33333333
    eeb3333bbcbddd3eeecccce33333ddddddddd3333ddd111dd11111111ddddddd11111ddd1111111ddd44d1111111111111dd1111ddd111111111dd4444eedddddddddddbbeb33dddd3333b3333333333
    eeebddd3bbdddd3beeeeeee3d3333dddddddd443343d1111dd111111111111dd1111111111111111dd43111111111dd111111111ddd111111111deeeeeebdddddddddddddddddddd333333be33333333
    eeebddddddddddbeeeeeeee3ddddddddddddbeeeee4d11dd11111111111111111111111111111111ddd11111111111d1d1111111d11111111111d4eeeeed1ddddddd333ddddddddd333db33dddd33333
    bbeeeb3ddbbddddeeeeeeeeb3dddddddddddeeeeeeed11dd111111111111111111111111111111111111111111111dd1d111d1dd111111111111d4eeeeb11ddddddd344dddddddddddddb344b333333d
    bbbeeeb3db3ddddbbeeeeeee33dbeb3dddddeeeeeeed111111111111111111111111111dd111111111111111111111111111111111111111d11d3eeeebd1dd34bddd44bd334edddd3bbbb4eeee44b33b
    bbeeeebbb333ddbb3beb3beb33dbee433dddbeeeeeed11111111111111111111111111111111111111111111111111111111d111111dd1ddddddbeeeedddd34eebddbdde44eebddbbeb44eeeeb4eeeee
    eeeeeeeeb444433bbbeebbbb333dbeeb33dddbeeeebddd1133dd111ddd1ddddd1111111111111111111111d1111dddd111ddddddd1ddddd33ddd3eee3dd33beebdddddbeeeeeebbbeeeeeeeeeeeeeeee
    eeeeeeeeb444433bbbeebbbb333dbeeb33dddbeeeebddd1133dd111ddd1ddddd1111111111111111111111d1111dddd111ddddddd1ddddd33ddd3eee3dd33beebdddddbeeeeeebbbeeeeeeeeeeeeeeee
    eeeeeeeebbbbbbbbebbeeeeeee444eb444334333333333dd443ddd34d33ddddddddddddd1dddddd1111ddddddddddddddddddddddd343dd3dddddd3ddd33beee433333eeeeeeeeeeebbeeeeeeeeeecce
    eeeeeeeeecebbbbeebeebbeeeb43333433333333333333ddd3433333d343ddddddddd3333333ddddddddddd33ddd33333333dd333d33333d333443ddd33b44444433344eeeeebbeee4deeeeeeeeecfce
    ffeeeeeeccceb44bee44ee4bb44434eb43334e434343dddddee4333333ddddddd3d33dd34333333ddd33ddd33333333333433333dd333333334443dd34e334eeee33344eeeebeeeee4d4444eeeefffce
    ccfeeeeeccceeeeefce44beebb444beb434ee43333433433eeee4333dd33333333333333333343dddd33333dd33333334444444333333333444443333ee44eeeeeb4444444beeeee43d4eeeeccccccce
    fffceeeeccceeeecccce44b4eeee4e44433ee33333333333eeeee4443333444344343433333ddddddd33333333dd344443334343333333333333434beee44eeeeeeeeeeeeeeeee4443d4eececcccccce
    ffffeeeecceeeeecccffe44beeeb444eeeb4443333333333eeece4444443343333333333333ddddddddddddd3333443344433433333344333334444eeee4eccceeeeeeeeeeeeeee44d134eeeccccccee
    ccfceeeeeeeeeeecccccfeeeeee4444eeeee44444334444eeecce44444333344333333334443dddddddddd333444444443433333beb33344444bbeeeee4eeceeeeeeeeeeeeeeeee4d111dbeeccccccee
    ccfeeeeeeeeeeeeeeccccceeeeeeeeeeeeee4ee44444444eeecccce4433334343444444443ddddddddddd444444444444444444eeeee4e4eee44eeeeee4eceeeeeeeeeeeeeeeecebd111dbeeeeecceee
    ccceeceeeeeeeeeeeeccccceeeeeeeeeeeeeeeeee44ee44eeccccccb444ee444eeeeee4ee4433dddddd344444444444ee444444444444ebeeeebeeeeeeeeeeeeeeeeeeeeeeeeccce4d1deeeeeecceeee
    ccceccfeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeecceccceeeeeee444eeeeeeeeee4dddddd34444ee4e44eeee4444444444eeeeeeeeeeeeeeeeceeeeeeceeeeeeeeccccee414eeeeeceeeeee
    ccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeee444eeeeeeeeeee4334bdd44eeeeeeeeee444444444beeceeeeeeeeeeeeeeeeeeeccccceeeeeeeeeeeeeedbeeeeeeeeeeee
    ccccceeeeeeecfceeeeeeeeeeeeeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeee43eeeeeeeeeeeeeeee444444e44effffeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeccebeeeeeeeeeeeee
    ccccceeeeeeeefceeeeeeeeeeeeeecfcceeeeeeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeee4333dbeeee4eeeeeee44444eeeeecffffeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeecceebeeeeeeeeeeee
    cccccceeeceeecfeeeeecceeeeeeecffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eee4d34eeeb33333ee44444eeffeeeeecfeeeeeeeeecceeeeeeeeccccceeeeeeeeeeeeebbeeeeeeeeeeee
    ccccccccccceeccceeeecccecceeeccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333beeee444eee44eefffceeefffceeeeeeeeeeeceeeeeeecccceeeeeeeecccceeebeeeeeeeeeeee
    ccccccccccceeeeeeeeeecceccccecccccccfeeeeeeeeeeeee4444ee4444444444ee4e444444bb333333333334eeeeeeefcececfffffeeeeeeeeeeeeceeeeeeeeeeeeeeeecccccccceeeeeeeeeeeeeee
    ccccccccccceeeeeeeeeecceccccecccccccfeeeeeeeeeeeee4444ee4444444444ee4e444444bb333333333334eeeeeeefcececfffffeeeeeeeeeeeeceeeeeeeeeeeeeeeecccccccceeeeeeeeeeeeeee
    cccccccccccceecceeeceecccccccecccccccceeeeeeeeeeeeee444e4444444444444444444444444433333444eeefffcfecfffffffc4444eeeeccceeeeeeeeeeeeeeeeeccccceccccceecceeeeeeeee
    cccccccccccccecceccccecccccccceccccccceeeeeeceeeeeeeeeeeeeee4444444444444ee44333344344444eeeccfffcfffffffffcee4eeeccccceeeeeeeeeeeeeeccccccbbbccccceecffeeeeeeec
    ccccccccccccccccceeccceeccccceecccccceeeeeeeeeeeccccceeeeceeee44e4e4444444444444444444444eecccffccccfffffffeeeeccccccceeeeeeeeeeeeecccccccbbbeccccccecccecfcecce
    cccccccccccccccccccccccceecccceeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444eeeecccccccccccccccfceeeecccccccceeeeeeeeccccccccccebbeecccccceeeeffffceee
    ccccccccccccccccccccccccceececceeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeee44444e444eeccccccccccccccccceeeeecccceeeeeeeeeeecfffccccceeeeeeccccccceeefffffceee
    ccccccccccccceeeeecccccccceeeecccccceeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444e44444eccccccccccccccccceeeeecccceeeecccceeecffffcceeeceeeeeeeccceeeecffffceeec
    cccccccccccceebbbbecccccccccceeeccccccccceeeecccceeecceeeeeeeeeeeeeeeeeeeeee444eeee4444eccccccccccccccccecceeeeccceecccccceecccccccceccccccebeeeeeccecffffceeecc
    ccccccccccccebbd4beccccccceccccceccccccccceecffffeeeeeeeeeeeeeeeeeeeeeeeece44eeeeeee44ecccccccccccccccccccececcccccccccceeeeeeccccccecccccceeeeeeeceecffffceecfc
    cccccccccccceb31dbeeecccccceeccccccccccccccecffffceecccceeeeeeeeeeeeeeeccceeeeeeeeeeeeeccccccccccccccceecccccccccccccccceeeeecccccceeeceebbbbbeeeccecfffffcecccf
    ccccccccccccebb3b4bbeecce44becccccecccccccccffffffffffffffceeeeeeeeeeecccebeeeeeeeeeeeeecccccccccceeeeeccccccccccccecceeeeccccccccebbbbbbbbbbeeeeeecfffffcccffff
    cccccccccccccbbbbbbccccccbbeeccccccbbbbbbbbcffffffffffffffffcceeeeeeeeeeeececeeeeeeeeeeee4eeccccceebbbbbbebbbbbeeb4beeccccccccccccccbbbebeeeeeeeeecffffffccfffff
    ffccccccccccceebbbeeecceeeeecccccccecccccccfffffcffffffffffffffceeeeeeeeccccceeeeeeeeeeeee444ee44444444444444e4444beccccccccccccecccceeeeeeeeeeeecffffffccffffff
    ffcccccccccccceeeeeeeeccccceecccccccccceccccfffffffffffffffffffffceecccccccceeeeeeeeeeeceeee4444444444eeb4444444bbeccccccccccccccccceeeeeeeeeeeecfffffffffffffff
    fffcccccccccccebceeeeecccccccccccccccccccecccffcfffffffffffffffffffcfffcccceeeeeeeeccccce4ee4444444be4bee4444444eccccccccccccccccccceeeeeeeeeeeeffffffffffffffff
    fffccccfffffffcccccccccccccccccccccccccccccfffffffffffffffffffffffffffffccfccccccccffffceeeeeeeeeeeeeeeeeeeeeeeeccffcccccccccccccccccccccccccccfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
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
profilelife.setProfileImage(img`
    . . 2 2 2 c . . 
    . 2 2 2 2 7 c . 
    . 2 2 1 7 7 6 . 
    4 4 e 2 2 f c . 
    4 6 1 1 1 6 e . 
    . 6 6 6 6 b . e 
    . . e e e e . . 
    . . 2 . . c . . 
    `)
profilelife.setMaxLife(10)
info.setLife(10)
tiles.setCurrentTilemap(tilemap`level2`)
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
