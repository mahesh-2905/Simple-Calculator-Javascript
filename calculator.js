function operands(num){
    document.getElementById("output").append(num);
}
function operators(operator){
    document.getElementById("output").append(operator);
}
function action(){
    var operation = document.getElementById("output").textContent.trim();
    console.log();
    if(operation.includes('+')){
       var sum = operation.split('+');
        document.getElementById("output").innerHTML = parseInt(sum[0]) + parseInt(sum[1]);
    }else if(operation.includes('-')){
        var diff = operation.split('-');
        document.getElementById("output").innerHTML = parseInt(diff[0]) - parseInt(diff[1]);
    }else if(operation.includes('*')){
       var mul = operation.split('*');
        document.getElementById("output").innerHTML = parseInt(mul[0]) * parseInt(mul[1]);
    }else if(operation.includes('/')){
        var div = operation.split('/');
        document.getElementById("output").innerHTML = parseInt(div[0]) / parseInt(div[1]);
    }
}
function clearall(){
    document.getElementById("output").innerHTML = "";
}


