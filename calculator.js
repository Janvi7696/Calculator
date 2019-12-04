var btn = document.querySelectorAll('.button');
 calc.demo.value=0;

    Array.prototype.forEach.call(btn, function(btn) {
        btn.addEventListener('click', function() {

            // `e.currentTarget` or `this`
            var btnClicked = this.getAttribute('data-value');
            if(document.getElementById("demo").value.length>=1){

                var splitVal = document.getElementById("demo").value.split(0);
            }

            if(document.getElementById("demo").value=="0"){

                document.getElementById("demo").value += btnClicked;

            }else{

                document.getElementById("demo").value += btnClicked;
            }
        });
    });

function evaluate(){
       if(calc.demo.value.includes("^")){
            var array = calc.demo.value.split("^");
            calc.demo.value=Math.pow(array[0],array[1])
        }else{
            calc.demo.value= eval(calc.demo.value);
        }
    }




    function clear_btn(){
        calc.demo.value=0;
    }
    //clear the enteries 
    function clear_entry(){
        calc.demo.value=0;
    }
    //addition operation
    function addition(val,result) {
        result += val;
    }
    //subtraction operation
    function subtraction(val,result) {
        result -= val;
    }
    //For division
    function division(val,result) {
        result /= val;
    }
    //For multiplication
    function multiplication(val,result) {
        result *= val;
    }
    function square(){
        calc.demo.value = Math.pow(calc.demo.value,2);
    }

    function mathSqrt(){
    calc.demo.value = Math.sqrt(calc.demo.value);
    }

    function plusMinus(input) {
    if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}
  function percentage(val, res) {
        return res * val / 100;
    }

    function fraction(param) {
        return 1 / param;
    }
    //sin operation
    function mathSin(){
        calc.demo_1.value = Math.sin(calc.demo_1.value);
    }   
    //cos operation 
    function mathCos(){
        calc.demo_1.value = Math.cos(calc.demo_1.value);
    }
    //tangent operation 
    function mathTan(){
        calc.demo_1.value = Math.tan(calc.demo_1.value);
    }
    //log operation 
    function ln(form) {
    form.demo_1.value = Math.log(form.demo_1.value);
}
    function raise_power(){
        calc.demo_1.value = Math.pow(calc.demo_1.value);
    }
    function Exp(){
        calc.demo_1.value= Math.exp(calc.demo_1.value);
    }
    function Mod(x,y){
        
  return Math.mod(x, y) != 0
}



var queue =[];
        function pushStack(){

        if(Number.isNaN(+calc.demo.value)){
            alert("You can only save Numbers.");
        }else{

            if(queue.length>=10){
                queue.shift();
                queue.push(calc.demo.value);
            }else{
                queue.push(calc.demo.value);        
            }
    }

}
//Memory create 
/*function addMemory(){
    if(Number.isNaN(+calc.demo.value)){

    }else{

        var select = document.getElementById("select");

        var option = document.createElement("OPTION");

        var qlen = queue.length-1;

        var txt = document.createTextNode(queue[qlen]);

        option.appendChild(txt);

        option.setAttribute("value",queue[qlen]);

        select.insertBefore(option,select.lastChild);
    }
}
*/

//Delete operation 
function del(){

    if(calc.demo.value==""){
        calc.demo.value= 0;
    }else if(calc.demo.value==0){
        calc.demo.value= 0;
    }else if(calc.demo.value.substring(0, calc.demo.value.length - 1)==0){
        calc.demo.value= 0;
    }else{
        calc.demo.value = calc.demo.value.substring(0, calc.demo.value.length-1);
    }
}

document.getElementById("plus").addEventListener("click", addition);
document.getElementById("minus").addEventListener("click", subtraction);
document.getElementById("multiply").addEventListener("click", multiplication);
document.getElementById("divide").addEventListener("click", division);
document.getElementById("percentage").addEventListener("click", percentage);
document.getElementById("equal").addEventListener("click", evaluate);
document.getElementById("clear-entry").addEventListener("click", clear_btn);
document.getElementById("clear").addEventListener("click", clear_entry);
document.getElementById("sqrt").addEventListener("click", mathSqrt);
document.getElementById("sqr").addEventListener("click", square);
//document.getElementById("raise_power").addEventListener("click",raise_power );
//document.getElementById("fraction").addEventListener("click", fraction);      
//document.getElementById("plus-minus").addEventListener("click",plusMinus);                   
//document.getElementById("sin").addEventListener("click", mathSin); 
//document.getElementById("cos").addEventListener("click", mathCos );
//document.getElementById("tan").addEventListener("click", mathTan );
//document.getElementById("Exponential").addEventListener("click", Exp ); 
//document.getElementById("Modulus").addEventListener("click", Mod);
document.getElementById("clear-element").addEventListener("click", del);

//document.getElementById("mc").addEventListener('click',function(){
    pushStack();
    //addMemory();
/*var selScien = document.getElementById("scientific_div");
var selProg = document.getElementById("prog_div");
var selStand = document.getElementById("stand_div");
selProg.style.display="none";
selStand.style.display="none";


function showScientific(){
    selScien.style.display="block";
    selProg.style.display="none";
    selStand.style.display="none";

}


function showProg(){
    selScien.style.display="none";
    selStand.style.display="none";
    selProg.style.display="block";

}


function showStand(){
    selScien.style.display="none";
    selStand.style.display="block";
    selProg.style.display="none";

}*/
