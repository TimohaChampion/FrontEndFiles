/*1. Написать функцию, которая проверяет, является ли переданное ей число
совершенным. Совершенное число – это число, равное сумме всех своих
собственных делителей
2. Написать функцию возведения числа в степень.
3. Написать функцию поиска наибольшего общего делителя.
PS- 3 и 4 сделать через рекурсию*/

// task1 

function isPerfect(value){
    let sum=0;
    for(let i=1;i<value;++i){
        if(value%i==0)sum+=i;
    }
    if(sum==value)return true;
    else return false;
}
alert("task 1:\n"+isPerfect(61));

// task2
let bigValue=5;
let degree=2;
function showExponentiation(value, degree){
    
   if(degree!=1) return showExponentiation(value*bigValue, degree-1);
   else return value;
}
alert("task 2:\n"+showExponentiation(bigValue,degree));

// task3
let firstValue = 24, secondValue = 14;
let divider=firstValue;
function showNOD(firstValue, secondValue, divider){

    if(firstValue%divider==0 && secondValue%divider==0)return divider;
    else return showNOD(firstValue, secondValue, divider-1);
}

alert("task 3:\n"+showNOD(firstValue, secondValue, divider));
