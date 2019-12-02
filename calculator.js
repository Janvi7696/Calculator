    var btn = document.querySelectorAll('.button');
 calc.demo.value=0;

    Array.prototype.forEach.call(btn, function(btn) {
        btn.addEventListener('click', function() {

            // `e.currentTarget` or `this`
            var btnClicked = this.getAttribute('data-value');
            if(document.getElementById("demo").value.length>=1){

                var splitVal = document.getElementById("demo").value.split("0");
                //console.log(splitVal);
            }

            if(document.getElementById("demo").value==0){

                document.getElementById("demo").value += btnClicked;

            }else{

                document.getElementById("demo").value += btnClicked;
            }
        });
    });

//For scientific calculator

 var btn_1 = document.querySelectorAll('.button_1');
 calc.demo_1.value=0;

    Array.prototype.forEach.call(btn_1, function(btn_1) {
        btn_1.addEventListener('click', function() {

 var btnClicked = this.getAttribute('data-value');
            if(document.getElementById("demo_1").value.length>=1){

                var splitVal = document.getElementById("demo_1").value.split("0");
                //console.log(splitVal);
            }

            if(document.getElementById("demo_1").value==0){

                document.getElementById("demo_1").value += btnClicked;

            }else{

                document.getElementById("demo_1").value += btnClicked;
            }
        });
    });

    //Raise to power
    function myFunction1(){
        if(calc.demo.value.includes("^")){
            var array = calc.demo.value.split("^");
            calc.demo.value=Math.pow(array[0],array[1])
        }else{
            calc.demo.value= eval(calc.demo.value);
        }
    }
     function myFunction2(){
        if(calc.demo_1.value.includes("^")){
            var array = calc.demo_1.value.split("^");
            calc.demo_1.value=Math.pow(array[0],array[1])
        }else{
            calc.demo_1.value= eval(calc.demo_1.value);
        }
    }
    //clear operation 
    function clear_btn(){
        calc.demo.value=0;
    }
    //square operation
    function sqr(){
        calc.demo.value = Math.pow(calc.demo.value,2);
    }
    //addition operation
    function addition(val) {
        result += val;
    }
    //subtraction operation
    function subtraction(val) {
        result -= val;
    }
    //For division
    function division(val) {
        result /= val;
    }
    //For multiplication
    function multiplication(val) {
        result *= val;
    }
    //For 
    function square(val) {
        return val * val;
    }

    function squareRoot(val) {
        return Math.sqrt(val);
    }

    function percentage(val, res) {
        return res * val / 100;
    }

    function fraction(val) {
        return 1 / val;
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
    function mathLog(){
        calc.demo_1.value = Math.log10(calc.demo_1.value);
    }
    function Exp(){
        calc.demo_1.value= Math.Exp(calc.demo_1.value);
    }
    function Mod(){
        calc.demo_1.value=Math.Mod(calc.demo_1.value);
    }

     //push values to the memory
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
function addMemory(){
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
document.getElementById("evaluate").addEventListener("click", myFunction1);
document.getElementById("evaluation").addEventListener("click", myFunction2);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("Clear").addEventListener("click", clear);
document.getElementById("root").addEventListener("click", squareRoot);
document.getElementById("raise_power").addEventListener("click", square);     
document.getElementById("square").addEventListener("click", square);       
document.getElementById("dividex").addEventListener("click", fraction); 
document.getElementById("sin").addEventListener("click", mathSin); 
document.getElementById("cos").addEventListener("click", mathCos );
document.getElementById("tan").addEventListener("click", mathTan );
document.getElementById("Exponential").addEventListener("click", Exp ); 
document.getElementById("Modulus").addEventListener("click", Mod);




document.getElementById("delete").addEventListener("click", del);
document.getElementById("mc").addEventListener('click',function(){
    pushStack();
    addMemory();
});

//Memory Read operation
var sel = document.getElementById("select");
function selectValue(){ 
    if(calc.demo.value==0){

        calc.demo.value = sel.value;
    }else{
        calc.demo.value += sel.value;
    }

    sel.value="";
}
sel.addEventListener("change", selectValue);
