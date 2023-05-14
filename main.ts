input.onSound(DetectedSound.Loud, function () {
    FLAG = !(FLAG)
    if (FLAG) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
let FLAG = false
FLAG = true
