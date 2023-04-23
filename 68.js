//Задание 1
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Вам понадобятся методы строк.

function ucFirst(str);
let newucFirst = 's';
console.log (newucFirst.toUpperCase(0) + ucFirst);


function ucFirst(str);
console.log (ucFirst.toUpperCase(0) + ucFirst);

//Задание 2
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.

function checkSpam(str);
if( checkSpam.includes ('badWord' || 'XXX') {
console.log ('true');
} else {
console.log ('false');
}

//Задание 3
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
//Обратите внимание: метод reverse существует только у массивов.
const ucFirst = ['Даша'];
ucFirst.reverse();
console.log (reverse);

//Задание 4
//Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые 
//машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
stations.forEach(element ⇒ {
let firstL = element.slice (0,4);
let index = element.indexOf(25);
let name = element.slice (index);
})
let result = firstL + index + name;
console.log (result);



//Задание 5
//Напишите функцию, которая проверяет, можержит ли массив элементы, равные нулю. Если да - возвращает true.
//Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]
function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}


//Задание 6
//Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
function unique(arr) {
  let result = [];
 for (let str of arr) {
    if (result.includes(str)) {
      result.push(str);
    }
  }
 return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
alert( unique(strings) ); 

//Задание 7
//Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.

function unique(verifyCats){
let catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];


}

//Задание8
let arr = [5, 4, 3, 8, 0];
function filterFor(arr,a) {
const newArr= filterFor.filter (function (item{
return item >= a;
})
return newArr;
}


//Задание 9
//Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов.
//Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

let arr = ['yes', 'hello', 'no', 'easycode', 'what']; 
function intrngers (array){
const newArray = array.filter(item => item.length == 3)

//Задание 10
//Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
//[ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
const numbers = [ [14, 45], [1], ['a', 'c', 'd'] ];
let a = [14, 45];
let b = ['a', 'c', 'd'];
let c = [1];
const sortedNums = nums.sort (function (a,b,c) ⇒ a.length-b.length);
