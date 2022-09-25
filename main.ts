input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Forever)
    얼굴인식()
})
function 얼굴인식 () {
    let 초기화 = 0
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == 0) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            music.stopAllSounds()
        }
    }
}
