function alertMyMessage(message){
    alert(message);
}

function testShowPlus(a,b){
    let result = 0;
    result = a+b;
    document.write(result+'<br>');
}

function testPlus(a,b){
    let re = 0;
    re = a+b;
    return re; //return 값을 안주면 indefined가 나온다.
}