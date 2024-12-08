let 数字 = 0
input.onButtonPressed(Button.A, function () {
    数字 = 1
    basic.showNumber(数字)
})
input.onButtonPressed(Button.B, function () {
    数字 += 数字
    basic.showNumber(数字)
})
