console.log('=====================Первое задание=====================');
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
console.log('==================Конец первого задания==================');
console.log('');
console.log('=====================Второе задание====================');
var a = 2;
var x = 1 + (a *= 2);
console.log(x + ', отрабатывается операция присваивания с умножением. Переменной а задается значение 2 и производится умножение на 2, после чего выполняется арифметическое сложение и выводится результат 5');
console.log('==================Конец второго задания================');
console.log('');
console.log('=====================Третье задание=====================');
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
console.log('=================Конец третьего задания=================');
console.log('');
console.log('====================Четвертое задание===================');
var a = Math.round (Math.random () * 16);//('Введите число от 0 до 15');
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
console.log('=================Конец четвертого задания=================');
console.log('');
console.log('======================Пятое задание=======================');

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
console.log('=====================Конец пятого задания=================');
console.log('');
console.log('======================Шестое задание=======================');
var a = parseInt(prompt (' enter a number '));
		var b = parseInt(prompt (' and one more number '));
		var operation = prompt (' Выберите операцию ( + - / * ) ');
		function summ () {
			return a + b;
		}
		function sub () {
			return a - b;
		}
		function div () {
			return a / b;
		}
		function mult () {
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
		}
        else {
	console.log('Что-то пошло не так');
}
console.log('===================Конец шестого задания================')
console.log('');
console.log('======================Седьмое задание=======================');
console.log('null и 0. null означает ничего, отсутствие данных. А 0 это ноль, цифра, значение, тип данных.Но прочитав статью на хабре, понял что надо разбираться с ним дальше.')
console.log('===================Конец седьмого задания===================');
console.log('');
console.log('==================Восьмое задание======================');
function pow(x, n) {
  if (n != 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}
var x = prompt('Введи число ');
var n = prompt('В какую степень возвести? ');
console.log( pow(x, n) );
console.log('====================Конец восьмого задания============')
	console.log('===Игра камень ножницы бумага===');
	var name = prompt('Как тебя зовут? ');
	var a = prompt('Сделайте выбор! 1 - Бумага, 2 - Камень, 3 - Ножницы')
	var b = Math.round (Math.random () * 2 + 1);
	if (a == 1) {
		console.log(name + ' выбрал Бумагу');
	} else if (a == 2) {
		console.log(name + ' выбрал Камень');
	}
	  else if (a == 3) {
		console.log(name + ' выбрал Ножницы');
	}
	if (b == 1) {
		console.log('ПК выбрал Бумагу');
	} else if (b == 2) {
		console.log('ПК выбрал Камень');
	}
	  else if (b == 3) {
		console.log('ПК выбрал Ножницы');
	}
	if ((a == 1 && b == 2) || (a == 2 && b == 3) || (a == 3 && b == 1)) {
		console.log(name + ' выиграл');
	} else if (a == b){
		console.log('Ничья');
	}
	else {
		console.log('ПК выиграл');
	}
	('===Конец игры===')