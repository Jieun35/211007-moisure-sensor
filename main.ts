basic.forever(function () {
    pins.analogWritePin(AnalogPin.P10, pins.analogReadPin(AnalogPin.P10))
})
basic.forever(function () {
    basic.showNumber(tinkercademy.MoistureSensor(AnalogPin.P10))
})
