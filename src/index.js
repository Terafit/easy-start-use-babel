let mes = 'Hello world'

console.log(mes)

for (let i = 0; i < mes.length; i++) {
    if (i % 2 == 0) {
        console.log("Цифра " + i + ' чётная')
    } else {
        console.log("Цифра " + i + ' нечётная')
    }
}