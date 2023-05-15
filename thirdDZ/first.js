let max=100,min=0;
let counter=Math.floor((max+min)/2);
alert("Ваше число 50?");
let answ=prompt();
let value=counter;
do{
    counter=Math.floor(counter/2);
    if(answ==1){
        value+=counter;
        alert( value + "?");
    }
    else if(answ==2){
        value-=counter;
        //max=Math.floor((max+min)/2);

        //min=Math.floor((max-min)/2);

        alert(value + "?");
    }
    else if(answ==3)break;
    else alert("Ошибка ввода!");
    
    answ=prompt();
}while(answ!=3);
//alert("Ваше число:",val);