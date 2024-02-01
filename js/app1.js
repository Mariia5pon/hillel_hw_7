//Вывести на страницу в одну строку через запятую числа от 10 до 20
let fromNumber=10;
let toNumber=20;
let result= "";

for (let i=fromNumber; i <=toNumber; i++) {
    result +=i;

    if (i<toNumber) {
        result += ", ";
    }

}

document.write(result);