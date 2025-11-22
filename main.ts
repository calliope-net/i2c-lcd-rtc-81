input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (a < 2) {
        a += 1
    } else {
        a = 0
        basic.clearScreen()
    }
})
function Projekt () {
    pins.comment(pins.pins_text("calliope-net/i2c-lcd-rtc-81"))
    pins.comment(pins.pins_text("calliope-net/pins; calliope-net/lcd"))
}
let a = 0
lcd.init_display(lcd.eDisplay.qwiic_16_2)
a = 0
loops.everyInterval(1000, function () {
    pins.rtc_read()
    if (pins.keypadConnected()) {
        lcd.write_text(1, 0, 5, lcd.lcd_text(pins.rtc_set_key(pins.keypad_read())))
    }
    lcd.write_text(0, 3, 4, pins.rtc_get_string(pins.rtc_eFormat.ddd))
    lcd.write_text(0, 6, 15, pins.rtc_get_string(pins.rtc_eFormat.ddMM20yy))
    lcd.write_text(1, 6, 15, pins.rtc_get_string(pins.rtc_eFormat.hhmss))
    if (a == 1) {
        pins.rtc_25led(pins.rtc_e25led.Zeit)
    } else if (a == 2) {
        pins.rtc_25led(pins.rtc_e25led.Datum)
    }
})
