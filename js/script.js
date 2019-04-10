//Урок 1 задание 1//
function transCtoF() {
    var n = prompt("Ваше имя: ");
    console.log("Привет, " + n + "!" + "Это моё первое ДЗ на курсе JavaScript");
    var a = parseInt(prompt("Введите температуру в градусах по Цельсию:  "));
    console.log("Вы ввели " + a + " tC");
    if (isNaN(a)) {
        console.log("Нужно было ввести число")
    } else {
        console.log("Температура по Фаренгейту равно:  " + ((9 / 5) * a + 32) + " tF");
    }
}
//Урок 1 задане 2//
function adminName() {
    console.log("Второе задание");
    let admin = prompt("Введите имя админа");
    let name = prompt("Введите имя пользователя");
    console.log("Имя админа - " + (admin = name));
}

function answerThirdTask() {
    console.log("Ответ на третье задание: 1000108");
}

//Урок 2 задание 1 //
function answerTwoOne() {
    var a = 1,
        b = 1,
        c, d;
    console.log('объявлены переменные a b c d, переменным a и b заданы значения 1.');
    c = ++a;
    console.log(c + ', выполняется операция префикс-инкремента, сначала задается значение переменной а, увеличивается на единицу, затем выводится значение переменной с.');
    d = b++;
    console.log(d + ', выполняется операция пост-инкремента. переменная b увеличивается на единицу, но выводится значение до выполнения операции.')
    c = (2 + ++a);
    console.log(c + ', сначала выполняется операция префикс-инкремента, т.к. она имеет приоритет выше, чем арифметические действия. Т.о., переменная а увеличивается на единицу и равняется 3, далее выполняется арифметческое действие сложения 2+3 равно 5');
    d = (2 + b++);
    console.log(d + ', выполняется операция пост-инкремента по приоритету, значение b становится 3, но выводится значение до выполнения операции, т.е. 2. Далее выполняется арифметическая операция сложения 2+2 = 4');
    console.log(a + ', переменная а была увеличина на единицу дважды префикс-инкремент');
    console.log(b + ', переменная b была увеличина на единицу дважды пост-инкремент');
}
//Урок 2 задание 2 //
function answerTwoTwo() {
    var a = 2;
    var x = 1 + (a *= 2);
    console.log(x + ', отрабатывается операция присваивания с умножением. Переменной а задается значение 2 и производится умножение на 2, после чего выполняется арифметическое сложение и выводится результат 5');
    console.log('');
}
// Урок 2 задание 3 //
function answerTwoThree() {
    var a = parseInt(prompt('Введите значение A:  '));
    var b = parseInt(prompt('Введите значение B:  '));
    if (a >= 0 && b >= 0) {
        console.log('Числа a и b положительные, ' + a + ' - ' + b + ' = ' + (a - b));
    } else if (a <= 0 && b <= 0) {
        console.log('Числа a и b отрицательные, ' + a + ' * ' + b + ' = ' + (a * b));
    } else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
        console.log('Числа a и b разных знаков, ' + a + ' + ' + '(' + b + ')' + ' = ' + (a + b));
    } else {
        console.log(' Что-то пошло не так :( возможно вы ошиблись при вводе');
    }
}
// Урок 2 задание 4 //
function answerTwoFour() {
    var a = Math.round(Math.random() * 16); //('Введите число от 0 до 15');
    var result = "";
    if (a >= 0 && a <= 15) {
        switch (a) {
            case 0:
                result = " 0";
                // break;
            case 1:
                result = result + " 1";
            case 2:
                result = result + ' 2';
            case 3:
                result = result + ' 3';
            case 4:
                result = result + ' 4';
            case 5:
                result = result + ' 5';
            case 6:
                result = result + ' 6';
            case 7:
                result = result + ' 7';
            case 8:
                result = result + ' 8';
            case 9:
                result = result + ' 9';
            case 10:
                result = result + ' 10';
            case 11:
                result = result + ' 11';
            case 12:
                result = result + ' 12';
            case 13:
                result = result + ' 13';
            case 14:
                result = result + ' 14';
            case 15:
                {
                    result = result + ' 15';
                    console.log('Ряд чисел:' + result);
                }
            default:
                console.log('Рассчет окончен');
                break;
        }
    } else console.log('Что-то пошло не так');
}
// Урок 2 Задание 5 //
function answerTwoFive() {
    function sum(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function div(a, b) {
        return a / b;
    }

    function mult(a, b) {
        return a * b;
    }
}
// Урок 2 задание 6 //
function answerTwoSix() {
    var a = parseInt(prompt(' enter a number '));
    var b = parseInt(prompt(' and one more number '));
    var operation = prompt(' Выберите операцию ( + - / * ) ');

    function summ() {
        return a + b;
    }

    function sub() {
        return a - b;
    }

    function div() {
        return a / b;
    }

    function mult() {
        return a * b;
    }
    if ((operation === '+' || operation === '-' || operation === '/' || operation === '*') && ((a / a == 1) && (b / b == 1))) {
        switch (operation) {
            case '+':
                console.log(summ());
                break;
            case '-':
                console.log(sub());
                break;
            case '/':
                console.log(div());
                break;
            case '*':
                console.log(mult());
                break;
        }
    } else {
        console.log('Что-то пошло не так');
    }
}
//Урок 2 задание 7 //
function answerTwoSeven() {
    console.log('null и 0. null означает ничего, отсутствие данных. А 0 это ноль, цифра, значение, тип данных.Но прочитав статью на хабре, понял что надо разбираться с ним дальше.')
}
// Урок 2 задание 8 //
function answerTwoEight() {
    function pow(x, n) {
        if (n != 1) {
            return x * pow(x, n - 1);
        } else {
            return x;
        }
    }
    var x = prompt('Введи число ');
    var n = prompt('В какую степень возвести? ');
    console.log(pow(x, n));
}
// Урок 2 игра камень ножницы бумага //
function roshambo() {
    console.log('===Игра камень ножницы бумага===');
    var name = prompt('Как тебя зовут? ');
    var a = prompt('Сделайте выбор! 1 - Бумага, 2 - Камень, 3 - Ножницы')
    var b = Math.round(Math.random() * 2 + 1);
    if (a == 1) {
        console.log(name + ' выбрал Бумагу');
    } else if (a == 2) {
        console.log(name + ' выбрал Камень');
    } else if (a == 3) {
        console.log(name + ' выбрал Ножницы');
    }
    if (b == 1) {
        console.log('ПК выбрал Бумагу');
    } else if (b == 2) {
        console.log('ПК выбрал Камень');
    } else if (b == 3) {
        console.log('ПК выбрал Ножницы');
    }
    if ((a == 1 && b == 2) || (a == 2 && b == 3) || (a == 3 && b == 1)) {
        console.log(name + ' выиграл');
    } else if (a == b) {
        console.log('Ничья');
    } else {
        console.log('ПК выиграл');
    }

    ('===Конец игры===')
}


//Урок 3 задание 1//

function simpleNumbers() {
    console.log('***Задание 1***')
    var prime = [2];
    var num = 2;
    while (num <= 100) {
        var numcheck = true;
        for (var i = 0; i < prime.length; i++) {
            if (num % prime[i] === 0) {
                numcheck = false;
            }
        }
        if (numcheck === true) {
            prime.push(num);
        }
        num++;
    }
    console.log(prime);
}
//Урок 3 задание 2a//
var price = [1000, 300, 400, 200];
var item = ['Телефон', 'Зарядка', 'Наушники', 'Чехол'];

function goodsList() {
    console.log('***Задание 2a***');
    console.log(item[0] + ' стоит ' + price[0]);
    console.log(item[1] + ' стоит ' + price[1]);
    console.log(item[2] + ' стоит ' + price[2]);
    console.log(item[3] + ' стоит ' + price[3]);
}
//Урок 3 задание 2b //
function totalCost() {
    let summ = 0;
    for (let x = 0; x < price.length; x++) {
        summ += price[x];
    }
    console.log('***Задание 2b***');
    console.log('Стоимость всех товаров ' + summ);

}

//Урок 3 задание 3 //

function counterToNine() {
    console.log('***Задание 3***')
    for (var i = 0; i < 10; i++)
        console.log(i);
}

//Урок 3 задание 4//

function generatePyramide() {
    let number = '';
    console.log('***Задание 4***')
    for (let i = 1; i <= 20; i++) {
        console.log((number += '* '));
    }
}

//Урок 4 задание 1 //
function convertNumber(x) {
    var result;
    var transformation = {};
    var ones;
    var tens;
    var hundreds;
    var hint = ' состоит из:';

    //Проверка соответствия числа условиям задачи
    if ((x > 0) && (x < 999)) {
        hundreds = Math.floor(x / 100); //Формула определения 100, 10, 1//
        tens = Math.floor((x - 100 * hundreds) / 10);
        ones = (x - (100 * hundreds + 10 * tens));
        transformation = {
            'Единицы': ones,
            'Десятки': tens,
            'Сотни': hundreds
        };
        result = (x + hint + '\n');
        for (var numero in transformation) { //число в объект
            result += (numero + ': '+ transformation[numero] + '\n');
        }
        console.log(result);
    }
    else {
        console.log('Ошибочка вышла');
    }
}
