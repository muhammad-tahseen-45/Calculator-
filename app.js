var result = document.getElementById("inputresult")
function calresult(number){

result.value += number
console.log(result.value)

}



function allcalculate(){
    var final_number = result.value;
    final_result = eval(final_number);
    result.value = final_result

}

function clrs (){
    result.value = '';
}

function del (){
    result.value = result.value.slice(0,-1);
}

