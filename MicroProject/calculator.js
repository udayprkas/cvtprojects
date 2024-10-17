
    let input = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.reset');
    let equal = document.querySelector('.equalto');
    let delet = document.querySelector('.delete');
    let signs = document.querySelectorAll('.operator');

buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                input.value += value;
            }
        });
    });

    signs.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                input.value += value;
            }
        });
    });



   function evaluate(){
    if (input.value === '') {
                    input.value = "Please enter";
       } 
        else {
                    try {
                        let answer = eval(input.value);
                        if(answer % 1 !=  0){
                            input.value = answer.toFixed(3);        
                        }else
                        input.value = answer;
                    } catch (error) {
                        input.value = "Error";
                    }
                }  
    }

equal.addEventListener('click', function(){
    evaluate();
    });

clear.addEventListener('click', function(e) {
        input.value = "";
    });
delet.addEventListener('click', function(e) {
        input.value = input.value.toString().slice(0,-1);
    });
