var buttons = document.getElementsByClassName("button");
var displayed = document.getElementById("screen");
var operand1 = 1;
var operand2 = 1;
var operator = null;
var result = 0;
var sign = 1;





function isOperator(opr){
    if (opr == '+' ||  opr == "-" || opr == "*" || opr == "/" || opr == "%"){
        return true;
    }else{
        return false;
    }
}


for (var i = 0 ; i< buttons.length ;i++){
    buttons[i].addEventListener('click',function(){
       
        var value = this.getAttribute('data-value');




        if (value == '+/-'){
            operand1 = parseFloat(displayed.textContent);
            console.log(operand1);
            if (isNaN(operand1)){
                displayed.innerText = '-';
                sign = -1;
            }else if(isNaN(operand1) === false ){
                operand1 = operand1 * -1;
                displayed.innerText = operand1;

            }
            else{
                operand1 = operand1 * sign;
                displayed.innerText = operand1;
        
            }
            

        }

 
        else if(value == 'ac'){
            displayed.innerText ='';
            operand1 = 1;
            operand2 = 1;
            operator = null;

        }

        else if(isOperator(value)){

            operand1 = parseFloat(displayed.textContent);
            
            if (isNaN(operand1)){

                displayed.innerText ='Error';

            }else{
                operator = value;
                displayed.innerText ='';

            }

        }else if(value == '='){

            operand2 = parseFloat(displayed.textContent);
            if (isNaN(operand2)){

                displayed.innerText ='Error';

            }else{
                displayed.innerText ='';
                result = eval(operand1 +" " + operator + " " + operand2);
                displayed.innerText = result;
    
          
            }            
 
        }else{

            displayed.innerText += value;

        }





    });
}
