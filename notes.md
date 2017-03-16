# Operators
Unary,
Binary,
Ternary - conditional operator true ? 1 : 2
yield — получать (выходить с продуктом)
whereas (в то время как)
distinguish - отличать

# Variables
JS не предупраждает о том, что переписывается встроенная функция или свойство. Поэтому нужно быть осторожным. На такой переписке основан Prototype.js.

# Global object
В браузере это объект `window`. В нем хранятся глобальные переменные как свойства.

# Cards
Отличие function declaration/definition (statements top-to-bottom ? yes : no)
Не объявлять функции в ифе. Ф-ю в ф-и можно.

Call Stack — это место из которого вызвана функция (контекст). Когда функция вызывается, интерпретатор должен запомнить место, из которого
			 он вызвал эту функцию, чтобы после выполнения функции вернуть control flow в это место.

Все значения в js имеют свойства, за исключением null и undefined.

# Заметки для курсов
Узнать самому и рассказать о причинах нумерации элементов массивов с нуля.

Don notation, square brackets notation:
	value.prop // prop должен удовлетворять соглашению об именованнии переменных и присутствовать в объекте
	value[prop] // здесь prop сначала вычисляется
	Пример: arr['length'] == arr.length // значения в массиве храняться в свойствах, которые именуются цифрами. Поэтому используется нотация со скобками

## Объекты
Это валидно:

    var obj = { 'some name': 'some value'};

Mutable/immutable values
  
Момент (http://eloquentjavascript.net/04_data.html#p_fVZ1xXAqW5)

> var obj1 = { value: 10 };
> var obj2 = obj1; // ссылка
> var obj3 = { value: 10}; // не равен obj1
> 

Перебор элементов объекта:

    for (var event in map) { console.log event}

Map — объект, в котором связываются данные из одной области с данными, соответстующими им из другой области. Имя и его значение:

    var dinner = {
        'fish': 200,
        'olives': 3,
        'guakamole': 3
        'vine': 30,
    }


## Arrays
Arrays are a specific kind of object.
`arr.indexOf('val')` // returns -1 if there's no value

`push, pop` — добавить/убрать с конца
shift/unshift('some') - убрать/добавить с начала
пример: todolist:
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

indexOf — начальная позиция элемента в массиве, lastIndexOf - конечная позиция элемента в массиве. Поезно, если есть масив типа [1, 2, 3, 2, 1]. indexOf выдаст позицию первой двойки, lastIndexOf выдаст позицию второй двойки.

slice - отрезать кусок от первого индекса включительно до второго не включительно. Если задан один параметр, то это будет начальный и массив отрежется до конца.

concat - склеивает массивы.

Задача: Написать функцию, которая принимает массив и позицию элемента, который нужно удалить из массива.
function removeElement(arr, index) {
	var firstPart = arr.slice(0, index);
	var secondPart = arr.slice(index + 1);
	return firstPart.concat(secondPart);
}


# Strings
Strings are immutable: var myStr = 'some letters'; myString.myProperty = 'hello'; myString.myProperty // => undefined
slice(strt, stop_not_included)
indexOf(substring_index)
trim() // removes tabs, spaces etc. from start and end
charAt(1) // which charactes in under passed index. Similar to 'some string'[1]


# Functions
`artguments` 
Удобно для создания интерфейсов, где, например, нужно пройтись по параметрам и сохранить их куда-нибудь.

_Задача: Написать функцию, которая принимет произвольное количество аргументов и сохраняет их в объект._ См. (http://eloquentjavascript.net/04_data.html#c_mJiHtSVFDT).


# Документация
JSDoc


# Math
`Math.PI` - константы по традиции набираются прописными.
`Math.random()` - выдает псевдослучайное число от 0 (включительно) до 1 (не включительно).
## Округление
`Math.ceil()` - вверх до ближайшего целого.
`Math.round()` - до ближайшего целого.
`Math.floor()` - вниз  до ближайшего целого.

# Libraries
Разница в работе jQuery и Prototype.




