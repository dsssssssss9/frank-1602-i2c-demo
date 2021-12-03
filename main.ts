input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 16; index++) {
        I2C_LCD1602.shr()
    }
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Regards", 16, 0)
    I2C_LCD1602.ShowString("Jason", 16, 1)
    for (let index = 0; index < 15; index++) {
        I2C_LCD1602.shl()
    }
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("Hello", 0, 0)
I2C_LCD1602.ShowString("Frank", 0, 1)
basic.showIcon(IconNames.Butterfly)
