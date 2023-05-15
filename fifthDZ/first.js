/*Задание:
1. Написать функцию, которая считает количество слов в
предложении
2. Написать функцию, которая принимает
словосочетание и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно
ориентированное программирование в ООП.
3. Написать функцию, которая проверяет, что введенный
телефон соответствует шаблону, пример телефона:
555-55-55 */

// task1
let str="Lorem ipsum dolor sit amet consectetur adipisicing elit.";

function showNumberWords(str){
    let counter = 0;

    for(let i=0;i<str.length;i++){
        if(str[i]==' ')counter++;
    }

    return counter+1;
}

alert("task1:\n" + showNumberWords(str));

// task2
let str1='объектно ориентированное программирование';
function getUpperCase(str1){
    let STR1=str1[0].toUpperCase();

    for(let i=0;i<str1.length;i++){
        if(str1[i] == ' ')STR1+= str1[i+1].toUpperCase();
    }

    return STR1;
}

alert("task2:\n" + getUpperCase(str1));

// task3
let phoneNumber=`255+51-111`;
function isPattern(number){

    if(number.length != 9)return false;
    else if(number[3]!='-' || number[6]!='-' )return false;
    else return true;

}
alert("task3:\n" + isPattern(phoneNumber));